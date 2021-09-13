import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { api } from "../../services/api";
import toast from "react-hot-toast";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState({});

    const history = useHistory();

    const createAccount = (data) => {
        api
        .post("/signup", data)
        .then((response) => { 
            toast.success("Conta criada com sucesso!");
            history.push("/login");
        })
        .catch((error) => toast.error("Erro ao criar conta , tente com outro email")))
    };

    const deleteAccount = (userId) => {
        api
        .delete(`/users/${userId}`)
        .then((response) => { 
        })
        .catch((error) => console.error(error))
    };

    const editProfile = (userId, data) => {
        api
        .patch(`/users/${userId}`, data)
        .then((response) => {
        })
        .catch((error) => console.error(error))
    };

    const fetchUserData = (userId) => {
        api
        .get(`/users/${userId}`)
        .then((response) => {
            setUserData(response.data);
        })
        .catch((error) => console.error(error))
    };

    return (
        <UserContext.Provider value={{ userData, createAccount, deleteAccount, editProfile, fetchUserData}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);