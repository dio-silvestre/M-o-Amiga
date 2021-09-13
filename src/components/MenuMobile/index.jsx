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
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

const MenuMobile = () => {
  const { myData, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const params = useParams();

  return (
    <div>
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
            <Link to="">
              <div>
                <p>
                  <FiCheckCircle /> Ações cadastradas
                </p>
              </div>
            </Link>
          ) : (
            <Link to="">
              <div>
                <p>
                  <FiCheckCircle /> Ações participantes
                </p>
              </div>
            </Link>
          )}
          <div onClick={signOut} className="logout">
            <p>
              <FiLogOut /> Sair
            </p>
          </div>
        </section>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default MenuMobile;
