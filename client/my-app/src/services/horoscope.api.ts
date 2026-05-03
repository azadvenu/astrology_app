import api from "./api";

export const generateHoroscopeApi = (data: {
  name: string;
  dob: string;
  tob: string;
  place: string;
}) => api.post("/horoscope", data);

export const getHoroscopesApi = () => api.get("/horoscope");