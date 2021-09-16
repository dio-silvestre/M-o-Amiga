import LogoMiniWhite from "./../../assets/img/logo-mini-white.svg";
import { DevsContainer, HeaderContainer } from "./styles";
import { FiGithub } from "react-icons/fi";
import Jose from "../../assets/josé.jpg";
import Nicole from "../../assets/nicole.jpg";
import Diogo from "../../assets/diogo.jpg";
import Raphael from "../../assets/raphael.jpeg";
import Igor from "../../assets/Igor.jpeg";

const AboutUs = () => {
  return (
    <div>
      <HeaderContainer>
        <img src={LogoMiniWhite} alt="Logo Mão Amiga"></img>
        <p>Sobre nós</p>
      </HeaderContainer>

      <DevsContainer>
        <div>
          <img src={Diogo} alt="Diogo Silvestre" className="Diogo"></img>
          <p> Diogo Silvestre</p>
          <p>
            <FiGithub />
            <a href="https://github.com/dio-silvestre" target="_blank">
              Github
            </a>
          </p>
        </div>
        <div>
          <img src={Igor} alt="Igor Petersson"></img>
          <p>Igor Petersson</p>
          <p>
            <FiGithub />
            <a href="https://github.com/IgorPetersson" target="_blank">
              Github
            </a>
          </p>
        </div>

        <div>
          <img src={Jose} alt="José Flávio"></img>
          <p>José Flávio</p>
          <p>
            <FiGithub />
            <a href="https://github.com/jotaftm" target="_blank">
              Github
            </a>
          </p>
        </div>
        <div>
          <img src={Nicole} alt="Nicole Pimenta"></img>
          <p>Nicole Pimenta</p>
          <p>
            <FiGithub />
            <a href="https://github.com/nicole-pimenta" target="_blank">
              Github
            </a>
          </p>
        </div>
        <div>
          <img src={Raphael} alt="Raphael Marum"></img>
          <p>Raphael Marum</p>
          <p>
            <FiGithub />
            <a href="https://github.com/RaphaelMarum" target="_blank">
              Github
            </a>
          </p>
        </div>
      </DevsContainer>
    </div>
  );
};

export default AboutUs;
