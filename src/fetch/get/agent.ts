import { authInstance } from "../common/axiosApi";

import type { MyOfficeResponse, ShortReview } from "../../type/agentTypes";

export const fetchMyOfficeData = async (): Promise<MyOfficeResponse> => {
  try {
    const res = await authInstance.get<MyOfficeResponse>("api/agents/offices");
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

export const fetchShortReviewsData = async (officeId: number): Promise<ShortReview> => {
  try {
    const res = await authInstance.get(`/api/offices/${officeId}/review-overviews`);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

//선형 차트
export const fetchRevenueData = async (officeId: number) => {
  try {
    const res = await authInstance.get(`/api/agents/offices/${officeId}/total-revenue`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};
export const fetchTotalRevenueData = async () => {
  try {
    const res = await authInstance.get("/api/agents/offices/total-revenue");
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};
//도넛 차트
export const fetchRentalRateData = async (officeId: number) => {
  try {
    const res = await authInstance.get(`/api/agents/offices/${officeId}/overall-rental-status`);
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

export const fetchMyOfficesNameData = async () => {
  try {
    const res = await authInstance.get("/api/agents/offices/names");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

export const fetchAllReviewsData = async () => {
  // 아직 api 미완성
  try {
    const res = await authInstance.get("/api/agents/offices/names");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

export const fetchMyPageData = () => {};
