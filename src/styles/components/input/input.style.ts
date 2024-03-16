import styled from 'styled-components';

export const MainInput = styled.input`
  font-family: '사각사각';
  padding: 10px;
  border: 2.5px solid #4682b4;
  border-radius: 10px;
  width: 40vw;
  transition: all ease-in-out 0.5s;
  font-size: 1rem;
  &::placeholder {
    font-size: 1rem;
  }

  &:focus {
    border: 2.5px solid #799fbf;
    background: #799fbf;
    color: #fff;
    &::placeholder {
      color: #fff;
    }
  }
`;

export const CategoryInput = styled.input`
  font-family: '사각사각';
  padding: 10px;
  border: 2.5px solid #4682b4;
  border-radius: 10px;
  width: 10vw;
  transition: all ease-in-out 0.5s;
  font-size: 1rem;
  &::placeholder {
    font-size: 1rem;
  }

  &:focus {
    border: 2.5px solid #799fbf;
    background: #799fbf;
    color: #fff;
    &::placeholder {
      color: #fff;
    }
  }
  @media screen and (max-width: 845px) {
    width: 40vw;
  }
`;
