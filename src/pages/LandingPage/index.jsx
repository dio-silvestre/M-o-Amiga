import LogoFullColor from "./../../assets/img/logo.svg";
import LogoMiniWhite from "./../../assets/img/logo-mini-white.svg"
import Button from "../../components/Button";
import Calendar from "../../components/Calendar";
import { useHistory } from "react-router";

const LandingPage = () => {

    const history = useHistory();

    return (
        <>
        <header>
            <img src={LogoFullColor} alt="Logo Mão Amiga"></img>
            <div>
                <a href="#aboutUs">SOBRE NÓS</a>
                <a href="#calendar">CALENDÁRIO</a>
                <span onClick={() => history.push("/login")}>LOGIN</span>
            </div>
        </header>

        <section>
            <div>
                <span>
                Transforme o mundo com uma pequena ação
                </span>
            </div>
            <div>
                <span>
                Plataforma que conecta Instituição organizadora de ação e voluntário disponível, 
                sincronizando seus calendários gerando e compartilhando experiências !                
                </span>
            </div>
            <Button theme={"signUp"} onClick={() => history.push("/register")}>Quero ajudar!</Button>
        </section>

        <section id="calendar">
            <div>
                imagens
            </div>
            <Calendar />
        </section>

        <section>
            <span>Ainda não faz parte? Faça seu cadastro!</span>
            <Button theme={"signUp"} onClick={() => history.push("/register")}>Cadastrar</Button>
            <Button theme={"login"} onClick={() => history.push("/login")}>Login</Button>
            <span>Agende, acompanhe, cadastre e busque por ações voluntárias !</span>
        </section>

        <section id="aboutUs">
            <span>Precisando de uma mão para um evento social? Cadastre em nosso site o evento para recrutar 
                voluntários!
            </span>
        </section>

        <footer>
            <img src={LogoMiniWhite} alt="Logo Mão Amiga"></img>
        </footer>
        </>
    );
};

export default LandingPage;