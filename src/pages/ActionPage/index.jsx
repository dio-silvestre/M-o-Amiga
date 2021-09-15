import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../providers/User";
import { useActions } from "../../providers/Actions";
import Loading from "./../../assets/img/loading.gif";
import Sidebar from "../../components/Sidebar";
import MenuMobile from "../../components/MenuMobile";
import {
  Container,
  FullContainer,
  Page,
  ActionData,
  BoxInfos,
  LinkPerfil,
  Participate,
  ButtonLeave,
} from "./styles";
import Button from "../../components/Button";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import HeaderMobile from "../../components/HeaderMobile";

const ActionPage = () => {
  const {
    alreadyParticipate,
    actions,
    participateAction,
    leaveAction,
    userID,
    deleteAction,
  } = useActions();
  const { userData, fetchUserData } = useUser();
  const { isLogged, myData } = useAuth();

  const [isLoading, setIsLoading] = useState(true);
  const [participate, setParticipate] = useState(false);
  const [fetch, setFetched] = useState(false);
  const [isCreator, setIscreator] = useState(false);
  const [specificAction, setSpecificAction] = useState({});

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`/actions/${params.actionId}`)
      .then((response) => {
        setSpecificAction(response.data);
        fetchUserData(response.data.userId);
        setIscreator(response.data.userId === Number(userID));
        setFetched(true);
      })
      .catch((error) => console.error(error));
  }, [params.actionId, actions]);

  useEffect(() => {
    if (actions.length > 0 && fetch) {
      setParticipate(alreadyParticipate(Number(params.actionId)));
      setIsLoading(false);
    }
  }, [fetch, actions]);

  if (!isLogged) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <HeaderMobile />
      <FullContainer>
        <MenuMobile />
        <Sidebar />
        <Page>
          {isLoading ? (
            <img src={Loading} alt="Loading" />
          ) : (
            <ActionData>
              <h1>{specificAction.name}</h1>
              <BoxInfos>
                <h3>
                  <span>Categoria: </span>
                  {specificAction.category}
                </h3>
                <h3>
                  <span>Data: </span>
                  {specificAction.date}
                </h3>
                <h3>
                  <span>Descrição: </span>
                  {specificAction.description}
                </h3>
                <h3>
                  <span>Cidade: </span>
                  {specificAction.city}/{specificAction.state}
                </h3>
                <h3>
                  <span>Quantidade de voluntários inscritos: </span>
                  {specificAction.voluntaries.length}/
                  {specificAction.number_voluntaries}
                </h3>
                <h3>
                  <span>Instituição responsável: </span>
                  <Link to={`/users/${specificAction.userId}`}>
                    <LinkPerfil>{userData.name}</LinkPerfil>
                  </Link>
                </h3>

                {isCreator ? (
                  <ButtonLeave>
                    <Button
                      theme={"leave"}
                      onClick={() => {
                        deleteAction(params.actionId);
                        history.push("/dashboard");
                      }}
                    >
                      Deletar ação
                    </Button>
                  </ButtonLeave>
                ) : (
                  <>
                    {myData.user_type === "institution" ? (
                      <></>
                    ) : (
                      <>
                        {!participate ? (
                          <Participate>
                            <h2>Deseja participar desta ação?</h2>
                            <Button
                              theme={"participate"}
                              onClick={() => {
                                participateAction(params.actionId);
                                setIsLoading(true);
                              }}
                            >
                              Sim
                            </Button>
                          </Participate>
                        ) : (
                          <ButtonLeave>
                            <Button
                              theme={"leave"}
                              onClick={() => {
                                leaveAction(params.actionId);
                                setIsLoading(true);
                              }}
                            >
                              Abandonar esta ação
                            </Button>
                          </ButtonLeave>
                        )}
                      </>
                    )}
                  </>
                )}
              </BoxInfos>
            </ActionData>
          )}
        </Page>
      </FullContainer>
    </Container>
  );
};

export default ActionPage;
