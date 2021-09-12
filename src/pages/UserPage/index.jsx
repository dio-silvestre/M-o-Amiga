import Sidebar from "../../components/Sidebar";
import { Container, FullContainer, ProfileContainer } from "./styles";
import { FcBusinessman, FcPhone, FcPrint, FcHome } from "react-icons/fc";
import InstitutionImage from "../../assets/InstitutionImage.png";
import VolunteerImage from "../../assets/VolunteerImage.png";
import { useParams } from "react-router-dom";
import { useUser } from "../../providers/User";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/Auth";
import { api } from "../../services/api";

const UserPage = () => {
  const params = useParams();
  const { fetchUserData } = useUser();

  const [specificUser, setSpecificUser] = useState({});

  useEffect(() => {
    api
      .get(`/users/${params.userId}`)
      .then((response) => {
        setSpecificUser(response.data);
        fetchUserData(params.userId);
      })
      .catch((error) => console.error(error));
  }, [params.userId, fetchUserData]);

  return (
    <FullContainer>
      <Container>
        <Sidebar />
        {specificUser.user_type === "institution" ? (
          <ProfileContainer>
            <div>
              <h2>{specificUser.name}</h2>
              <div>
                Quantidade de ações: <span>10</span>
              </div>
              <div>
                Quantidade de voluntários: <span>30</span>
              </div>
              <div>
                Áreas de atuação: <span>Doação de alimentos</span>
              </div>
            </div>

            <div className="contactContainer">
              <img
                src={InstitutionImage}
                alt="Imagem de perfil da instituição"
              />
              <div className="contact">
                <h3>Contato</h3>
                <div>
                  <FcBusinessman /> Responsável: <span>João da Silva</span>
                </div>
                <div>
                  <FcPhone /> Telefone: <span>(11) 99999-9999</span>
                </div>
                <div>
                  <FcPrint /> E-mail: <span>email@email.com</span>
                </div>
                <div>
                  <FcHome /> Endereço:{" "}
                  <div>
                    Rua 5, Lote 10, Loja 08
                    <br />
                    Bairro Jardins
                    <br />
                    Rio Piracicaba/MG
                  </div>
                </div>
              </div>
            </div>
          </ProfileContainer>
        ) : (
          <ProfileContainer>
            <div>
              <h2>{specificUser.name}</h2>
              <div>
                Quantidade de ações participantes: <span>10</span>
              </div>
              <div>
                Quantidade de voluntários: <span>30</span>
              </div>
              <div>
                Áreas de atuação: <span>{specificUser.areas_interest}</span>
              </div>
            </div>

            <div className="contactContainer">
              <img src={VolunteerImage} alt="Imagem de perfil do voluntário" />
              <div className="contact">
                <h3>Contato</h3>
                <div>
                  <FcPhone /> Telefone: <span>(11) 99999-9999</span>
                </div>
                <div>
                  <FcPrint /> E-mail: <span>{specificUser.email}</span>
                </div>
                <div>
                  <FcHome /> Endereço:{" "}
                  <div>
                    Rua 5, Lote 10, Loja 08
                    <br />
                    Bairro Jardins
                    <br />
                    {specificUser.city} - {specificUser.state}
                  </div>
                </div>
              </div>
            </div>
          </ProfileContainer>
        )}
      </Container>
    </FullContainer>
  );
};

export default UserPage;
