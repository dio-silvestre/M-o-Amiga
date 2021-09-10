import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
  font-family: var(--font-text);
`;

export const Blue = styled.div`
  width: 100vw;
  height: 449px;
  background-color: var(--color-primary);
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Msg1 = styled.div`
  font-family: var(--font-text);
  color: white;
  line-height: 32px;
  font-weight: bold;
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 20px;
  }

  position: absolute;
  width: 333.29px;
  height: 89.68px;
  left: 601px;
  top: 69px;
`;
export const Msg2 = styled.div`
  font-family: var(--font-text);
  color: white;
  line-height: 32px;
  font-weight: bold;
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 20px;
  }

  position: absolute;
  width: 333.29px;
  height: 119.13px;
  left: 1000.39px;
  top: 260.4px;
`;

export const H3 = styled.h3`
  color: var(--color-text-two);
  position: absolute;
  top: 240px;
  left: 250px;
  font-size: 24px;
  font-family: var(--font-text-primary);
  font-weight: bold;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px solid var(--color-primary-two);
  border-radius: var(--border-radius);
  background-color: var(--color-base-default);

  position: absolute;
  width: 420px;
  height: 900px;
  left: 250px;
  top: 282px;

  button {
    background-color: var(--color-secondary-two);
  }
  button:hover {
    background-color: var(--color-secondary);
  }

  input {
    max-width: 150%;
  }
`;

export const Logo = styled.img`
  position: absolute;
  width: 275px;
  height: 255px;
  left: -5px;
  top: -17px;
  z-index: 1;
`;

export const Ballon = styled.img`
  position: absolute;
  width: 374px;
  height: 630.84px;
  left: 906px;
  top: 406px;
`;

export const Ul = styled.ul`
width:100%;

  li {
    display: inline-block;
    color: var(--color-text-two);
    padding-bottom: 10px;     
    
    input {
    visibility: hidden;
    /* display: flex;
    flex-wrap: nowrap; */
  }
  label {
    

    width:100%;
    cursor: pointer;
    background-color: var(--color-primary-two);
    padding: 32px;
    border-radius: 20px 20px 0px 0px;
  }
  input:checked + label {
    background: var(--color-primary);
    color: white;
  }
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
