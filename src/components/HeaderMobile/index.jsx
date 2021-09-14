import { Header } from "./styles";
import Logo from "../../assets/logo2.svg";

const HeaderMobile = () => {
  return (
    <Header>
      <img src={Logo} alt="Mão Amiga Logo" />
    </Header>
  );
};

export default HeaderMobile;
