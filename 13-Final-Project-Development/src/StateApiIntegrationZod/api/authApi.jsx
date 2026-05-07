import axios from "axios";

const API = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const signupUser = (data) => API.post("/users", data);

export const loginUser = (data) => API.post("/posts", data);