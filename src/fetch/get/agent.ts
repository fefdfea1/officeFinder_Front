import axios from "axios";

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

export const fetchBookMarkData = () =>
  axios.get("https://my-json-server.typicode.com/fefdfea1/jsonData/db").then(res => res.data);

export const fetchMyBookingsData = () =>
  axios.get("https://my-json-server.typicode.com/fefdfea1/jsonData/db").then(res => res.data);

export const fetchBookingData = () =>
  axios.get("https://my-json-server.typicode.com/fefdfea1/jsonData/db").then(res => res.data);

export const fetchMyPageData = () =>
  axios.get("https://my-json-server.typicode.com/fefdfea1/jsonData2/db").then(res => res.data);

