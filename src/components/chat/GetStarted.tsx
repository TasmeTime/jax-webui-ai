import styled from "styled-components";
import Row from "../Row";
import { Colors } from "../../statics/Colors";
import Prompts from "../../statics/Prompts";

const GetStartedEl = styled(Row)<{ active?: string }>`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: fit-content;
  margin: auto;
  flex-direction: column;
  display: ${(p) => (p.active === "true" ? "" : "none")};
  gap: 30px;
`;
const TitleEl = styled.h1`
  font-size: 5rem;
  margin: 0;
  padding: 0;
  color: ${Colors.Pry100};
`;
const SubTitleEl = styled.h3`
  color: ${Colors.Sec100};
  font-weight: 400;
`;
const HolderEl = styled(Row)`
  align-items: center;
  max-width: 880px;
  /* background-color: red; */
  gap: 18px;
`;
const SugEl = styled(Row)`
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  width: 200px;
  user-select: none;
  max-width: 200px;
  cursor: pointer;
  height: 80px;
  transition: all 0.15s;
  text-align: left;
  border: 1px solid ${Colors.Pry20};
  gap: 10px;

  & > div {
    &:first-child {
      font-size: 0.8rem;
      font-weight: bold;
    }
    &:last-child {
      font-size: 0.8rem;
    }
  }

  &:hover {
    transform: translateY(-8px);
    background-color: ${Colors.Pry20};
    box-shadow: rgb(223, 246, 255) 0px 2px 8px 0px;
  }
`;

export default function GetStarted({
  setPrompt,
  active,
}: {
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  active: boolean;
}) {
  return (
    <GetStartedEl active={active ? "true" : "false"}>
      <Row fd="column">
        <TitleEl>JAX</TitleEl>
        <SubTitleEl>ask me about stuff or give me a task</SubTitleEl>
      </Row>
      <HolderEl>
        {Prompts.map((p) => {
          return (
            <SugEl
              key={p.id}
              onClick={() => {
                setPrompt(p.prompt);
              }}
            >
              <div>{p.title}</div>
              <div>
                {p.prompt.length > 30
                  ? p.prompt.substring(0, 30) + "..."
                  : p.prompt}
              </div>
            </SugEl>
          );
        })}
      </HolderEl>
    </GetStartedEl>
  );
}
