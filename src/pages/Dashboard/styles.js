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
  background: var(--main-background);

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const MainContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100vw - 350px);
  }
`;

export const HeaderContainer = styled.div`
  @media screen and (max-width: 375px) {
    top: 20px;
    margin-top: 4.2rem;

    .messageContainer {
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: center;
      height: 30%;

      h1 {
        font-weight: 700;
        font-size: 1.2rem;
        color: var(--color-title);
        font-family: var(--font-text-primary);
        color: var(--color-primary-two);
        z-index: 2;
        margin-left: 100px;
        margin-bottom: 10px;
      }

      h2 {
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 1rem;
        color: var(--color-title);
        margin-left: 8px;
        font-family: var(--font-text-primary);
        color: var(--color-primary-two);
        //color:var(--color-text-two)
      }
    }

    .inputContainer {
      height: 70%;
      width: 90vw;
      margin: 5px auto;

      input {
        width: 100%;
        margin: 0 auto;
        height: 30px;
        border-radius: 8px;
        border: 1px solid white;
        padding-left: 20px;
      }
    }

    .searchContainer {
      height: 60px;
      background-color: white;
      overflow: auto;
      animation: ${slidein} 2s;
      border: none;
      text-align: left;
      padding-left: 15px;
      box-shadow: 5px 8px 8px var(--color-secondary);
      border-radius: 3px;
      cursor: pointer;

      p {
        font-size: 14px;
        margin: 5px;
      }
    }
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    position: relative;
    height: 250px;
    width: 95vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;

    .messageContainer {
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: center;
      margin-top: 55px;

      h1 {
        font-weight: 700;
        font-size: 2rem;
        color: var(--color-title);
        font-family: var(--font-text-primary);
        color: var(--color-primary-two);
        z-index: 2;
        margin-left: 100px;
        margin-bottom: 20px;
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

    .inputContainer {
      height: 70%;
      width: 90vw;
      margin: 5px auto;

      input {
        width: 100%;
        margin: 0 auto;
        height: 30px;
        border-radius: 8px;
        border: 1px solid white;
        padding-left: 20px;
      }
    }

    .searchContainer {
      height: 60px;
      background-color: white;
      overflow: auto;
      animation: ${slidein} 2s;
      border: none;
      text-align: left;
      padding-left: 15px;
      box-shadow: 5px 8px 8px var(--color-secondary);
      border-radius: 3px;
      cursor: pointer;

      p {
        font-size: 14px;
        margin: 5px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    position: relative;
    height: 250px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .messageContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 40%;

      h1 {
        font-weight: 700;
        font-size: 3.8rem;
        color: var(--color-title);
        font-family: var(--font-text-primary);
        color: var(--color-primary-two);
        z-index: 2;
        margin-left: 100px;
        margin-bottom: 20px;
      }

      h2 {
        margin-bottom: 20px;
        font-weight: 600;
        font-size: 3rem;
        color: var(--color-title);
        margin-left: 8px;
        font-family: var(--font-text-primary);
        color: var(--color-primary-two);
      }
    }

    .inputContainer {
      height: 70%;
      width: 90vw;
      margin: 5px auto;

      input {
        width: 50%;
        margin: 0 auto;
        height: 30px;
        border-radius: 8px;
        border: 1px solid white;
        padding-left: 20px;
      }

      .searchContainer {
        height: 60px;
        width: 50%;
        background-color: white;
        overflow: auto;
        animation: ${slidein} 2s;
        border: none;
        text-align: left;
        padding-left: 15px;
        box-shadow: 5px 8px 8px var(--color-secondary);
        border-radius: 3px;
        cursor: pointer;

        p {
          font-size: 14px;
          margin: 5px;
          font-family: var(--font-text-primary);
        }
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
