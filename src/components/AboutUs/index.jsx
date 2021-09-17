import {
  DevsContainer,
  HeaderContainer,
  MainContainer,
  DivBar,
} from "./styles";
import { FiGithub } from "react-icons/fi";
import Jose from "../../assets/josé.jpg";
import Nicole from "../../assets/nicole.jpg";
import Diogo from "../../assets/diogo.jpg";
import Raphael from "../../assets/raphael.jpeg";
import Igor from "../../assets/Igor.jpeg";

const AboutUs = () => {
  return (
    <MainContainer>
      <DivBar />
      <HeaderContainer>
        <h1>Sobre nós</h1>
      </HeaderContainer>

      <h2>
        Este é um projeto final do Q2 do curso de desenvolvimento full stack na
        Kenzie Academy Brasil .{" "}
      </h2>

      <DevsContainer>
        <div>
          <img src={Diogo} alt="Diogo Silvestre" className="Diogo"></img>
          <p> Diogo Silvestre</p>
          <p>Tech Leader</p>
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
          <p>Quality Assurance</p>
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
          <p>Scrum Master</p>
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
          <p>Product Owner</p>
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
          <p>Quality Assurance</p>
          <p>
            <FiGithub />
            <a href="https://github.com/RaphaelMarum" target="_blank">
              Github
            </a>
          </p>
        </div>
      </DevsContainer>
    </MainContainer>
  );
};

export default AboutUs;
