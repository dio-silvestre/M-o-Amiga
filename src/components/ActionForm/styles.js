import styled, { css } from "styled-components"

export const Container = styled.form `
    background-color: var(--color-primary);
    height: 600px;
    font-family: var(--font-text-primary);
    border-radius: var(--border-radius);
    max-width: 650px;
    margin-bottom: 2rem;
`

export const ContainerInfo = styled.div `
    width: 100%;
    display: flex;
    justify-content:space-between; 
`
export const Container45 = styled.div `
    width: 48%;
    div{
        color: white;
    }
    span{
        color: var(--color-error)
    }
`

export const ContainerButton = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    button{
        margin-top: 10px;
    }
    `
export const ContainerForm = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 595px;
    padding: 25px;

    .InputRegisterAction {
        padding: 0.6rem;
    }

    select{
        height: 40px;
        width: 100%;
        border: none;
        border-radius: var(--border-radius);
        color:var(--color-placeholder);
        background-color: var(--color-base-default);
        font-family: var(--font-text-primary);
        outline: none;
    }
    
    @media screen and (min-width: 1024px){
        width: 35vw;
    }
`

export const DivErrorSelect = styled.div `
    border-radius: var(--border-radius);
        ${(props) =>
            props.isErrored &&
            css`
                border: 2px solid var(--color-error);
            `}
`