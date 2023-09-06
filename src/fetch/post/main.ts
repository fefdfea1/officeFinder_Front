import { baseInstance } from "../common/axiosApi";

export const signupCustomerApi = async (userInfo: any) => {
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

export const loginCustomerApi = async (userInfo: any) => {
  try {
    const { data } = await baseInstance.post(`api/customers/login`, userInfo);
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const loginAgentApi = async (userInfo: any) => {
  try {
    const { data } = await baseInstance.post(`api/agents/login`, userInfo);
    return data;
  } catch (error) {
    console.error(error);
  }
};
