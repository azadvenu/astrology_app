import api from "./api";   

export const loginApi = (data: {
  email: string;
  password: string;
}) => api.post("/auth/login", data);

export const registerApi = (data: {
  name: string;
  email: string;
  password: string;                              
}) => api.post("/auth/register", data);