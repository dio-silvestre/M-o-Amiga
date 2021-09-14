import styled, { keyframes } from "styled-components";

const slidein = keyframes`
 from {
   height: 0px;
  }

  to {
    height: 100px;
  }

`;

export const Container = styled.div`
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

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 350px);
`;

export const HeaderContainer = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  width: 100%;

  .messageContainer {
    display: flex;
    flex-direction: column;
    width: 30%;
    text-align: left;

    h1 {
      font-weight: 700;
      font-size: 3rem;
      color: var(--color-title);
      margin-left: 100px;
      font-family: var(--font-text-primary);
      color: var(--color-primary-two);
      //  color:var(--color-text-two)
    }

    h2 {
      margin-bottom: 20px;
      font-weight: 600;
      font-size: 2rem;
      color: var(--color-title);
      margin-left: 8px;
      font-family: var(--font-text-primary);
      color: var(--color-primary-two);
      //color:var(--color-text-two)
    }
  }

  .inputContainer {
    display: flex;
    width: 60%;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    border: none;

    span {
      margin-right: 20px;
    }

    .inputContainer:focus {
      border: none;
    }

    input {
      width: 350px;
      height: 40px;
      border-radius: 8px;
      border: 1px solid white;
      padding-left: 20px;
    }

    input:focus {
      border: none;
      // background-color: var(--color-text-two);
    }

    .searchContainer {
      height: 100px;
      width: 360px;
      z-index: 2;
      background-color: white;
      overflow: auto;
      animation: ${slidein} 2s;
      border: none;
      text-align: left;
      padding-left: 15px;
      box-shadow: 5px 8px 8px var(--color-secondary);
      border-radius: 3px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    height: 200px;

    h1 {
      font-weight: 700;
      font-size: 2rem;
      color: var(--color-title);
      margin-left: 100px;
      font-family: var(--font-text-primary);
      color: var(--color-primary-two);
      //  color:var(--color-text-two)
    }

    h2 {
      margin-bottom: 20px;
      font-weight: 600;
      font-size: 1rem;
      color: var(--color-title);
      margin-left: 8px;
      font-family: var(--font-text-primary);
      color: var(--color-primary-two);
      //color:var(--color-text-two)
    }
  }
`;

export const CalendarContainer = styled.div`
  font-size: 20px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: white;

  @media screen and (max-width: 768px) {
    display: flex;
    height: 600px;
    width: 80vw;
    margin: 0 auto;
  }
`;
