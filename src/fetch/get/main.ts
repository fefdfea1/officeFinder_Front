import { baseInstance } from "../common/axiosApi";

export const getCustomerApi = async () => {
  try {
    const { data } = await baseInstance.get(`api/customers/info`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const getAgencyApi = async () => {
  try {
    const { data } = await baseInstance.get(`api/agency/info`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
