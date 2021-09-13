import styled from "styled-components"

export const Container = styled.div `
    width: calc((100% / 7));
    display: flex;
    min-height: 50px;

    @media (min-width: 1024px) {
        min-height: 80px;
    }
`

export const ContainerEvent = styled.div `
    font-size: 10px;
    margin-left: 8px;
    display: none;

    @media (min-width: 1024px) {
        display: block;
    }

    div {
        padding: 2px 1px;
        border-radius: 3px;

        :hover {
            cursor: pointer;
            background-color: var(--color-primary);
        }
    }

    p {
        padding: 2px;

        :hover {
            cursor: pointer;
            color: var(--color-primary);
        }
    }
`

export const ContainerData = styled.div `
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    :hover {
        cursor: pointer;
        color: var(--color-primary);
    }

    @media (max-width: 600px) {
        background-color: ${(props) => props.haveEvent ? "var(--color-primary)": ""};
    }

    @media (min-width: 600px) {
        width: 1rem;
        height: 1rem;
    }
`

export const MobileEvents = styled.div `
    display: none;

    @media (min-width: 600px) {
        display: block;
    }

    @media (min-width: 1024px) {
        display: none;
    }

    p {
        padding: 2px 5px;
        font-size: 10px;
        text-align: center;
        color: var(--color-primary);
    }
`