import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { ButtonProps } from '@/types/components/button';
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  font-size: 1rem;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #e2d4ea;
  background: #e2d4ea;
  transition: all ease-in-out 1s;
  animation: ${fadeIn} 1s ease-in;
  color: #808080;
  &:hover {
    border: 1px solid #a883c0;
    background: #a883c0;
    color: #fff;
  }
`;
export default function Button(props: ButtonProps) {
  const { children } = props;
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
  };
  return <StyledButton onClick={goHome}>{children}</StyledButton>;
}
