import styled from "styled-components"

export const Container = styled.div `
    width: calc((100% / 7));
    @media screen and (min-width: 768px){
        display: flex;
        height: calc(100% / 6);
    }
`

export const ContainerEvent = styled.div `
    @media screen and (min-width:768px){
        font-size: 10px;
        margin-left: 8px;
    }
`

export const ContainerData =styled.div``