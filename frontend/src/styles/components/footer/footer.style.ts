import styled from 'styled-components';

export const StyledFooter = styled.section`
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: space-around;
  align-items: center;

  a {
    cursor: pointer;
    transition: all ease-in-out 0.4s;
    color: #fff;
    &:hover {
      color: #4682b4;
    }
  }
`;
