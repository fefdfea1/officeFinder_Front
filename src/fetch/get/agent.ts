import axios from "axios";
import { authInstance } from "../common/axiosApi";

import type { MyOfficeResponse } from "../../type/agentTypes";

export const fetchMyOfficeData = (): Promise<MyOfficeResponse> => {
  return authInstance
    .get<MyOfficeResponse>("api/agents/offices")
    .then(res => res.data)
    .catch(error => {
      console.error("API 호출 중 에러 발생:", error);
      throw error;
    });
};

export const fetchReviewsData = async (): Promise<MyOfficeResponse> => {
  const response = await axios.get("https://my-json-server.typicode.com/kjewt/json-server/reviews");
  return response.data;
};

// export const fetchMyPageData = () => authInstance.get("api/customers/info").then(res => res.data);
export const fetchMyPageData = () => authInstance.get("api/customers/info").then(res => res.data);
