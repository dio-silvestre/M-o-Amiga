import styled from "styled-components";

export const FullContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(#f5f6fa, var(--color-primary) 41%, #f5f6fa);
`;

export const Container = styled.div`
  max-width: 1366px;
  display: flex;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  div {
    font-family: var(--font-text-primary);
    text-align: center;
    line-height: 3rem;

    h2 {
      font-size: 4rem;
      color: var(--color-primary-two);
      font-weight: 700;
      margin: 1rem 0 2rem 0;
    }

    h3 {
      font-size: 3rem;
      color: var(--color-primary-two);
      font-weight: 700;
      margin: 1rem 0 2rem 0;
    }

    p {
      text-align: left;
      color: var(--color-text);
      font-size: 1rem;
      font-weight: bold;
      margin-left: 1rem;

      svg {
        margin-top: 1rem;
      }

      span {
        text-align: left;
        font-weight: 400;
      }

      div {
        text-align: left;
        font-weight: 400;
      }
    }
  }
`;
