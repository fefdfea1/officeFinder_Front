import { baseInstance, authInstance } from "../common/axiosApi";

export const signupApi = async (userInfo: any) => {
  try {
    const { data } = await baseInstance.post(`api/customers/signup`, userInfo);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const signupAgencyApi = async (userInfo: any) => {
  try {
    const { data } = await baseInstance.post(`api/agents/signup`, userInfo);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const loginAgencyApi = async (userInfo: any) => {
  try {
    const { data } = await baseInstance.post(`api/agents/login`, userInfo);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getApi = async () => {
  try {
    const { data } = await baseInstance.get(`api/test`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
