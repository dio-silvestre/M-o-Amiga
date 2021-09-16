import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  background-color: var(--color-text-two);
  display: flex;
  flex-direction: column;
  font-family: var(--font-text-primary);
  align-items: center;

  img {
    width: 320px;
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

        h1 {
          align-self: flex-end;
        }

        p {
          text-align: right;
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

      .girl {
        width: 220px;
        position: absolute;
        top: 70px;
        right: -10px;
        z-index: 1;
      }

      .ellipse {
        display: none;
      }
    }
  }

  @media (min-width: 918px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;

    .girl {
      display: none;
    }
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
    margin: 60px 0 20px;
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
