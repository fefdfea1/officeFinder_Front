import { baseInstance } from "../common/axiosApi";

export const signupCustomerApi = async (userInfo: any) => {
  try {
    const { data } = await baseInstance.post(`api/customers/signup`, userInfo);
    console.log(data);
    return data;
  } catch (error: any) {
    // console.error("나에러임", error);
    throw new Error(error.message);
  }
  // finally {
  //   console.log("나마지막!!");
  // }
  // console.log("try end");
};

export const signupAgencyApi = async (userInfo: any) => {
  try {
    const { data } = await baseInstance.post(`api/agents/signup`, userInfo);
    return data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

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
