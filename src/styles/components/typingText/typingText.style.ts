import styled, { keyframes } from 'styled-components';

export const Typing = styled.p`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
`;

const blink = keyframes`
0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
`;
export const BlinkCursor = styled.span`
  animation: ${blink} 1.5s step-end infinite;
  display: inline-block;
  background: #fff;
  width: 0.5rem;
  height: 2.5rem;
  margin-left: 7px;
`;
