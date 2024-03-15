import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const MainButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  font-size: 1rem;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #9a9a9a;
  background: #9a9a9a;
  transition: all ease-in-out 1s;
  animation: ${fadeIn} 1s ease-in;
  color: #fff;
  &:hover {
    border: 1px solid #fff;
    background: #3f3f3f;
    color: #fff;
  }
`;
