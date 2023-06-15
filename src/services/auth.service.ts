import axios from "axios";
import { AUTH_URL } from "./urls";

export const register = (username: string, email: string, password: string) => {
  return axios.post(AUTH_URL + "signup", {
    username,
    email,
    password,
  });
};

export const login = (username: string, password: string) => {
  return axios
    .post(AUTH_URL + "create/", {
      username,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.access) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};
