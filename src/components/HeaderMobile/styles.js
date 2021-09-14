import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  background-color: var(--color-base-default);
  width: 100%;
  text-align: center;

  img {
    width: 50%;
    max-width: 200px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
