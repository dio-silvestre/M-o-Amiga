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
  justify-content: space-between;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  img {
    display: none;
  }

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

    div {
      text-align: left;
      color: var(--color-text);
      font-size: 1rem;
      font-weight: bold;
      margin-left: 0.7rem;
      display: flex;

      svg {
        margin-top: 1rem;
        margin-right: 0.5rem;
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

  .contact {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1053px) {
    margin-left: 3rem;

    h2 {
      text-align: left;
    }

    img {
      display: block;
      width: 20rem;
      height: 16rem;
      margin-top: 1rem;
    }

    .contactContainer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
