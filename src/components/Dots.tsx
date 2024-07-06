import styled, { css, keyframes } from "styled-components";
import Row from "./Row";
import { Colors } from "../statics/Colors";
const animation = keyframes` 0% {
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
}
40%,
50% {
  background-position: 100% 100%, 100% 0, 0 0, 0 100%;
}
90%,
100% {
  background-position: 100% 100%, 0 100%, 0 0, 100% 0;
}`;

const DotsEl = styled.div`
  width: 24px;
  aspect-ratio: 1;
  --_g: no-repeat radial-gradient(farthest-side, ${Colors.Pry100} 90%, #0000);
  background: var(--_g), var(--_g), var(--_g), var(--_g);
  background-size: 40% 40%;
  animation: ${animation} 1s infinite;
`;

export interface ISpinner {
  size?: string;
  color?: string;
}

export default function Dots() {
  return <DotsEl className="lds-ellipsis"></DotsEl>;
}
