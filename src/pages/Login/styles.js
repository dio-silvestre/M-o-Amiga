import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
from {
    opacity: 0;
    transform: translateX(-50px)
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

  form {
    margin: 60px 0;
    width: 270px;
    text-align: center;
    line-height: 2rem;

    @media (min-width: 768px) {
      width: 350px;
    }

    h1 {
      margin-bottom: 32px;
      font-family: var(--font-text);
      font-weight: 700;
      font-size: 2rem;
      text-align: left;
    }

    > div {
      margin-top: 16px;
      font-family: var(--font-text);
    }

    p {
      margin-top: 8px;
      > a {
        font-weight: 700;
        color: var(--color-primary-two);
      }
    }
  }
`;
