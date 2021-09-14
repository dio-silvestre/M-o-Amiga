import styled from "styled-components"

export const Container = styled.form `
    background-color: var(--color-primary-two);
    height: 660px;
    border-radius: var(--border-radius);
    font-family: var(--font-text-primary);
`

export const ContainerInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-between; 
`
export const Container45 = styled.div`
    width: 48%;
    div{
        color: white;
    }
`

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    button{
        margin-top: 10px;
    }
    `
export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 570px;
    padding: 25px;
    border-radius: var(--border-radius);
    select{
        height: 55px;
        width: 100%;
        border-radius: var(--border-radius);
        color:var(--color-placeholder);
        background-color: var(--color-base-default);
        font-family: var(--font-text-primary);
    }


    @media screen and (min-width: 768px){
        width: 35vw;
    }
`