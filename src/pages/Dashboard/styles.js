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
  width: 100vw;
  height: 100vh;
  display: flex;
  background: var(--main-background);
`;

export const FullContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: auto;
    width: 300px;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: calc(100% - 350px);
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-text-primary);
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media (min-width: 375px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 2rem;

    h1 {
      font-size: 3.4rem;
    }

    h2 {
      font-size: 2.6rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 0;
  }

  .messageContainer {
    color: var(--color-primary-two);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;

    @media (min-width: 768px) {
      align-items: flex-start;
      width: 65%;
    }
  }

  .inputContainer {
    width: 60%;
    margin: 5px auto;

    @media (min-width: 768px) {
      width: 30%;
    }

    input {
      width: 100%;
      margin: 0 auto;
      height: 40px;
      border-radius: 8px;
      border: 1px solid white;
      padding-left: 10px;
      outline: none;
    }
  }

  .iconContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    height: 40px;
    border-radius: 8px;
    border: 1px solid white;
    padding-left: 20px;
    outline: none;
    background-color: white;

    svg {
      font-size: 1.5rem;
    }
  }
  .searchContainer {
    max-height: 60px;
    padding-left: 5px;
    margin-left: 8px;
    background-color: white;
    overflow: auto;
    animation: ${slidein} 1s;
    border: none;
    text-align: left;
    box-shadow: 5px 8px 8px var(--color-secondary);
    border-radius: 0 0 5px 5px;
    position: absolute;
    width: 215px;

    @media (min-width: 425px) {
      width: 244px;
    }
    @media (min-width: 600px) {
      width: 292px;
    }
    @media (min-width: 1024px) and (max-width: 1140px) {
      max-width: 180px;
    }

    p {
      font-size: 14px;
      margin: 5px;
      cursor: pointer;

      :hover {
        color: var(--color-primary-two);
      }
    }
  }
`;

export const CalendarContainer = styled.div`
  @media screen and (max-width: 768px) {
    width: 90vw;
    margin: 0 auto;
    margin-top: 1rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 60vw;
    margin: 0 auto;
    border-radius: 10px;
    background-color: white;
  }
`;
