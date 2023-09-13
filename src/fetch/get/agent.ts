import { authInstance } from "../common/axiosApi";
import type { DetailData, MyOfficeResponse, ShortReview } from "../../type/agentTypes";

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
// 상세 데이터 불러오기
export const fetchdetailOfficeData = async (officeId: number): Promise<DetailData> => {
  try {
    const res = await authInstance.get(`/api/agents/offices/${officeId}`);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

//선형 차트
export const fetchRevenueData = async (officeId: number) => {
  try {
    const res = await authInstance.get(`/api/agents/offices/${officeId}/revenue`);
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
    const res = await authInstance.get(`/api/agents/offices/${officeId}/rental-status`);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};
export const fetchOverallRentalData = async () => {
  try {
    const res = await authInstance.get("/api/agents/offices/overall-rental-status");
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

export const fetchMyOfficesNameData = async () => {
  try {
    const res = await authInstance.get("/api/agents/offices/names");
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

//예약자 명단 불러오기
export const fetchRequestListData = async (officeId: number) => {
  try {
    const res = await authInstance.get(`/api/agents/offices/${officeId}/lease-requests`);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

//특정 오피스 리뷰 불러오기
export const fetchReviewsData = async (officeId: number) => {
  try {
    const res = await authInstance.get(`/api/offices/${officeId}/reviews`);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

export const fetchMyPageData = () => {};

//채팅 - 새로운 메세지 boolean
export const fetchNewMessageData = async () => {
  try {
    const res = await authInstance.get(`/api/chat/room/new-message`);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

//채팅 - 채팅 목록
export const fetchChatListData = async () => {
  try {
    const res = await authInstance.get(`/api/chat/rooms`);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

export const fetchChatRoomData = async (roomId: string) => {
  try {
    const res = await authInstance.get(`/api/chat/room/${roomId}`);
    return res.data;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    throw error;
  }
};

export const fetchAgnetAlamData = () => {
  const response = authInstance
    .get("/api/agents/notifications", {
      params: {
        page: 0,
        size: 3,
      },
    })
    .then(res => res.data);
  return response;
};

export const fetchAgentBookMarkData = (page: number, size: number) => {
  const response = authInstance
    .get("api/bookmarks", {
      params: {
        page,
        size,
      },
    })
    .then(res => res.data);
  return response;
};

export const fetchAgentMyPageData = () => {
  const response = authInstance.get("api/agents/info").then(res => res.data);
  return response;
};
