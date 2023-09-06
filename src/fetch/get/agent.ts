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

// 지금은 모두 같지만 추후 url을 변경해야합니다.

export const fetchBookMarkData = () => authInstance.get("api/bookmarks").then(res => res.data);

export const fetchMyBookingsData = () =>
  axios.get("https://my-json-server.typicode.com/fefdfea1/jsonData/db").then(res => res.data);

export const fetchBookingData = () =>
  baseInstance
    .get("api/customers/info/leases", {
      headers: {
        "Access-Control-Allow-Origin": `http://127.0.0.1:5173`,
        "Access-Control-Allow-Credentials": "true",
      },
    })
    .then(res => res.data);

export const fetchMyPageData = () =>
  axios.get("https://my-json-server.typicode.com/fefdfea1/jsonData2/db").then(res => res.data);
