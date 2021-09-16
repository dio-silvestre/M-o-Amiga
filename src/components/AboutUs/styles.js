import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
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
