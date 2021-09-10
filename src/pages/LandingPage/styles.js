import styled from "styled-components";
import WomanBaloons from "./../../assets/img/woman-with-balloons.svg";
import WomanBaloon from "./../../assets/img/woman-with-balloon.svg";
import MiniLogoColor from "./../../assets/img/logo-mini-color.svg"

export const Container = styled.div `
    width: 100vw;
    height: 3560px;
    padding-top: 2rem;
    background: linear-gradient(0deg, rgba(71, 148, 255, 0) 90.5%, #4794FF 98.38%);
    font-family: var(--font-text);
`

export const Header = styled.header `
    width: 100%;
    height: 116px;
    background-color: var(--color-text-two);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 45%;
        max-width: 640px;
    }

    @media (min-width: 768px) {
        height: 140px;
    }

    @media (min-width: 1366px) {
        height: 156px;
    }
`

export const FullContainer = styled.div `
    width: 90%;
    max-width: 1366px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const NavBar = styled.div `
    width: 350px;
    height: 50px;
    display: none;
    color: var(--color-text);
    font-weight: bolder;
    font-size: 18px;

    a, span {
        cursor: pointer;
        :visited {
            color: var(--color-text);
        }
        :hover {
            color: var(--color-primary);  
        }
    }

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
    }

    @media (min-width: 1366px) {
        width: 575px;
        font-size: 24px;
    }
`

export const PresentationSection = styled.section `
    height: 400px;
    display: none;
    margin: 2rem auto;
`

export const ContentOne = styled.div `
    width: 198px;
    background-color: var(--color-text-two);
    padding: 0.5rem;
    border-radius: 8px;
    margin-left: 3rem;

    p {
        width: 90%;
        text-align: center;
        font-size: 12px;
        font-weight: bold;
        display: block;
        margin: 0 auto;
    }
`

export const ContentTwo = styled.div `
    width: 200px;
    background-color: var(--color-text-two);
    padding: 0.5rem;
    border-radius: 8px;

    margin: 4rem 0 0 6rem;

    p {
        width: 90%;
        text-align: center;
        font-size: 12px;
        font-weight: bold;
        display: block;
        margin: 0 auto;
    }
`

export const WomanWithBaloons = styled.div `
    width: 156px;
    height: 256px;
    background: url(${WomanBaloons}) no-repeat right top;
    background-size: 130%;
    display: flex;
`

export const CalendarSection = styled.section `
    width: 100%;
    display: none;
    border: 2px solid blue;

    @media (min-width: 1024px) {
        display: flex;

        div {
            width: 40%;
            display: flex;
        }
    }
`

export const DivCalendar = styled.div `
    width: 60%;

    border: 2px solid red;
`

export const WomanBaloonComponent = styled.div `
    width: 25%;
    background: url(${WomanBaloon}) no-repeat center;
    background-size: 100%;
`

export const MiniLogoColorComponent = styled.div `
    width: 15%;
    background: url(${MiniLogoColor}) no-repeat center;
    background-size: 100%;
`

export const SecondSectionMobile = styled.div `
    margin: 0 auto;

    p {
        width: 200px;
        font-size: 1rem;
        font-family: var(--font-text);
        font-weight: bold;

        @media (min-width: 500px) {
            font-size: 1.2rem;
        }
        @media (min-width: 768px) {
            width: 50%;
            font-size: 1.5rem;
        }
    }

    section {
        display: flex;
        align-items: center;

        p {
            width: 60%;
        }

        img {
            margin-top: -2rem;
            width: 40%;
        }
    }

    @media (min-width: 1024px) {
        display: none;
    }
`

export const DivBar = styled.div `
    width: 60%;
    height: 10px;
    background-color: var(--color-primary-two);
    margin: 2rem auto;
`