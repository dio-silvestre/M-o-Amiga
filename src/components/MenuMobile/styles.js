import styled from "styled-components";

export const StyledMenu = styled.nav`
  top: 0;
  left: 0;
  height: 100vh;
  width: 80%;
  max-width: 400px;
  position: fixed;
  background: var(--color-base-default);
  z-index: 1;
  padding: 0;
  flex-direction: column;
  display: ${({ open }) => (open ? "flex" : "none")};
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-85%)")};
  font-family: var(--font-text-primary);
  color: var(--color-title);

  .logo {
    width: 100%;
    max-width: 290px;
    height: 20vh;
    margin: 20px auto;
    margin-bottom: 40px;
  }

  .totem {
    width: 100%;
    max-width: 300px;
    height: 200px;
    margin: 20px auto;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 35vh;

    a {
      color: var(--color-title);
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 75%;
      margin: 12px auto;

      p {
        font-size: 1.1rem;

        svg {
          font-size: 1.4rem;
        }
      }
    }

    .logout {
      margin-top: auto;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
