import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";

const ActionsContext = createContext();

export const ActionsProvider = ({ children }) => {

    const localToken = localStorage.getItem("authToken") || "";
    const decodedToken = localToken === "" ? "" : jwtDecode(localToken);
    const userID = decodedToken.sub;

    const [actions, setActions] = useState([]);
    const [participate, setParticipate] = useState(true);

    useEffect(() => {
        api
        .get(`/actions`)
        .then((response) =>{
            setActions(response.data);
            localStorage.setItem("actions", JSON.stringify(response.data));
        })
        .catch((error) => console.error(error));
    }, [participate])

    const addAction = (data) => {
        api
        .post("/actions", {
            ...data, 
            voluntaries: []
        })
        .then((response) =>{
            setActions([...actions, response.data]);
            toast.success("Ação criada com sucesso!");
        })
        .catch((error) => console.error(error));
    };

    const deleteAction = (actionId) => {
        api
        .delete(`/actions/${actionId}`)
        .then((response) =>{
            toast.error("Ação deletada com sucesso!");
        })
        .catch((error) => console.error(error));
    };

    const alreadyParticipate = (actionId) => {
        return actions.find((action) => action.id === actionId).voluntaries.includes(Number(userID));
    };

    const participateAction = (actionId) => {
        api
        .get(`/actions/${actionId}`)
        .then((response) =>{
            const participants  = response.data.voluntaries;
            api
            .patch(`/actions/${actionId}`, {
                voluntaries: [...participants, Number(userID)]
            })
            .then((response) =>{
                setParticipate(!participate);
                toast.success("Está participando da ação agora! Seja bem vindo!");
            })
            .catch((error) => console.error(error));
        })
        .catch((error) => console.error(error));
    };

    const leaveAction = (actionId) => {
        api
        .get(`/actions/${actionId}`)
        .then((response) =>{
            const participants  = response.data.voluntaries;
            api
            .patch(`/actions/${actionId}`, {
                voluntaries: [...participants.filter((id) => id !== Number(userID))]
            })
            .then((response) =>{
                setParticipate(!participate);
                toast.error("Você abandonou esta ação! Que pena...");
            })
            .catch((error) => console.error(error));
        })
        .catch((error) => console.error(error));
    };

    return (
       <ActionsContext.Provider value={{userID, actions, addAction, deleteAction, alreadyParticipate, participateAction, leaveAction}}>
           {children}
       </ActionsContext.Provider> 
    );
};


export const useActions = () => useContext(ActionsContext);