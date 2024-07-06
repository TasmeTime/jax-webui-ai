import styled, { keyframes } from "styled-components";
import Row from "./Row";
import { Colors } from "../statics/Colors";

const SpinnerEl = styled(Row)<{ size: string }>`
  justify-content: center;
  align-items: center;
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  min-width: ${(p) => p.size};
  min-height: ${(p) => p.size};

  position: relative;
`;

const svgAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`;

const circleAnimation = keyframes`
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  
  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }
  
  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
`;

const CircleEl = styled.circle<{ color: string }>`
  animation: 1.4s ease-in-out infinite both ${circleAnimation};
  display: block;
  fill: transparent;
  stroke: ${(p) => (p.color ? p.color : Colors.Pry100)};
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 280;
  stroke-width: 10px;
  transform-origin: 50% 50%;
`;

const SvgEl = styled.svg`
  animation: 2s linear infinite ${svgAnimation};
  /* max-width: 100px; */
  width: 100%;
  height: 100%;
`;
export interface ISpinner {
  size?: string;
  color?: string;
}

export default function Spinner({
  size = "22px",
  color = Colors.Pry80,
}: ISpinner) {
  return (
    <SpinnerEl size={size}>
      <SvgEl viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <CircleEl color={color} cx="50" cy="50" r="43" />
      </SvgEl>
    </SpinnerEl>
  );
}
