import axios from "axios";

export const api = axios.create({
    baseURL: "https://mao-amiga-api.herokuapp.com",
});