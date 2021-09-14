import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--color-primary);
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`;
export const MenuSup = styled.div `
  height: 10vh;
  width: 100vw;
  background-color: green;
`;
export const MenuInf = styled.div `
  height: 10vh;
  width: 100vw;
  background-color: green;
`;

export const Info = styled.div `
  height: 80px;
  width: 60vw;
  text-align: center;
  font-size: 20px;
  color: var(--color-primary-two);
  @media screen and (min-width: 768) {
    width: 100%;
  }
`;

export const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 350px);
`;

export const HeaderContainer = styled.div `
  height: 25vh;
  display: flex;
  justify-content: space-around;
  width: 90%;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px auto;

    h1 {
      font-weight: 700;
      font-size: 2rem;
      color: var(--color-title);
      margin-left: 100px;
      font-family: var(--font-text-primary);
      color: var(--color-primary-two);
    }

    h2 {
      margin-bottom: 20px;
      font-weight: 600;
      font-size: 1.5rem;
      color: var(--color-title);
      margin-left: 8px;
      font-family: var(--font-text-primary);
      color: var(--color-primary-two);
    }
  }

  .searchBar {
    width: 900px;
    height: 30px;
    border-radius: 8px;
    margin: 20px auto;
    border: 2px solid white;
    padding-left: 20px;
  }
`;

export const CalendarContainer = styled.div `
  font-size: 20px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: white;
`;