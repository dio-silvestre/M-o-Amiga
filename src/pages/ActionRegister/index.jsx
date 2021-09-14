import ActionsLogin from "../../components/ActionsLogin"
import {Container, Info, ContainerInfoRegister, ContainerAction, ContentMobile, ContentDescktop, FullContainer} from "./styles"
import SideBar from "../../components/Sidebar"
import Logo from "../../assets/logo.svg"
import Logo2 from "../../assets/logo2.svg"
import MenuMobile from "../../components/MenuMobile"

const ActionRegister = () => {
    return(
        <FullContainer>
            <Container>
                <ContentMobile>
                    <MenuMobile />
                    <Info>
                    Aqui , você pode cadastrar sua ação voluntária !
                    </Info>
                    <ActionsLogin />
                </ContentMobile>
                <ContentDescktop>
                    <SideBar />
                    <ContainerInfoRegister>
                        <Info>
                            <p>Aqui , você pode cadastrar sua ação voluntária !</p>
                            <img src={Logo}></img>
                        </Info>
                        <ContainerAction>
                            <ActionsLogin></ActionsLogin>   
                        </ContainerAction>
                    </ContainerInfoRegister>
                </ContentDescktop>
            </Container>
        </FullContainer>
    )
}

export default ActionRegister;

