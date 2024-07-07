import styled from "styled-components";
import Row from "./Row";
import ChatInput from "./input/ChatInput";
import ChatHolder from "./chat/ChatHolder";
import { useEffect, useRef, useState } from "react";
import { AI_MODELS, IMessage } from "../types/common";
import { v4 as uuidv4 } from "uuid";
// @ts-ignore
import { Ollama } from "ollama/browser";
import { Colors } from "../statics/Colors";

const AppEl = styled(Row)`
  width: 100svw;
  background-color: ${Colors.Background};
  height: 100svh;
  max-width: 100svw;
  max-height: 100svh;
  flex-direction: column;
`;

const ContentEl = styled(Row)`
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
  min-height: 100svh;
  flex-direction: column;
  height: fit-content;
  gap: 30px;
`;

const NewChatBtn = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  left: 50%;
  cursor: pointer;
  border-radius: 0 0 10px 10px;
  color: ${Colors.Pry100};
  position: fixed;
  top: 0;
  transform: translate(-50%, -80%) scale(1.05);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 100px;
  height: 20px;
  transition: all 0.15s;
  background-color: ${Colors.Sec100};
  color: ${Colors.Pry20};
  &:hover {
    transform: translate(-50%, 0) scale(1.05);
    /* top: 10px; */
  }
`;

function App() {
  const [maxContextSize, setMaxContextSize] = useState(1024 * 2);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [prompt, setPrompt] = useState<string>("");
  const [resStream, setResStream] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const inputRef = useRef<HTMLDivElement | null>(null);
  const canSend =
    !isLoading &&
    !isSending &&
    typeof prompt === "string" &&
    prompt.length > 0 &&
    prompt.length <= maxContextSize;

  const ollama = new Ollama({ host: "http://127.0.0.1:11434" });

  const newChat = () => {
    setPrompt("");
    setResStream([]);
    setMessages([]);
    setIsLoading(false);
    setIsSending(false);
  };
  function unescapeHtml(value: string) {
    var div = document.createElement("div");
    div.innerHTML = value.replaceAll("<br>", "\n");
    return div.textContent;
  }
  const sendPrompt = async () => {
    if (!canSend) return;
    setIsLoading(true);
    setIsSending(true);
    try {
      let tmpP = prompt;
      const userPrompt = {
        id: uuidv4(),
        role: "user",
        content: unescapeHtml(tmpP),
        // content: decodeURIComponent(tmpP)
        //   .replaceAll("<br>", "\n")
        //   .replace(/<[^>]+>/g, ""),
      } as IMessage;
      setMessages((prev) => [...prev, userPrompt]);

      const responseStream = await ollama.chat({
        stream: true,
        model: AI_MODELS.LLAMA3,
        messages: [...messages, userPrompt].filter(
          (x: any) =>
            typeof x.content === "string" &&
            x.content.length > 0 &&
            x.role !== "system"
        ),
      });
      setIsSending(false);

      setPrompt("");

      let tmpRes = "";
      let msgId;
      for await (const part of responseStream) {
        tmpRes = tmpRes + part.message.content;
        setResStream((p) => [...p, part.message.content]);
      }

      setMessages((prev) => [
        ...prev,
        { id: uuidv4(), role: "assistant", content: tmpRes },
      ]);
      setResStream([]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setIsSending(false);
      setIsLoading(false);
    }
  };
  const focusPrompt = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  useEffect(() => {
    if (resStream.length > 0) {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 1000000 });
      }
    } else {
      focusPrompt();
    }
  }, [resStream]);

  return (
    <AppEl>
      <ContentEl>
        {messages.length > 0 ? (
          <NewChatBtn onClick={newChat}>New Chat</NewChatBtn>
        ) : (
          ""
        )}
        <ChatHolder
          setPrompt={setPrompt}
          messages={messages}
          resStream={resStream}
        />
        <ChatInput
          messageCount={messages.length}
          inputRef={inputRef}
          isSending={isSending}
          isLoading={isLoading}
          prompt={prompt}
          sendPrompt={sendPrompt}
          canSend={canSend}
          setPrompt={setPrompt}
          maxContextSize={maxContextSize}
        />
      </ContentEl>
    </AppEl>
  );
}

export default App;
