import axios from "axios";

const baseAPI = (url = "https://www.officefinder.site/", options?: any) => {
  return axios.create({ baseURL: url, ...options });
};

const authAPI = (url = "https://www.officefinder.site/", options?: any) => {
  const token = localStorage.getItem("jwt_token");
  return axios.create({
    baseURL: url,
    headers: {
      Authorization: `bearer ${token}`,
    },
    ...options,
  });
};

export const baseInstance = baseAPI();
export const authInstance = authAPI();
