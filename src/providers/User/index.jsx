import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { api } from "../../services/api";
import { userID } from "../../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [myData, setMyData] = useState({});
    const [userData, setUserData] = useState({});

    const history = useHistory();

    const createAccount = (data) => {
        api
        .post("/signup", data)
        .then((response) => {
            history.push("/login");
        })
        .catch((error) => console.error(error))
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

    useEffect(() => {
        api
        .get(`/users/${userID}`)
        .then((response) => {
            setMyData(response.data);
        })
        .catch((error) => console.error(error))
    }, []);

    const fetchUserData = (userId) => {
        api
        .get(`/users/${userId}`)
        .then((response) => {
            setUserData(response.data);
        })
        .catch((error) => console.error(error))
    };

    return (
        <UserContext.Provider value={{myData, userData, createAccount, deleteAccount, editProfile, fetchUserData}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);