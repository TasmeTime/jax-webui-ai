import styled from "styled-components";
import Row from "../Row";
import { Colors } from "../../statics/Colors";

const AIResponseEl = styled(Row)`
  gap: 10px;
  width: fit-content;
`;

const AvatarEl = styled(Row)``;
const ContentEl = styled.div`
  white-space: pre-wrap;
  width: fit-content;
  color: ${Colors.Pry80};
`;

export default function AIResponse({ content }: { content: string }) {
  return (
    <AIResponseEl>
      <AvatarEl />
      <ContentEl>{content}</ContentEl>
    </AIResponseEl>
  );
}
