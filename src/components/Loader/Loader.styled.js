import styled from "styled-components";

export const LoaderWrapper = styled.svg`
  position: relative;
  width: 240px;
  height: 240px;
`;

export const Circle = styled.circle`
  fill: transparent;
  stroke-width: 12px;
  transform: rotate(-90deg);
  transform-origin: center;
`;

export const ProgressText = styled.span`
  position: absolute;
  text-align: center;
  width: 100%;
  font-weight: 800;
  font-size: 52px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoaderText = styled.span`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 17px;
`;
