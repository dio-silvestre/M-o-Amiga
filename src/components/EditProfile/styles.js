import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: column;

    @media (min-width: 1160px) {
        margin-top: -4rem;
    }
`

export const Content = styled.div `
    display: flex;
    flex-direction: row;
    margin: 0;
`