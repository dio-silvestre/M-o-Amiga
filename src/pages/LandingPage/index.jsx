import LogoFullColor from "./../../assets/img/logo.svg";
import LogoMiniWhite from "./../../assets/img/logo-mini-white.svg"
import Button from "../../components/Button";
import Calendar from "../../components/Calendar";
import { useHistory } from "react-router";
import {
    Container, 
    FullContainer,
    Header,
    NavBar,
    PresentationSection,
    ContentOne,
    ContentTwo,
    WomanWithBaloons
} from "./styles"

const LandingPage = () => {

    const history = useHistory();

    return (
        <Container>
            <Header>
                <img src={LogoFullColor} alt="Logo Mão Amiga"></img>
                <NavBar>
                    <a href="#aboutUs">SOBRE NÓS</a>
                    <a href="#calendar">CALENDÁRIO</a>
                    <span onClick={() => history.push("/login")}>LOGIN</span>
                </NavBar>
            </Header>
            <FullContainer>
                <PresentationSection>
                    <ContentOne>
                        <p>Transforme o mundo com uma pequena ação</p>
                    </ContentOne>
                    {/* <section> */}
                        <WomanWithBaloons />
                        <ContentTwo>
                            <p>
                            Plataforma que conecta Instituição organizadora de ação e voluntário disponível, 
                            sincronizando seus calendários gerando e compartilhando experiências !
                            </p>                
                        </ContentTwo>
                    {/* </section> */}
                    <Button theme={"signUp"} onClick={() => history.push("/register")}>Quero ajudar!</Button>
                </PresentationSection>

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
            </FullContainer>
        </Container>
    );
};

export default LandingPage;