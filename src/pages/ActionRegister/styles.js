import styled from "styled-components"

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-primary);
    @media screen and (min-width: 768px){
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
`
export const MenuSup = styled.div`
    height: 10vh;
    width: 100vw;
    background-color: green;
`
export const MenuInf = styled.div`
    height: 10vh;
    width: 100vw;
    background-color: green;
`

export const Info = styled.div`
    height: 80px;
    width: 60vw;
    text-align:center;
    font-size: 20px;
    color: var(--color-primary-two);
    @media screen and (min-width: 768){
    width: 100%;
    }
`

export const ContainerInfoRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100vw - 350px);
`