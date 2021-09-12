import Sidebar from "../../components/Sidebar";
import { Container, FullContainer, ProfileContainer } from "./styles";
import { FcBusinessman, FcPhone, FcPrint, FcHome } from "react-icons/fc";
import InstitutionImage from "../../assets/InstitutionImage.png";
import VoluntaryImage from "../../assets/VoluntaryImage.png";
import { useParams } from "react-router-dom";
import { useUser } from "../../providers/User";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useActions } from "../../providers/Actions";
import Loading from "./../../assets/img/loading.gif";

const UserPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const { userData, fetchUserData } = useUser();
  const { actions } = useActions();

  const numberOfParticipationsVoluntary = actions.filter((action) =>
    action.voluntaries.includes(Number(params.userId))
  ).length;

  const numberOfActionsInstitution = actions.filter(
    (action) => action.userId === Number(params.userId)
  ).length;

  const numberOfActionsVoluntariesInAction = actions
    .filter((action) => action.userId === Number(params.userId))
    .reduce((acc, value) => acc + value.voluntaries.length, 0);

  useEffect(() => {
    api
      .get(`/users/${params.userId}`)
      .then((response) => {
        fetchUserData(params.userId);
      })
      .catch((error) => console.error(error));
  }, [params.userId, fetchUserData]);

  useEffect(() => {
    if (userData.name) {
      setIsLoading(false);
    }
  }, [userData]);

  return (
    <FullContainer>
      <Container>
        <Sidebar />
        {isLoading ? (
          <img src={Loading} alt="Loading" className="loading" />
        ) : (
          <>
            {userData.user_type === "institution" ? (
              <ProfileContainer>
                <div>
                  <h2>{userData.name}</h2>
                  <div>
                    Quantidade de ações:{" "}
                    <span>{numberOfActionsInstitution}</span>
                  </div>
                  <div>
                    Quantidade de voluntários:{" "}
                    <span>{numberOfActionsVoluntariesInAction}</span>
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
                        {userData.city} - {userData.state}
                      </div>
                    </div>
                  </div>
                </div>
              </ProfileContainer>
            ) : (
              <ProfileContainer>
                <div>
                  <h2>{userData.name}</h2>
                  <div>
                    Quantidade de ações participantes:{" "}
                    <span>{numberOfParticipationsVoluntary}</span>
                  </div>
                  <div>
                    Áreas de atuação: <span>{userData.areas_interest}</span>
                  </div>
                </div>

                <div className="contactContainer">
                  <img
                    src={VoluntaryImage}
                    alt="Imagem de perfil do voluntário"
                  />
                  <div className="contact">
                    <h3>Contato</h3>
                    <div>
                      <FcPhone /> Telefone: <span>(11) 99999-9999</span>
                    </div>
                    <div>
                      <FcPrint /> E-mail: <span>{userData.email}</span>
                    </div>
                    <div>
                      <FcHome /> Endereço:{" "}
                      <div>
                        Rua 5, Lote 10, Loja 08
                        <br />
                        Bairro Jardins
                        <br />
                        {userData.city} - {userData.state}
                      </div>
                    </div>
                  </div>
                </div>
              </ProfileContainer>
            )}
          </>
        )}
      </Container>
    </FullContainer>
  );
};

export default UserPage;