import styled from "styled-components"

export const Container = styled.div `
        width: 13%;
    @media screen and (min-width: 800px){
        width: 6.5vw;
        height: 8.5vh;
        
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
`

export const ContainerEvent = styled.div `
    @media screen and (min-width:700px){
    display: flex;
    flex-direction: column;
    color: black;
    width: 70%;
    div{
        font-size: 13px;
        text-align: center;
        padding-right: 5px;
    }
}
`

export const ContainerData =styled.div``