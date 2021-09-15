import styled, { css } from "styled-components";

interface IStyledButtonProps {
  theme: string;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  font-family: var(--font-text-primary);
  color: var(--color-base-default);
  border: none;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: var(--border-radius);
  transition: all 300ms ease-in-out;
  outline: none;
  cursor: pointer;
  margin-top: 2rem;

  ${({ theme }) =>
    theme === "login" &&
    css`
      width: 270px;
      height: 40px;
      background-color: var(--color-primary-two);

      @media (min-width: 768px) {
        width: 350px;
        height: 50px;
        &:hover,
        &:focus {
          background-color: var(--color-primary);
        }
      }
    `}

  ${({ theme }) =>
    theme === "signUp" &&
    css`
      width: 270px;
      height: 40px;
      background-color: var(--color-secondary-two);

      @media (min-width: 768px) {
        width: 350px;
        height: 50px;
        &:hover,
        &:focus {
          background-color: var(--color-secondary);
        }
      }
    `}

    ${({ theme }) =>
    theme === "registerAction" &&
    css`
      background-color: var(--color-primary-two);
      width: 213px;
      height: 72px;

      @media (min-width: 768px) {
        &:hover,
        &:focus {
          background-color: var(--color-primary);
        }
      }
    `}

    ${({ theme }) =>
    theme === "participate" &&
    css`
      background-color: var(--color-success);
      width: 192px;
      height: 56px;

      @media (min-width: 768px) {
        &:hover,
        &:focus {
          filter: brightness(1.1);
        }
      }
    `}

    ${({ theme }) =>
    theme === "leave" &&
    css`
      background-color: var(--color-error);
      width: 192px;
      height: 56px;

      @media (min-width: 768px) {
        &:hover,
        &:focus {
          filter: brightness(0.9);
        }
      }
    `}
`;
