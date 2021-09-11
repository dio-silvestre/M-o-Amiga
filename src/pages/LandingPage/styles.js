import styled from "styled-components";
import WomanBaloons from "./../../assets/img/woman-with-balloons.svg";
import WomanBaloon from "./../../assets/img/woman-with-balloon.svg";
import MiniLogoColor from "./../../assets/img/logo-mini-color.svg"

export const Container = styled.div `
    width: 100vw;
    /* height: 3560px; */
    padding-top: 2rem;
    background: linear-gradient(0deg, rgba(71, 148, 255, 0) 90.5%, #4794FF 98.38%);
    font-family: var(--font-text-primary);
    font-weight: bold;
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
    margin: 3rem auto;
    display: flex;
    flex-direction: column;

    div {
        display: flex;
    }

    button {
        margin: 3rem auto;
    }
`

export const WomanBaloonsComponent = styled.img `
    width: 43%;
    max-width: 200px;
    margin: 0px 0 0 0px;
    z-index: 1;
`

export const MinicalendarComponent = styled.img `
    display: none;
    width: 40%;

    @media (min-width: 1024px) {
        display: block;
    }
`

export const ContentOne = styled.p `
    width: 75%;
    max-width: 700px;
    background-color: var(--color-text-two);
    padding: 1rem;
    border-radius: 8px;
    font-size: 1rem;
    box-shadow: -20px 20px 0px -1px rgba(71,148,255,1);
    margin-left: 50px;

        @media (min-width: 500px) {
            font-size: 1.2rem;
        }

        @media (min-width: 768px) {
            font-size: 1.5rem;
        }

        @media (min-width: 1366px) {
            font-size: 2rem;
        }
`

export const ContentTwo = styled.p `
    width: 70%;
    max-width: 700px;
    background-color: var(--color-text-two);
    padding: 0.5rem;
    border-radius: 8px;
    z-index: 2;
    margin: -120px 0 0 auto;

        @media (min-width: 425px) {
            margin: -100px 0 0 auto;
            font-size: 1.2rem;
        }

        @media (min-width: 550px) {
            margin: -150px 0 0 auto;
            font-size: 1.5rem;
        }

        @media (min-width: 1366px) {
            margin: -150px 0 0 auto;
            font-size: 2rem;
        }
`

export const WomanWithBaloons = styled.div `
    width: 156px;
    height: 256px;
    background: url(${WomanBaloons}) no-repeat right top;
    background-size: 130%;
    z-index: 1;
`

export const CalendarSection = styled.section `
    width: 100%;
    display: none;
    border: 2px solid blue;

    @media (min-width: 1024px) {
        display: none;

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

    p {
        width: 200px;
        font-size: 1rem;

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

    @media (min-width: 1024px) {
        display: none;
    }
`

export const ThirdSectionMobile = styled.div `
    display: flex;
    align-items: center;

    div {
        width: 60%;
        z-index: 1;
        margin-top: -2rem;
        display: flex;
        flex-direction: column;

        p {
            font-size: 1rem;
            text-align: center;

            @media (min-width: 500px) {
                margin-top: -4rem;
                font-size: 1.5rem;
            }
            @media (min-width: 768px) {
                font-size: 2rem;
            }
        }
        
        button {
            width: 90%;
            margin: 1rem auto;
        }
    }

    img {
        width: 70%;
        margin-left: -30%;
        margin-top: -20%;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`

export const LastSection = styled.section `
    display: flex;
    flex-direction: column;

    p {
        font-size: 1rem;
        margin: 0 auto;
        width: 65%;
        color: var(--color-text-two);
        background-color: var(--color-placeholder);
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 28px 31px 0px -1px rgba(71,148,255,1);

        @media (min-width: 500px) {
            font-size: 1.5rem;
        }

        @media (min-width: 768px) {
            font-size: 2rem;
        }

        @media (min-width: 1366px) {
            font-size: 3.5rem;
        }
    }

    img {
        width: 50%;
        max-width: 500px;
    }

    section {
        display: flex;
    }

    section>div {
        display: none;
        @media (min-width: 1024px) {
            display: block;
            height: 40px;
        }
    }
`

export const DivBarOne = styled.div `
    display: none;

    @media (min-width: 1024px) {
        width: 60%;
        height: 10px;
        background-color: var(--color-primary-two);
        margin: auto 0 0 0;
    }
`

export const WomansHeartComponent = styled.img `
    margin: 0 0 0 auto;
`

export const WheelchairManComponent = styled.img `
    margin: 0 0 0 -10%;
`

export const Footer = styled.footer `
    width: 100vw;
    height: 130px;
    background-color: var(--color-placeholder);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-two);
    font-size: 30px;

    img {
        width: 100px;
        margin-left: 30px;
    }

    @media (min-width: 1024px) {
        height: 200px;
    }
`

export const ThirdSectionDesktop = styled.section `
    display: none;
`