import { authInstance } from "../common/axiosApi";

import type { MyOfficeResponse } from "../../type/agentTypes";

export const fetchMyOfficeData = async (): Promise<MyOfficeResponse> => {
  try {
    const res = await authInstance.get<MyOfficeResponse>("api/agents/offices");
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

export const fetchTotalRevenueData = async () => {
  try {
    const res = await authInstance.get("/api/agents/offices/total-revenue");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};
export const fetchOverallRentalData = async () => {
  try {
    const res = await authInstance.get("/api/agents/offices/overall-rental-status");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

export const fetchMyPageData = () => {};
