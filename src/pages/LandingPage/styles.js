import styled from "styled-components";

export const Container = styled.div `
    width: 100vw;
    padding-top: 2rem;
    background: linear-gradient(0deg, rgba(71, 148, 255, 0) 82.34%, #4794FF 92.4%);
`

export const Header = styled.header `
    width: 100%;
    height: 116px;
    background-color: var(--color-text-two);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 45%;
        max-width: 640px;
    }

    @media (min-width: 768px) {
        height: 140px;
    }

    @media (min-width: 1366px) {
        height: 156px;
    }
`

export const FullContainer = styled.div `
    width: 90%;
    max-width: 1366px;
    margin: 0 auto;
`

export const NavBar = styled.div `
    width: 350px;
    height: 50px;
    display: none;
    color: var(--color-text);
    font-family: var(--font-text);
    font-weight: bolder;
    font-size: 18px;

    a, span {
        cursor: pointer;
        :visited {
            color: var(--color-text);
        }
        :hover {
            color: var(--color-primary);  
        }
    }

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
    }

    @media (min-width: 1366px) {
        width: 575px;
        font-size: 24px;
    }
`