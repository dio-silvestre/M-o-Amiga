import { useAuth } from "../Auth";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import { createContext, useContext, useEffect, useState } from "react";

const ActionsContext = createContext();

export const ActionsProvider = ({ children }) => {
  const history = useHistory();

  const localToken = localStorage.getItem("authToken") || "";
  const decodedToken = localToken === "" ? "" : jwtDecode(localToken);
  const userID = decodedToken.sub;
  const { myData } = useAuth();

  const [actions, setActions] = useState(
    JSON.parse(localStorage.getItem("actions")) || []
  );
  const [load, setLoad] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [listActionsModal, setListActionsModal] = useState([]);

  const loadActions = () => {
    api
      .get(`/actions`)
      .then((response) => {
        setActions(response.data);
        localStorage.setItem("actions", JSON.stringify(response.data));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    loadActions();
  }, [load]);

  const addAction = (data) => {
    api
      .post(
        "/actions",
        {
          ...data,
          userId: myData.id,
          voluntaries: [],
        },
        {
          headers: {
            Authorization: `Bearer ${localToken}`,
          },
        }
      )
      .then((response) => {
        setActions([...actions, response.data]);
        setLoad(!load);
        toast.success("Ação criada com sucesso!", {
          style: {
            border: "2px solid var(--color-success)",
            padding: "16px",
            color: "var(--color-success)",
            fontSize: "1.4rem",
          },
          iconTheme: {
            primary: "var(--color-success)",
            secondary: "white",
          },
        });
        history.push("/dashboard");
      })
      .catch((error) => console.error(error));
  };

  const deleteAction = (actionId) => {
    api
      .delete(`/actions/${actionId}`, {
        headers: {
          Authorization: `Bearer ${localToken}`,
        },
      })
      .then((_) => {
        setLoad(!load);
        toast.error("Ação deletada com sucesso!", {
          style: {
            border: "2px solid var(--color-error)",
            padding: "16px",
            color: "var(--color-error)",
            fontSize: "1.4rem",
          },
          iconTheme: {
            primary: "var(--color-error)",
            secondary: "white",
          },
        });
      })
      .catch((error) => console.error(error));
  };

  const alreadyParticipate = (actionId) => {
    return actions
      .find((action) => action.id === actionId)
      .voluntaries.includes(Number(userID));
  };

  const participateAction = (actionId) => {
    api
      .get(`/actions/${actionId}`)
      .then((response) => {
        const participants = response.data.voluntaries;
        api
          .patch(
            `/actions/${actionId}`,
            {
              voluntaries: [...participants, Number(userID)],
            },
            {
              headers: {
                Authorization: `Bearer ${localToken}`,
              },
            }
          )
          .then((response) => {
            setLoad(!load);
            toast.success("Está participando da ação agora! Seja bem vindo!", {
              style: {
                border: "2px solid var(--color-success)",
                padding: "16px",
                color: "var(--color-success)",
                fontSize: "1.4rem",
              },
              iconTheme: {
                primary: "var(--color-success)",
                secondary: "white",
              },
            });
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  const leaveAction = (actionId) => {
    api
      .get(`/actions/${actionId}`)
      .then((response) => {
        const participants = response.data.voluntaries;
        api
          .patch(
            `/actions/${actionId}`,
            {
              voluntaries: [
                ...participants.filter((id) => id !== Number(userID)),
              ],
            },
            {
              headers: {
                Authorization: `Bearer ${localToken}`,
              },
            }
          )
          .then((response) => {
            setLoad(!load);
            toast.error("Você abandonou esta ação! Que pena...", {
              style: {
                border: "2px solid var(--color-error)",
                padding: "16px",
                color: "var(--color-error)",
                fontSize: "1.4rem",
              },
              iconTheme: {
                primary: "var(--color-error)",
                secondary: "white",
              },
            });
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  const toggleModal = (listActions) => {
    setListActionsModal(listActions);
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <ActionsContext.Provider
      value={{
        userID,
        actions,
        addAction,
        deleteAction,
        alreadyParticipate,
        participateAction,
        leaveAction,
        loadActions,
        modalIsOpen,
        toggleModal,
        listActionsModal,
      }}
    >
      {children}
    </ActionsContext.Provider>
  );
};

export const useActions = () => useContext(ActionsContext);
