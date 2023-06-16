import axios from "axios";
import authHeader from "./auth-header";
import { API_URL, AUTH_ME_URL } from "./urls";

import { Service } from "../types/service.type";

export const getUserInfo = () => {
  return axios.get(AUTH_ME_URL, { headers: authHeader() });
};

export const getServices = () => {
  return axios.get(API_URL + "services/", { headers: authHeader() });
};

export const getService = (id: number) => {
  return axios.get(API_URL + `services/${id}`, { headers: authHeader() });
};

export const createService = (data: Service) => {
  return axios.post(API_URL + "services/", {
    headers: authHeader(),
    data: data,
  });
};

export const editService = (id: number, data: Service) => {
  return axios.put(API_URL + `services/${id}`, {
    headers: authHeader(),
    data: data,
  });
};

export const deleteService = (id: number) => {
  return axios.delete(API_URL + `services/${id}`, {
    headers: authHeader(),
  });
};
