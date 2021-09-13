import ActionsLogin from "../../components/ActionsLogin"
import {Container, MenuInf, MenuSup, Info, ContainerInfoRegister} from "./styles"
import SideBar from "../../components/Sidebar"

const ActionRegister = () => {
    return(
        <Container>
            {window.innerWidth < 768 ? 
            <>
                <MenuSup></MenuSup>
                <SideBar />
                <Info>
                Aqui , você pode cadastrar sua ação voluntária !
                </Info>
                <ActionsLogin></ActionsLogin>
                <MenuInf />
            </>
            :
            <>
                <SideBar />
                <ContainerInfoRegister>
                    <Info>
                    Aqui , você pode cadastrar sua ação voluntária !
                    </Info>
                    <ActionsLogin></ActionsLogin>
                </ContainerInfoRegister>
            </>
            }
        </Container>
    )
}

export default ActionRegister;

