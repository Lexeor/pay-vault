import axios from "axios";
import { AUTH_URL } from "./urls";

export const register = (email: string, password: string, username: string) => {
  return axios
    .post(AUTH_URL + "users/", {
      email,
      username,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response) {
        console.log(response.data);
      }
    });
};

export const login = (username: string, password: string) => {
  return axios
    .post(AUTH_URL + "jwt/create/", {
      username,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.access) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
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
