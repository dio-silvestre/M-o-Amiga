import styled from "styled-components";

export const FullContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: var(--main-background);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  display: flex;

  .loading {
    margin: auto;
    width: 300px;
  }
  @media screen and (max-width: 1024px){
    min-height: 100vh;
  }
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

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

    .institution-title {
      font-size: 4rem;
      color: var(--color-primary-two);
      font-weight: 700;
      margin: 5rem 0 2rem 0;
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

  @media (min-width: 1024px) {
    margin-left: 3rem;
    align-items: flex-start;

    h2 {
      text-align: left;
    }

    img {
      display: block;
      width: 23rem;
      height: 16rem;
      margin-top: 1rem;
    }

    .infoContainer {
      margin-left: 3rem;

      div {
        font-size: 1.2rem;
      }

      span {
        font-size: 1.2rem;
      }
    }

    .contactContainer {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .contact {
      div {
        display: flex;
        font-size: 1.2rem;
      }

      span {
        font-weight: 700;
        font-size: 1.2rem;
      }
    }
  }
`;
