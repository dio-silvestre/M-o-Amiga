import Sidebar from "../../components/Sidebar";
import { Container, FullContainer, ProfileContainer } from "./styles";
import { FcBusinessman, FcPhone, FcPrint, FcHome } from "react-icons/fc";

const InstitutionProfile = () => {
  return (
    <FullContainer>
      <Container>
        <Sidebar />
        <ProfileContainer>
          <div>
            <h2>Karitas</h2>
            <p>
              Quantidade de ações: <span>10</span>
            </p>
            <p>
              Quantidade de voluntários: <span>30</span>
            </p>
            <p>
              Áreas de atuação: <span>Doação de alimentos</span>
            </p>
          </div>

          <div>
            <h3>Contato</h3>
            <p>
              <FcBusinessman /> Responsável: <span>João da Silva</span>
            </p>
            <p>
              <FcPhone /> Telefone: <span>(11) 99999-9999</span>
            </p>
            <p>
              <FcPrint /> E-mail: <span>email@email.com</span>
            </p>
            <p>
              <FcHome /> Endereço:{" "}
              <div>
                Rua 5, Lote 10, Loja 08
                <br />
                Bairro Jardins
                <br />
                Rio Piracicaba/MG
              </div>
            </p>
          </div>
        </ProfileContainer>
      </Container>
    </FullContainer>
  );
};

export default InstitutionProfile;
