import styled from "styled-components";
import Row from "../../Row";
import { Colors } from "../../../statics/Colors";
import { AI_PRESETS, IAIPreset } from "../../../statics/Prompts";
import {
  settingsSetModel,
  settingsSetOllamaOptions,
  settingsSetSystemPrompt,
} from "../../../state/slices/settingsSlice";
import { useDispatch } from "react-redux";

const SettingsPresetsEl = styled(Row)`
  gap: 10px;
  flex-direction: column;
  user-select: none;
  width: 100%;
`;
const HolderEl = styled(Row)`
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;
const PresetItemEl = styled(Row)`
  padding: 20px;
  cursor: pointer;
  border-radius: 10px;
  outline: 1px solid ${Colors.Black};
  color: ${Colors.Pry20};

  &:hover {
    background-color: ${Colors.Black};
    outline-color: ${Colors.Background};
    color: ${Colors.Background};
  }
`;
const LabelEl = styled.label`
  font-size: 1.1rem;
  color: ${Colors.Black};
`;

export default function SettingsPresets() {
  const dispatch = useDispatch();
  const setFromPreset = (_preset: IAIPreset) => {
    dispatch(settingsSetModel(_preset.model));
    dispatch(settingsSetSystemPrompt(_preset.systemPrompt));
    dispatch(settingsSetOllamaOptions(_preset.ollamaOptions));
  };

  return (
    <SettingsPresetsEl>
      <LabelEl>Presets</LabelEl>
      <HolderEl>
        {AI_PRESETS.map((pr) => {
          return (
            <PresetItemEl
              fd="column"
              key={pr.id}
              onClick={() => {
                setFromPreset(pr);
              }}
            >
              <span>{pr.name}</span>
              {pr.des ? <span>{pr.des}</span> : ""}
            </PresetItemEl>
          );
        })}
      </HolderEl>
    </SettingsPresetsEl>
  );
}
