import axios from "axios";
import jwtDecode from "jwt-decode";

export const api = axios.create({
    baseURL: "https://mao-amiga-api.herokuapp.com",
});

export const localToken = localStorage.getItem("authToken") || "";

const decodedToken = localToken === "" ? "" : jwtDecode(localToken);

export const userID = decodedToken.sub;

api.defaults.headers.authorization = localToken === "" ? "" : `Bearer ${(localToken)}`;