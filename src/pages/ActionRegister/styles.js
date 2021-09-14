import styled from "styled-components"


export const ContentMobile = styled.div`
    @media(min-width: 1024px){
        display: none;
    }
`

export const ContentDescktop = styled.div`
    display: none;
    @media(min-width: 1024px){
        display: flex;
    }
`

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1366px;
    @media screen and (min-width: 768px){
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
`
export const MenuSup = styled.div`
    height: 10vh;
    width: 100vw;
    background: var(--color-base-default);
    display: flex;
    flex-direction: row;
    img{
        height: 10vh;
        width: 40vw;
    }
`
export const Info = styled.div`
    height: 80px;
    width: 100vw;
    text-align:center;
    font-size: 20px;
    color: var(--color-primary-two);

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px){
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20vh;
        font-weight: 700;
        font-size: 30px;

        img{
            width: 290px;
            height: 14vh;
        }
    }
`

export const ContainerInfoRegister = styled.div`
    height: 100vh;
    width: calc(100% - 350px);
    padding-left: 32px;
`

export const ContainerAction = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const FullContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(#f5f6fa, var(--color-primary) 41%, #f5f6fa);
`;