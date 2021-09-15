import styled, { keyframes } from "styled-components";

export const ContainerActions = styled.div `
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-text-primary);
    overflow: auto;
`

export const Action = styled.div `
    width: 90%;
    cursor: pointer;
    color: var(--color-text-two);
    border-radius: 0.5rem;
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px 0;

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
    }

    &:nth-child(even) {
        background-color: var(--color-primary-two);
        border: 2px solid var(--color-primary);
    }

    &:nth-child(odd) {
        background-color: var(--color-primary);
        border: 2px solid var(--color-primary);
        color: var(--color-text);
    }

    :hover {
        border: 2px solid var(--color-success);
    }

    span {
        text-align: center;
        margin: 3px 1rem;
        
        @media (min-width: 1024px) {
            min-height: 70px;
            display: flex;
            align-items: center;
        }

        @media (min-width: 1366px) {
            font-size: 1.5rem;
        }
    }
`

const Rotate = keyframes `
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(180deg)
    }
`

export const ButtonClose = styled.button `
    position: absolute;
    right: 0.8rem;
    top: 0.5rem;
    border: none;
    font-size: 2rem;
    font-family: var(--font-text-primary);
    font-weight: bold;
    color: var(--color-text-two);
    cursor: pointer;
    border-radius: 50%;
    background: transparent;
    
    :hover {
        animation: ${Rotate} linear 0.3s;
    }
`