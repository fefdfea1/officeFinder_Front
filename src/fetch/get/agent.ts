import axios from "axios";
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
