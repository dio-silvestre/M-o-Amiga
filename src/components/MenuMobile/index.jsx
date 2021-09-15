import { useState } from "react";
import Hamburger from "../Hamburger";
import { StyledMenu } from "./styles";
import { useAuth } from "../../providers/Auth";
import Logo from "../../assets/LoginLogo.svg";
import Institution from "../../assets/Institution.png";
import Voluntary from "../../assets/Voluntary.png";
import {
  FiHome,
  FiUser,
  FiPlusCircle,
  FiCheckCircle,
  FiLogOut,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Collapsible from "react-collapsible";
import { useActions } from "../../providers/Actions";
import { useHistory } from "react-router-dom";

const MenuMobile = () => {
  const { myData, signOut } = useAuth();
  const [open, setOpen] = useState(false);

  const { actions } = useActions();
  const history = useHistory();

  const actionsCreate = actions.filter((action) => (
    action.userId === myData.id
  ));

  const actionsParticipate = actions.filter((action) => (
    action.voluntaries.includes(myData.id)
  ));

  return (
    <>
      <StyledMenu open={open}>
        <img src={Logo} alt="logo-ma-amiga" className="logo" />

        {myData.user_type === "institution" ? (
          <img src={Institution} alt="totem-instituição" className="totem" />
        ) : (
          <img src={Voluntary} alt="totem-voluntario" className="totem" />
        )}

        <section>
          <Link to="/dashboard">
            <div>
              <p>
                <FiHome /> Início
              </p>
            </div>
          </Link>
          <Link to={`/users/${myData.id}`}>
            <div>
              <p>
                <FiUser /> Perfil
              </p>
            </div>
          </Link>
          {myData.user_type === "institution" ? (
            <Link to="/actionregister">
              <div>
                <p>
                  <FiPlusCircle /> Cadastrar ação
                </p>
              </div>
            </Link>
          ) : (
            <></>
          )}
          {myData.user_type === "institution" ? (
            <Collapsible
              trigger={
                <p>
                  <FiCheckCircle /> Ações cadastradas <FiChevronDown />
                </p>
              }
              triggerWhenOpen={
                <p>
                  <FiCheckCircle /> Ações cadastradas <FiChevronUp />
                </p>
              }
              overflowWhenOpen="auto"
            >
              <ul>
              {actionsCreate.length === 0 && 
              <li>Você ainda não organizou de nenhuma ação.</li>}
              {actionsCreate.map((action, index) => (
                <li 
                  onClick={() => {
                    history.push(`/action/${action.id}`)
                    setOpen(false);
                  }}
                  key={index}>
                    {action.name.slice(0, 17)}
                    {action.name.length > 17 && <>...</>}
                </li>
              ))}
              </ul>
            </Collapsible>
          ) : (
            <Collapsible
              trigger={
                <p>
                  <FiCheckCircle /> Ações participantes <FiChevronDown />
                </p>
              }
              triggerWhenOpen={
                <p>
                  <FiCheckCircle /> Ações participantes <FiChevronUp />
                </p>
              }
              overflowWhenOpen="auto"
            >
              <ul>
              {actionsParticipate.length === 0 && 
              <li>Você ainda não participa de nenhuma ação.</li>}
              {actionsParticipate.map((action, index) => (
                <li 
                  onClick={() => {
                    history.push(`/action/${action.id}`)
                    setOpen(false);
                  }}
                  key={index}>
                    {action.name.slice(0, 20)}
                    {action.name.length > 20 && <>...</>}
                </li>
              ))}
              </ul>
            </Collapsible>
          )}
          <div onClick={signOut} className="logout">
            <p>
              <FiLogOut /> Sair
            </p>
          </div>
        </section>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </>
  );
};

export default MenuMobile;
