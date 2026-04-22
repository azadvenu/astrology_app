import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// This runs BEFORE every request is sent
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  
  if (token) {
    // Inject the token into the headers
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;