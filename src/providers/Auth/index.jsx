import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { api } from "../../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const history = useHistory();

    const [isLogged, setIsLogged] = useState(
        localStorage.getItem("authToken") ? true : false
    );

    useEffect(() => {
        const token = localStorage.getItem("authToken") || "";
    
        if (!!token) {
          return setIsLogged(true);
        }
    }, [isLogged]);

    const signIn = (data) => {
        api
        .post("/signin", data)
        .then((response) => {
            localStorage.setItem("authToken", response.data.accessToken);
            setIsLogged(true);
            history.push("/dashboard");
            window.location.reload();
        })
        .catch((error) => console.error(error))
    };

    const signOut = () => {
        localStorage.clear();
        history.push("/login");
        return window.location.reload();
    };

    return (
        <AuthContext.Provider value={{isLogged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);