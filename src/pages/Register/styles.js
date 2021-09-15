import styled, { keyframes } from "styled-components";

export const Container = styled.div `
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .text {
    width: 89vw;
    margin: 0 auto;
    display: block;

    font-size: 20px;

    margin-bottom: -90px;
  }

  .text2 {
    font-size: 24px;
    width: 60vw;
    margin: 0auto;
    font-family: var(--font-text-primary);
    font-weight: 700;
  }

  @media (max-width: 540px) {
    .text2 {
      position: absolute;
      right: 60px;
      top: 232px;
      width: 80vw;
    }
  }
`;

export const Switch = styled.div `
  display: flex;
  width: 114%;
  height: 60px;
  margin-top: -35px;

  button {
    width: 57%;
    border: none;
    border-radius: 8px;
    border: 1px solid white;
    color: white;
    font-family: var(--font-text-primary);
    font-size: 16px;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    width: 112%;
  }
`;

export const ButtonInstitution = styled.button `

  background-color: ${(props) =>
    props.userType === "voluntary"
      ? "var(--color-primary-two)"
      : "var(--color-secondary)"};
`;

export const ButtonVoluntary = styled.button `
  background-color: ${(props) =>
    props.userType === "institution"
      ? "var(--color-primary)"
      : "var(--color-secondary)"};
`;

export const Header = styled.header `
  width: 100%;
  background: linear-gradient(
    var(--color-primary-two) 21%,
    var(--color-primary-two) 10%
  );
  display: flex;
  flex-direction: column;
  font-family: var(--font-text-primary);
  align-items: center;

  img {
    width: 275px;
    height: 255px;
    margin-bottom: 10px;
  }

  div {
    margin-bottom: 2rem;

    h1 {
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 2rem;
      color: var(--color-title);
      margin-left: 8px;
    }

    p {
      font-size: 0.9rem;
      color: var(--color-placeholder);
      margin-left: 8px;
    }

    .textBox1 {
      height: 115px;

      h1 {
        text-align: left;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;

    div {
      width: 100%;
      max-width: 1366px;
      display: flex;
      flex-direction: row;
      margin-bottom: 3rem;

      img {
        width: 500px;
        align-self: flex-start;
        margin-left: 1rem;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        margin-right: 1rem;

        p {
          text-align: center;
          font-size: 1.1rem;
          align-self: flex-end;
        }
      }
    }
  }
`;

export const Content = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1366px;
  margin-top: 2rem;

  @media (min-width: 768px) {
    .form-mobile {
      max-width: 380px;
    }
  }

  @media (max-width: 768px) {
    .form-mobile {
      width: 95%;
      position: absolute;
      top: 18rem;
      z-index: 2;
      background-color: var(--color-text-two);
    }

    .images {
      position: absolute;
      top: 6rem;
      right: 1rem;

      .ellipse {
        display: none;
      }
    }
  }

  @media (min-width: 918px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

const appearFromLeft = keyframes `
from {
    opacity: 0;
    transform: translateX(-50px)
}

to {
    opacity: 1;
    transform: translateX(0px)
}
`;

export const AnimationContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-primary-two);
  border-radius: var(--border-radius);
  padding: 1rem;
  animation: ${appearFromLeft} 1s;
  background-color: #ffffff;
  margin-bottom: 1rem;

  form {
    width: 270px;
    text-align: center;
    line-height: 2rem;
    background-color: #ffffff;

    @media (min-width: 768px) {
      width: 350px;
    }

    h1 {
      margin-bottom: 32px;
      font-family: var(--font-text-primary);
      font-weight: 700;
      font-size: 2rem;
      text-align: left;
    }

    > div {
      margin-top: 16px;
      font-family: var(--font-text-primary);
    }

    p {
      margin-top: 8px;
      color: var(--color-primary-two);
      > a {
        font-weight: 700;
        color: var(--color-primary-two);
      }
    }
  }
`;
