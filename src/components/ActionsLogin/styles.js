import styled from "styled-components"

export const Container = styled.form `
`

export const ContainerInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-between; 
`
export const Container45 = styled.div`
    width: 48%;
`

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    `
export const ContainerForm = styled.div`
    background-color: var(--color-primary-two);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 650px;
    padding: 16px;
    @media screen and (min-width: 768px){
        width: 35vw;
    }
`