import axios from "axios";
import { baseInstance } from "../common/axiosApi";
import { authInstance } from "../common/axiosApi";

import type { MyOfficeResponse } from "../../type/agentTypes";

export const fetchMyOfficeData = async (): Promise<MyOfficeResponse> => {
  const response = await axios.get("https://my-json-server.typicode.com/kjewt/json-server/myOffice");
  return response.data;
};

export const fetchReviewsData = async (): Promise<MyOfficeResponse> => {
  const response = await axios.get("https://my-json-server.typicode.com/kjewt/json-server/reviews");
  return response.data;
};

// export const fetchMyPageData = () => authInstance.get("api/customers/info").then(res => res.data);
export const fetchMyPageData = () => authInstance.get("api/customers/info").then(res => res.data);
