import styled from "styled-components";
import { Colors } from "../statics/Colors";

const Button = styled.button`
  all: unset;
  display: flex;
  padding: 10px 20px;
  background-color: ${Colors.Pry100};
  color: ${Colors.Pry20};
  border-radius: 10px;
  cursor: pointer;
`;
export default Button;
