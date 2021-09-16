import LogoFullColor from "./../../assets/img/logo.svg";
import LogoMiniColor from "./../../assets/img/logo-mini-color.svg";
import ManBolering from "./../../assets/img/man-bolering.svg";
import WomanBaloons from "./../../assets/img/woman-with-balloons.svg";
import WomanBaloon from "./../../assets/img/woman-with-balloon.svg";
import WomansHeart from "./../../assets/img/woman-with-heart.svg";
import WheelchairMan from "./../../assets/img/wheelchair-man.svg";
import MiniCalendar from "./../../assets/img/undraw-mini-calendar.svg";
import { BiLogIn } from "react-icons/bi";
import Button from "../../components/Button";
import Calendar from "../../components/Calendar";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import AboutUs from "../../components/AboutUs/index";
import {
  AnimationContainer,
  AnimationContainer2,
  Container,
  FullContainer,
  Header,
  IconLogin,
  NavBar,
  PresentationSection,
  WomanBaloonsComponent,
  MinicalendarComponent,
  ContentOne,
  ContentTwo,
  CalendarSection,
  DivImages,
  DivCalendar,
  WomanBaloonComponent,
  MiniLogoColorComponent,
  SecondSectionMobile,
  DivBar,
  ThirdSectionMobile,
  LastSection,
  WomansHeartComponent,
  WheelchairManComponent,
  DivBarOne,
  Footer,
  ThirdSectionDesktop,
  ThirdSectionDesktopContentOne,
  ThirdSectionDesktopContentTwo,
} from "./styles";
import ModalListActions from "../../components/ModalListActions";

const LandingPage = () => {
  const history = useHistory();

  const { isLogged } = useAuth();

  if (isLogged) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <ModalListActions />
      <Header>
        <img src={LogoFullColor} alt="Logo Mão Amiga"></img>
        <NavBar>
          <a href="#aboutUs">SOBRE NÓS</a>
          <a href="#calendar">CALENDÁRIO</a>
          <span onClick={() => history.push("/login")}>Entrar</span>
        </NavBar>
        <IconLogin onClick={() => history.push("/login")}>
          <BiLogIn />
        </IconLogin>
      </Header>
      <FullContainer>
        <PresentationSection>
          <div>
<<<<<<< HEAD
            <section>
              <ContentOne>Transforme o mundo com uma pequena ação!</ContentOne>
              <WomanBaloonsComponent src={WomanBaloons} alt="Woman Baloons" />
              <ContentTwo>
                Plataforma que conecta instituição organizadora de ação
                voluntária e voluntário disponível, sincronizando seus
                calendários gerando e compartilhando experiências.
              </ContentTwo>
            </section>
            <MinicalendarComponent src={MiniCalendar} alt="Mini Calendar" />
=======
            <AnimationContainer>
              <section>
                <ContentOne>
                  Transforme o mundo com uma pequena ação!
                </ContentOne>
                <WomanBaloonsComponent src={WomanBaloons} alt="Woman Baloons" />
                <ContentTwo>
                  Plataforma que conecta instituição organizadora de ação
                  voluntária e voluntário disponível, sincronizando seus
                  calendários gerando e compartilhando experiências.
                </ContentTwo>
              </section>
            </AnimationContainer>
            <AnimationContainer2>
              <MinicalendarComponent src={MiniCalendar} alt="Mini Calendar" />
            </AnimationContainer2>
>>>>>>> develop
          </div>
          <Button theme={"signUp"} onClick={() => history.push("/register")}>
            Quero ajudar!
          </Button>
        </PresentationSection>

        <SecondSectionMobile>
          <DivBar />
          <p>Agende, acompanhe, cadastre e busque por ações voluntárias!</p>
          <section>
            <img src={ManBolering} alt="Man bolering" />
            <p>
              Faça parte do nosso site para acompanhar as próximas ações
              voluntárias.
            </p>
          </section>
          <DivBar />
        </SecondSectionMobile>

        <ThirdSectionMobile>
          <div>
            <p>Ainda não faz parte? Faça seu cadastro!</p>
            <Button theme={"signUp"} onClick={() => history.push("/register")}>
              Cadastrar
            </Button>
          </div>
          <img src={WomanBaloon} alt="Woman with baloon" />
        </ThirdSectionMobile>

        <CalendarSection id="calendar">
          <DivBar />
          <DivImages>
            <MiniLogoColorComponent src={LogoMiniColor} alt="Logo Mini" />
            <WomanBaloonComponent src={WomanBaloon} alt="" />
          </DivImages>
          <DivCalendar>
            <Calendar />
          </DivCalendar>
        </CalendarSection>

        <ThirdSectionDesktop>
          <ThirdSectionDesktopContentOne>
            <p>Ainda não faz parte? Faça seu cadastro!</p>
            <Button theme={"signUp"} onClick={() => history.push("/register")}>
              Cadastrar
            </Button>
          </ThirdSectionDesktopContentOne>
          <ThirdSectionDesktopContentTwo>
            <img src={ManBolering} alt="Man bolering" />
            <p>Agende, acompanhe, cadastre e busque por ações voluntárias!</p>
          </ThirdSectionDesktopContentTwo>
        </ThirdSectionDesktop>

        <LastSection>
          <DivBar />
          <WomansHeartComponent src={WomansHeart} alt="Womans Heart" />
          <section>
            <DivBarOne />
            <p>
              Precisando de uma mão para um evento social? Cadastre em nosso
              site o evento para recrutar voluntários!
            </p>
            <DivBar />
          </section>
          <WheelchairManComponent src={WheelchairMan} alt="Wheelchair Man" />
        </LastSection>
      </FullContainer>
      <Footer id="aboutUs">
        <AboutUs></AboutUs>
      </Footer>
    </Container>
  );
};

export default LandingPage;
