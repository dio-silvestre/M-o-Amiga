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
import { Link, useParams } from "react-router-dom";
import Collapsible from "react-collapsible";

const MenuMobile = () => {
  const { myData, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const params = useParams();

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
          <Link to={`/users/${params.userId}`}>
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
                <li>Ação 1</li>
                <li>Ação 2</li>
                <li>Ação 3</li>
                <li>Ação 4</li>
                <li>Ação 5</li>
                <li>Ação 6</li>
                <li>Ação 7</li>
                <li>Ação 8</li>
                <li>Ação 9</li>
                <li>Ação 10</li>
                <li>Ação 11</li>
                <li>Ação 12</li>
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
                <li>Ação 1</li>
                <li>Ação 2</li>
                <li>Ação 3</li>
                <li>Ação 4</li>
                <li>Ação 5</li>
                <li>Ação 6</li>
                <li>Ação 7</li>
                <li>Ação 8</li>
                <li>Ação 9</li>
                <li>Ação 10</li>
                <li>Ação 11</li>
                <li>Ação 12</li>
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
