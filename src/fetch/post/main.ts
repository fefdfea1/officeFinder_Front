import { baseInstance } from "../common/axiosApi";

export const loginCustomerApi = async (userInfo: any) => {
  try {
    const { data } = await baseInstance.post(`api/customers/login`, userInfo);
    return data;
    // console.log({ data });
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const loginAgentApi = async (userInfo: any) => {
  try {
    const { data } = await baseInstance.post(`api/agents/login`, userInfo);
    return data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};
