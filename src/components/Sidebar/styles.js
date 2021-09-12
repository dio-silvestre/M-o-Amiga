import styled from "styled-components";

export const SidebarContainer = styled.div `
  display: none;
  flex-direction: column;
  background: linear-gradient(#f5f6fa, var(--color-primary) 41%, #f5f6fa);
  width: 350px;
  height: 100vh;

  @media (min-width: 1053px) {
    display: block;
  }

  .logo {
    width: 290px;
    height: 20vh;
    margin: 20px auto;
    margin-bottom: 40px;
  }

  .totem {
    width: 300px;
    height: 200px;
    margin: 20px auto;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 75%;
      margin: 20px auto;

      @media (max-width: 1000px) {
        margin: 10px auto;
      }
    }

    @media (min-width: 1053px) {
      .logout {
        margin-top: 180px;
      }

      p {
        font-family: var(--font-text-primary);
        font-size: 20px;
      }

      img {
        height: 30px;
        width: 30px;
      }
    }

    @media (max-width: 767px) {
      display: none;
    }
  }
`;