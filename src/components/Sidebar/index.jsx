import { SidebarContainer } from "./styles";
import { useAuth } from "../../providers/Auth";
import Logo from "../../assets/LoginLogo.svg";
import Institution from "../../assets/Institution.png";
import Voluntary from "../../assets/Voluntary.png";
import UserIcon from "../../assets/userIcon.png";
import ActivitiesIcon from "../../assets/ActivitiesIcon.png";
import OutIcon from "../../assets/OutIcon.png";

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
        <div>
          <img src={UserIcon} alt="ícone-user" />
          <p> Perfil </p>
        </div>
        <div>
          <img src={ActivitiesIcon} alt="ícone-atividade" />
          <p>Atividades</p>
        </div>
        <div onClick={signOut} className="logout">
          <img src={OutIcon} alt="ícone-sair" />
          <p> Sair</p>
        </div>
      </section>
    </SidebarContainer>
  );
};

export default Sidebar;
