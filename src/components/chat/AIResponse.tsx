import styled from "styled-components";
import Row from "../Row";
import { IoCopyOutline } from "react-icons/io5";
import { Colors } from "../../statics/Colors";
//@ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard";

const AIResponseEl = styled(Row)`
  gap: 20px;
  width: fit-content;
  flex-direction: column;
`;

const ActionBarEl = styled(Row)`
  font-size: 1.25rem;
  svg {
    cursor: pointer;
    color: ${Colors.Black};
  }
`;

const ContentEl = styled.div`
  white-space: pre-wrap;
  width: fit-content;
  color: ${Colors.Pry80};
`;

export default function AIResponse({ content }: { content: string }) {
  return (
    <AIResponseEl>
      <ContentEl>{content}</ContentEl>

      <ActionBarEl>
        <CopyToClipboard text={content}>
          <IoCopyOutline />
        </CopyToClipboard>
      </ActionBarEl>
    </AIResponseEl>
  );
}
