import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

axios.defaults.withCredentials = true;
const baseAPI = (url = "https://www.officefinder.site/", options?: any) => {
  return axios.create({ baseURL: url, ...options });
};

const authAPI = (url = "https://www.officefinder.site/", options?: any) => {
  const token = cookies.get("Authorization");
  return axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
};

const formDataAPI = (url = "https://www.officefinder.site/", options?: any) => {
  const token = cookies.get("Authorization");
  return axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
    ...options,
  });
};
export const baseInstance = baseAPI();
export const authInstance = authAPI();
export const formInstance = formDataAPI();
