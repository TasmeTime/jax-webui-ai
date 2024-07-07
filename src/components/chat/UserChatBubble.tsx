import styled from "styled-components";
import Row from "../Row";
import { Colors } from "../../statics/Colors";

const UserChatBubbleEl = styled(Row)`
  background-color: ${Colors.Pry100};
  color: ${Colors.Background};
  width: fit-content;
  margin-left: auto;
  white-space: pre-wrap;
  padding: 10px;
  border-radius: 10px 0 10px 10px;
  text-align: right;
`;

export default function UserChatBubble({ content }: { content: string }) {
  return <UserChatBubbleEl>{content}</UserChatBubbleEl>;
}
