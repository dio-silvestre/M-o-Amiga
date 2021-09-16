import styled, { keyframes } from "styled-components";

export const Container = styled.div`
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
`;

export const Switch = styled.div`
  display: flex;
  width: 100%;
  height: 60px;

  button {
    width: 100%;
    font-family: var(--font-text-primary);
    font-size: 16px;
    cursor: pointer;
    font-weight: 600;
  }
`;

export const ButtonInstitution = styled.button`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: ${(props) =>
    props.userType === "voluntary"
      ? "var(--color-base-default)"
      : "var(--color-primary-two)"};
  color: ${(props) =>
    props.userType === "voluntary"
      ? "var(--color-primary-two)"
      : "var(--color-base-default)"};
  border: ${(props) =>
    props.userType === "voluntary"
      ? "2px solid var(--color-base-default)"
      : "2px solid var(--color-success)"};
`;

export const ButtonVoluntary = styled.button`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${(props) =>
    props.userType === "institution"
      ? "var(--color-base-default)"
      : "var(--color-primary-two)"};
  color: ${(props) =>
    props.userType === "institution"
      ? "var(--color-primary-two)"
      : "var(--color-base-default)"};
  border: ${(props) =>
    props.userType === "institution"
      ? "2px solid var(--color-base-default)"
      : "2px solid var(--color-success)"};
`;

export const Header = styled.header`
  width: 100%;
  background: var(--color-text-two);
  display: flex;
  flex-direction: column;
  font-family: var(--font-text-primary);
  align-items: center;

  img {
    width: 275px;
    margin-bottom: 3rem;
  }

  div {
    text-align: center;

    h1 {
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 2rem;
      color: var(--color-title);
      margin-left: 8px;
    }

    p {
      font-size: 0.9rem;
      color: var(--color-text);
      margin-left: 8px;
      font-weight: 600;
    }

    .textBox1 {
      align-self: flex-start;
      margin-top: 1.5rem;
    }

    .textBox2 {
      align-self: flex-end;
      margin-bottom: 0;
    }

    .textBox1,
    .textBox2 {
      height: 115px;
      display: none;
      text-align: center;

      @media (min-width: 768px) {
        display: block;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1366px;
  margin-top: -30px;

  @media (min-width: 768px) {
    .form-mobile {
      max-width: 380px;
    }
  }

  @media (max-width: 768px) {
    .form-mobile {
      width: 95%;
      position: absolute;
      top: 8rem;
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

const appearFromRight = keyframes`
from {
    opacity: 0;
    transform: translateX(70px)
}

to {
    opacity: 1;
    transform: translateX(0px)
}
`;

export const AnimationContainer2 = styled.div`
  animation: ${appearFromRight} 1s;
`;

const appearFromLeft = keyframes`
from {
    opacity: 0;
    transform: translateX(-70px)
}

to {
    opacity: 1;
    transform: translateX(0px)
}
`;

export const AnimationContainer = styled.div`
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
      margin: 32px 0;
      font-family: var(--font-text-primary);
      font-weight: 700;
      font-size: 2rem;
      text-align: left;
    }

    h4 {
      font-family: var(--font-text-primary);
      font-weight: 600;
      font-size: 1.3rem;
      color: var(--color-primary-two);
      text-align: left;
    }

    > div {
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
