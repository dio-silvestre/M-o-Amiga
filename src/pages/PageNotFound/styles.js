import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 20px;
  border-radius: 4px;
  padding: 0px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  box-sizing: border-box;
  background: var(--main-background);
  font-family: var(--font-text-primary);
  h1,
  h2 {
    color: var(--color-title);
    width: 90vw;
    text-align: center;
    font-family: var(--font-text-primary);
    font-size: 2rem;
  }
  span {
    font-size: 20px;
  }
  img {
    height: 300px;
    width: 80%;
    margin: 0 30px;
  }
  .name {
    color: var(--color-primary-two);
    font-size: 2.3rem;
    font-weight: 600;
    font-family: var(font--text-primary);
  }
`;
