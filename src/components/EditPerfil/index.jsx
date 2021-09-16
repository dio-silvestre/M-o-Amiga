import { FcBusinessman, FcPhone, FcPrint, FcHome, FcParallelTasks } from "react-icons/fc";
import Button from "../Button"
import {useUser} from "../../providers/User"
import EditLine from "../EditLine"
import { useState } from "react";
import {Container,Content} from "./styles"

const EditPerfil = () => {
    const [edit, setEdit] = useState(false);
    const {userData} = useUser();
          
    return(
        <>  
            <Container>
                <h3>Contato</h3>
                <Content>
                    {userData.type === "voluntary" ? <>
                    <FcBusinessman /> <span>Responsável:</span> 
                    {edit ?
                    <EditLine name="responsable" placeholder="Responsável" />
                    : 
                    <span>{userData?.responsable}</span>} </>: <></>}
                </Content>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <FcPhone /> <span>Telefone: </span>{edit ?  <EditLine name="cellphone" placeholder="Telefone" /> : <span>{userData?.cellphone}</span>}
                </div>
                {edit == false ?
                    <Content>
                        <FcPrint /> <span>E-mail:</span><span>{userData?.email}</span>
                    </Content>
                    :
                    <></>
                }
                <Content>
                     {edit ? <><FcParallelTasks /> <span>Area de atuação: </span> <EditLine  name="areas" placeholder="Area de atuação" /> </> : "" }
                </Content>
                <div>
                    {edit ? "" : <><FcHome /><span> Endereço: </span></> }{edit ?
                        <div style={{display: "flex", flexDirection: "column", margin: 0}}>
                            <Content><FcHome /><span>Rua: </span><EditLine  name="street" placeholder="Endereço "/></Content>
                            <Content><FcHome /><span>Numero: </span><EditLine  name="number" placeholder="N "/></Content>
                            <Content><FcHome /><span>Cidate: </span><EditLine  name="city"  placeholder="Cidade" /> </Content>
                            <Content><FcHome /><span>Estado: </span><EditLine  name="state" placeholder="Estado"  /> </Content>
                        </div>
                    :(userData.street && userData.number && userData.city && userData.state) ?
                    <span>Rua {userData?.street},{userData?.number}-{userData?.city}/{userData?.state}</span>
                    :
                    <></>
                    }
                </div>
                <div>
                    <Button theme="participate" onClick ={() => setEdit(!edit)}>{edit ? "Finalizar" : "Editar"}</Button>
                </div>
            </Container>
        </>
    )
}

export default EditPerfil;