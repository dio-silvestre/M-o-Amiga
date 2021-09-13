import styled from "styled-components";

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    background: linear-gradient(#f5f6fa, var(--color-primary) 41%, #f5f6fa);
`

export const FullContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    max-width: 1366px;
    margin: 0 auto;
`

export const Page = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-text-primary);
    color: var(--color-text-two);

    @media (min-width: 1053px) {
        width: calc(100% - 350px);
        align-items: flex-start;
    }

    img {
        margin: auto;
        width: 300px;
    }
`

export const ActionData = styled.main `
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1053px) {
        width: 60%;
    }

    h1 {
        color: var(--color-primary-two);
        font-size: 2rem;
        margin: 3rem 2rem;
    }
`

export const BoxInfos = styled.div `
    min-width: 310px;
    padding: 1rem 2rem;
    background-color: var(--color-primary-two);
    border-radius: 24px;
    margin: auto 2rem;
    display: flex;
    flex-direction: column;

    span {
        font-weight: bold;
    }

    h3 {
        font-size: 1.5rem;
        line-height: 2rem;
        margin: 1rem 0;
    }
`

export const LinkPerfil = styled.span `
    color: var(--color-text-two);
    text-decoration: underline;

    :hover {
        color: var(--color-success);
    }
`

export const Participate = styled.div `
    display: flex;
    align-items: center;

    h2 {
        font-size: 1.6rem;
        font-weight: bold;
    }
    
    button {
        margin: 0 0 0 1rem;
    }
`

export const ButtonLeave = styled.div `
    margin: auto;
    button {
        width: 250px;
    }
`