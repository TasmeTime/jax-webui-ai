import styled from "styled-components";
import { IMessage } from "../../types/common";
import Row from "../Row";
import AIResponse from "./AIResponse";
import GetStarted from "./GetStarted";
import UserChatBubble from "./UserChatBubble";
const ChatHolderEl = styled(Row)`
  flex: 1;
  height: fit-content;
  flex-direction: column;
`;

const MessageHolderEl = styled(Row)<{ active?: string }>`
  flex-direction: column;
  padding-top: 20px;
  /* border: 1px solid; */
  width: 100%;
  gap: 40px;
  height: fit-content;
  min-height: fit-content;
  display: ${(p) => (p.active === "true" ? "" : "none")};
`;

export default function ChatHolder({
  setPrompt,
  messages,
  resStream,
}: {
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  messages: IMessage[];
  resStream: string[];
}) {
  return (
    <ChatHolderEl>
      <MessageHolderEl active={messages.length > 0 ? "true" : ""}>
        {messages.map((x) => {
          if (x.role === "user")
            return <UserChatBubble key={x.id} content={x.content} />;
          else return <AIResponse key={x.id} content={x.content} />;
        })}
        {resStream.length > 0 ? (
          <AIResponse content={resStream.join("")} />
        ) : (
          ""
        )}
      </MessageHolderEl>

      <GetStarted setPrompt={setPrompt} active={messages.length <= 0} />
    </ChatHolderEl>
  );
}
