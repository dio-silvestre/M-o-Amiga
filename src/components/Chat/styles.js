import styled from "styled-components";

export const ButtonOpen = styled.button `
    border: none;
    font-size: 3rem;
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: transparent;
    z-index: 1;
    color: var(--color-primary);

    @media (min-width: 768px) {
        display: none;
    }
`

export const ContainerChat = styled.div `
    display: ${(props) => props.openChat ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    padding: 0 3px;

    @media (min-width: 426px) and (max-width: 767px) {
        border-radius: 12px;
        height: 80vh;
        width: 80vw;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    @media (min-width: 768px) {
        display: flex;
        border-radius: 20px;
        position: relative;
        z-index: 0;
        width: 80%;
        margin: 2rem 0;
    }

    @media (min-width: 1024px) {
        width: 35%;
        height: 600px;
    }
`

export const NotParticipate = styled.div `
    font-size: 1.3rem;
    text-align: center;
    color: var(--color-text);
`

export const Title = styled.div `
    height: 8%;
    color: var(--color-primary);
    font-size: 2rem;
    margin-top: -1.5rem;
`

export const ContainerTalk = styled.div `
    overflow-y: auto;
    scroll-snap-type: y proximity;
    overscroll-behavior-y: contain;
    height: 60%;
    margin: 0.5rem 0;
    width: 100%;

    div:last-child {
        scroll-snap-align: end;
    }

    @media (min-width: 768px) {
        height: 70%;
    }
`

export const Comment = styled.div `
    background-color: ${(props) => props.isMyComment ? "var(--color-primary)" : "var(--color-text-two)"};
    max-width: 70%;
    margin: ${(props) => props.isMyComment ? "0.5rem 0 0.5rem auto" : "0.5rem auto 0.5rem 0"};
    border-radius: ${(props) => props.isMyComment ? "2rem 2rem 0 2rem" : "0 2rem 2rem 2rem"};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    color: var(--color-title);

    span {
        margin-right: auto;
        margin-bottom: 0.5rem;
        font-weight: bold;
        cursor: pointer;

        :hover {
            color: var(--color-text);
        }
    }

    p {
        width: 90%;
    }

    button {
        margin-left: auto;
        border: none;
        font-size: 1.5rem;
        margin-bottom: -1rem;
        margin-right: -1rem;
        background-color: transparent;
        color: var(--color-error);
        cursor: pointer;
    }
`

export const ContainerIntput = styled.div `
    width: 98%;
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: center;

    textarea {
        resize: none;
        font-family: var(--font-text-primary);
        font-size: 1rem;
        height: 100%;
        width: 90%;
        outline: none;
        border-radius: 30px;
        padding-left: 20px;
    }

    button {
        cursor: pointer;
    }
`

export const ButtonSendMessage = styled.button `
    border: none;
    background-color: transparent;
    font-size: 2rem;
    color: var(--color-primary);
`