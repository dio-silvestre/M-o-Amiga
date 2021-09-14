import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-85px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

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
  animation: ${appearFromLeft} 1s;

  .logo {
    width: 100%;
    max-width: 290px;
    height: 20vh;
    margin: 0px auto;
  }

  .totem {
    width: 100%;
    max-width: 300px;
    height: 200px;
    margin: 0 auto 20px;
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
      display: block;
      width: 85%;
      margin: 12px auto;

      p {
        font-size: 1.1rem;

        svg {
          font-size: 1.4rem;
        }
      }

      li {
        margin: 10px 0;
      }
    }

    .logout {
      margin-top: auto;
    }
  }

  .Collapsible__contentInner {
    max-height: 7.5rem;
  }

  .Collapsible__contentOuter {
    max-height: 7.5rem;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
