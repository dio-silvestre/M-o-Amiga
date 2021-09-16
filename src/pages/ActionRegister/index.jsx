import ActionsForm from "../../components/ActionForm";
import {
  Container,
  Info,
  ContainerInfoRegister,
  ContainerAction,
  ContentMobile,
  ContentDescktop,
  FullContainer,
} from "./styles";
import SideBar from "../../components/Sidebar";
import Logo from "../../assets/logo.svg";
import MenuMobile from "../../components/MenuMobile";
import HeaderMobile from "../../components/HeaderMobile";

const ActionRegister = () => {
  return (
    <FullContainer>
      <Container>
        <ContentMobile>
          <HeaderMobile />
          <MenuMobile />
          <Info>Aqui , você pode cadastrar sua ação voluntária !</Info>
          <ActionsForm />
        </ContentMobile>
        <ContentDescktop>
          <SideBar />
          <ContainerInfoRegister>
            <Info>
              <p>Aqui , você pode cadastrar sua ação voluntária !</p>
              <img src={Logo} alt="Mão Amiga Logo"></img>
            </Info>
            <ContainerAction>
              <ActionsForm></ActionsForm>
            </ContainerAction>
          </ContainerInfoRegister>
        </ContentDescktop>
      </Container>
    </FullContainer>
  );
};

export default ActionRegister;
