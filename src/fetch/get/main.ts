import { authInstance } from "../common/axiosApi";

export const getCustomerApi = async () => {
  try {
    const { data } = await authInstance.get(`api/customers/user-overviews`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const getAgencyApi = async () => {
  try {
    const { data } = await authInstance.get(`api/agents/info-overview`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
