import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../state/mainStore";
import { Colors } from "../../statics/Colors";
import Row from "../Row";
//@ts-ignore
import { ListResponse, ModelResponse, Ollama } from "ollama/browser";
import { ChangeEvent, useEffect, useState } from "react";
import {
  closeSettings,
  settingsSetModel,
  settingsSetOllamaOptions,
  settingsSetSystemPrompt,
} from "../../state/slices/settingsSlice";
import { initOllamaOptions } from "../../types/common";
import Button from "../Button";
import SettingsPresets from "./presets/SettingsPresets";

const SettingsEl = styled(Row)<{ isopen: string }>`
  gap: 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100svw - 200px);
  height: calc(100svh - 200px);
  max-width: calc(100svw - 200px);
  max-height: calc(100svh - 200px);
  z-index: 69;
  pointer-events: ${(p) => (p.isopen === "true" ? "all" : "none")};
  opacity: ${(p) => (p.isopen === "true" ? "1" : "0")};
  flex-direction: column;
  background-color: ${Colors.Background};
  padding: 100px;
`;

const LabelEl = styled.label`
  font-size: 1.1rem;
  color: ${Colors.Black};
`;

export default function Settings() {
  const settings = useSelector((state: RootState) => state.settings);
  const { isOpen, model, ollamaOptions, host, stream, systemPrompt } = settings;
  const { num_ctx } = ollamaOptions;
  const ollama = new Ollama({ host });
  const [models, setModels] = useState<ModelResponse[]>([]);
  const dispatch = useDispatch();
  const closeSettingsClicked = () => {
    dispatch(closeSettings());
  };
  const fetchAvailableModels = async () => {
    const res: ListResponse = await ollama.list();
    setModels(res.models);
  };
  const modelChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(settingsSetModel(e.target.value as string));
  };
  const numCtxChanged = (e: ChangeEvent<HTMLInputElement>) => {
    let tmp = parseInt(e.target.value);
    if (tmp <= 0) tmp = initOllamaOptions.num_ctx || 1024 * 2;
    dispatch(
      settingsSetOllamaOptions({
        num_ctx: isNaN(tmp) ? initOllamaOptions.num_ctx || 1024 * 2 : tmp,
      })
    );
  };
  const systemPromptChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(settingsSetSystemPrompt(e.target.value));
  };

  useEffect(() => {
    fetchAvailableModels();
  }, [ollama]);

  return (
    <SettingsEl isopen={isOpen ? "true" : ""}>
      <SettingsPresets />
      <Row fd="column" gap="10px" width="fit-content">
        <LabelEl>Models</LabelEl>
        <select value={model} onChange={modelChanged}>
          {models.map((model) => (
            <option key={model.name} value={model.name}>
              {model.name}
            </option>
          ))}
        </select>
      </Row>
      <Row fd="column" gap="10px" width="fit-content">
        <LabelEl>num_ctx</LabelEl>
        <input type="number" min={1} value={num_ctx} onChange={numCtxChanged} />
      </Row>
      <Row fd="column" gap="10px" width="fit-content">
        <LabelEl>System Prompt</LabelEl>
        <textarea value={systemPrompt} onChange={systemPromptChanged} />
      </Row>
      <Row>
        <Button onClick={closeSettingsClicked}>Close</Button>
      </Row>
    </SettingsEl>
  );
}
