import ContentEditable from "react-contenteditable";
import styled from "styled-components";
import { Colors } from "../../statics/Colors";
import Row from "../Row";
import SendBtn from "./SendBtn";
import Spinner from "../Spinner";
import Dots from "../Dots";
import { motion } from "framer-motion";
import { fadeInFromTop } from "../../animations/common.animation";

const ChatInputEl = styled(Row)<{ hasmessage: string }>`
  position: sticky;
  bottom: 0;
  z-index: 2;
  gap: 10px;
  flex-direction: column;
  margin-top: auto;
  min-height: fit-content;
  height: fit-content;
  transition: all 0.15s;
  padding-bottom: ${(p) => (p.hasmessage === "true" ? "100px" : "200px")};
`;

const HolderEl = styled(motion.div)`
  display: flex;
  align-items: center;
  background-color: ${Colors.Background};
  width: 70%;
  margin: 0 auto;
  border-radius: 10px;
  padding-right: 20px;
  outline: 2px solid ${Colors.Border};
  color: ${Colors.Pry20};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:focus {
    box-shadow: rgb(223, 246, 255) 0px 2px 8px 0px;
  }

  overflow: visible auto;
  & > #CHAT_INPUT {
    all: unset;
    min-height: 30px;
    width: 100%;
    font-size: 1.2rem;
    padding: 13px 20px;
    max-height: 300px;
    position: relative;
  }
`;

const CharacterCounterEl = styled(Row)`
  margin: 0 auto;
  font-weight: 400;
  font-size: 0.8rem;
  color: ${Colors.Pry20};
  width: fit-content;
  background-color: ${Colors.Sec100};
  padding: 2px 8px;
  gap: 3px;
  border-radius: 10px;
`;

export default function ChatInput({
  sendPrompt,
  prompt,
  canSend,
  setPrompt,
  maxContextSize,
  isSending,
  isLoading,
  inputRef,
  messageCount,
}: {
  inputRef: React.MutableRefObject<HTMLDivElement | null>;
  prompt: string;
  messageCount: number;
  sendPrompt: () => Promise<void>;
  canSend: boolean;
  maxContextSize: number;
  isSending: boolean;
  isLoading: boolean;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <ChatInputEl
      hasmessage={messageCount > 0 ? "true" : "false"}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          sendPrompt();
        }
      }}
    >
      {prompt.length > 0 ? (
        <CharacterCounterEl>
          <span> {prompt.length}</span>/<span>{maxContextSize}</span>
        </CharacterCounterEl>
      ) : (
        ""
      )}
      <HolderEl
        {...fadeInFromTop({
          transition: { duration: 0.5, delay: 0.7 },
        })}
      >
        <ContentEditable
          innerRef={inputRef}
          disabled={isLoading || isSending}
          id="CHAT_INPUT"
          html={prompt}
          onChange={(e) => {
            setPrompt(e.currentTarget.innerHTML);
          }}
          style={{ height: "auto" }}
        />
        {isSending ? (
          <Dots />
        ) : isLoading ? (
          <Spinner size="2rem" />
        ) : (
          <SendBtn sendPrompt={sendPrompt} canSend={canSend} />
        )}
      </HolderEl>
    </ChatInputEl>
  );
}
