import styled from "styled-components"

export const ContainerHeader = styled.div `
    width: 100%;
    display: flex;
    
    
    @media screen and (min-width: 800px){
        height: 5vh;
        h1{
            font-size: 30px;
        }

        h2{
            font-size: 20px;
        }
    }
`

export const ContainerAnoMes = styled.div `
    width: 50%;
    height: 6vh;
    display: flex;
    align-items: center;

    h2+h1{
            margin-left: 16px;
        }

    @media screen and (min-width: 800px){
        justify-content: flex-start;
        align-items: center;
        
    }
`

export const ContainerButtons = styled.div `
    button{
        background-color: white;
        border: 0;
    }
    svg{
        height:30px;
        border:0;
    }

    button+button{
        margin-left: 10px;
    }

    display: flex;
    justify-content: flex-end;
    width: 50%;
    margin-right: 40px;

    @media screen and (min-width: 800px){
    }
`

export const Container = styled.div `
    width: 100%;
    height: 40vh;
    background-color: white;
    padding: 16px;

    @media screen and (min-width: 800px){
        width: 50vw;
        height: 63vh;
        padding: 2vw;
        border-radius: var(--border-radius);
        box-shadow: 0px 5px var(--color-placeholder);
    }
`

export const Box = styled.div `
    width: ${(props) => props.start > 0 ? `${props.start * 10.45}vw` : "0px" };
    height: ${(props) => props.start > 0 ? "0px" : "0px" };
    @media screen and (min-width: 800px){
    width: ${(props) => props.start > 0 ? `${props.start * 6.5}vw` : "0px" };
    height: ${(props) => props.start > 0 ? "8.5vh" : "0px" };
    }
`

export const ContainerDatas = styled.div `
    height: 30vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media screen and (min-width: 800px){
        height: 50vh;
    }
`