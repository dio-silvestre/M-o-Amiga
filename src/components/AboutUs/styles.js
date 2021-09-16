import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: white;
  color: var(--color-text);

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1rem;
    width: 90vw;
    margin: 20px auto;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: var(--color-text);

  h1 {
    font-size: 3rem;
    margin-top: 20px auto;
  }
`;

export const DevsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  div {
    width: 300px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 5px 5px 8px white;
    margin: 15px;
    background-image: linear-gradient(
      to right top,
      #a2beeb,
      #8ecfee,
      #8edde5,
      #a4e7d5,
      #c7eec7
    );
    cursor: pointer;

    img {
      max-width: 200px;
      max-height: 200px;
      width: auto;
      height: auto;
      background-size: contain;
      margin: 5px auto;
      border-radius: 50%;
    }

    .Diogo {
      width: 200px;
    }

    p {
      color: black;
      margin: 10px;
      margin-bottom: 20px;
    }
  }

  div:hover {
    border: 2px solid whitesmoke;
  }
`;

export const DivBar = styled.div`
  width: 40%;
  background-color: var(--color-primary-two);
  margin: auto 0 8px 0;
  height: 30px;
  margin: 0 auto;
`;
