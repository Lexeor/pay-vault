import axios from "axios";
import authHeader from "./auth-header";
import { API_URL, AUTH_ME_URL } from "./urls";

export const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

export const getUserInfo = () => {
  return axios.get(AUTH_ME_URL, { headers: authHeader() });
};

export const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

export const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
