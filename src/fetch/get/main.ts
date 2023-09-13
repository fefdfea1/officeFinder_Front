import { authInstance } from "../common/axiosApi";

export const getCustomerApi = async () => {
  try {
    const { data } = await authInstance.get(`api/customers/user-overviews`);
    return data;

  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);

  }
};
export const getAgencyApi = async () => {
  try {
    const { data } = await authInstance.get(`api/agents/info-overview`);
    return data;

  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};
export const getAgencyNotiApi = async () => {
  try {
    const { data } = await authInstance.get(`api/agents/notifications`);
    return data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};
export const getCustomerNotiApi = async () => {
  try {
    const { data } = await authInstance.get(`api/customers/notifications`);
    return data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};


export const getSearchApi = async (params: any = {}) => {
  let filter = objToUrl(params);


  try {
    const { data } = await authInstance.get(`api/offices?${filter}`);
    return data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const objToUrl = (obj: any) => {
  const params = [];
  for (const key of Object.keys(obj)) {
    let value = obj[key];
    if (!value) continue;

    // if (typeof value === "string" || typeof value === "object") {
    //   value = JSON.stringify(obj[key]);
    // }

    const res = `${key}=${value}`;
    params.push(res);
  }
  const url = params.join("&");
  return url;
};

