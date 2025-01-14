import Sidebar from "../../components/Sidebar";
import { Container, FullContainer, ProfileContainer } from "./styles";
import InstitutionImage from "../../assets/InstitutionImage.png";
import VoluntaryImage from "../../assets/VoluntaryImage.png";
import { useParams } from "react-router-dom";
import { useUser } from "../../providers/User";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useActions } from "../../providers/Actions";
import Loading from "./../../assets/img/loading.gif";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import MenuMobile from "../../components/MenuMobile";
import HeaderMobile from "../../components/HeaderMobile";
import EditProfile from "../../components/EditProfile"

const UserPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const { userData, fetchUserData } = useUser();
  const { actions } = useActions();
  const { isLogged } = useAuth();

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

  if (!isLogged) {
    return <Redirect to="/login" />;
  }

  

  return (
    <FullContainer>
      <Container>
        <HeaderMobile />
        <MenuMobile />
        <Sidebar />
        {isLoading ? (
          <img src={Loading} alt="Loading" className="loading" />
        ) : (
          <>
            {userData.user_type === "institution" ? (
              <ProfileContainer>
                <div className="infoContainer">
                  <h2 className="institution-title">{userData.name}</h2>
                  <div>
                    Quantidade de ações:{" "}
                    <span>{numberOfActionsInstitution}</span>
                  </div>
                  <div>
                    Quantidade de voluntários:{" "}
                    <span>{numberOfActionsVoluntariesInAction}</span>
                  </div>
                  <div>
                    Áreas de atuação: <span>{userData.areas}</span>
                  </div>
                </div>

                <div className="contactContainer">
                  <img
                    src={InstitutionImage}
                    alt="Imagem de perfil da instituição"
                  />
                  <EditProfile />
                </div>
              </ProfileContainer>
            ) : (
              <ProfileContainer>
                <div className="infoContainer">
                  <h2>{userData.name}</h2>
                  <div>
                    Quantidade de ações participantes:{" "}
                    <span>{numberOfParticipationsVoluntary}</span>
                  </div>
                  <div>
                    Áreas de interesse: <span>{userData.areas.slice(0, 37)}</span>
                  </div>
                </div>

                <div className="contactContainer">
                  <img
                    src={VoluntaryImage}
                    alt="Imagem de perfil do voluntário"
                  />
                  <div >
                    
                    <EditProfile />
                    
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
