import { SidebarContainer } from "./styles";
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

const Sidebar = () => {
  const { myData, signOut } = useAuth();

  return (
    <SidebarContainer>
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
          >
            <ul>
              <li>Ação 1</li>
              <li>Ação 2</li>
              <li>Ação 3</li>
              <li>Ação 4</li>
              <li>Ação 5</li>
              <li>Ação 6</li>
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
          >
            <ul>
              <li>Ação 1</li>
              <li>Ação 2</li>
              <li>Ação 3</li>
            </ul>
          </Collapsible>
        )}
        <div onClick={signOut} className="logout">
          <p>
            <FiLogOut /> Sair
          </p>
        </div>
      </section>
    </SidebarContainer>
  );
};

export default Sidebar;
