import styled from 'styled-components';

export const StyledSidebar = styled.section`
  position: fixed;
  top: 150px;
  width: 15vw;
  height: 60vh;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #292929;
  border-radius: 20px;
  background: #c0c0c0;
  padding: 10px;
  gap: 10px;

  input {
    font-family: '사각사각';
    width: 90%;
    height: 25px;
    margin-top: 10px;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid #292929;
  }

  .menu-wrapper {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  .menu {
    width: 90%;
    cursor: pointer;
    display: flex;
    border: 2px solid #c0c0c0;
    border-radius: 15px;
    padding: 10px;
    align-items: center;
    gap: 10px;
    transition: all ease-in-out 0.7s;

    &:hover {
      border: 2px solid #4682b4;
      background: #4682b4;
      color: #fff;
    }
  }
  .menu-title {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  font-size: 14px;
`;
