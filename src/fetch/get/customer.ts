import axios from "axios";

import { Cookies } from "react-cookie";
import { authInstance, baseInstance } from "../common/axiosApi";

// 지금은 모두 같지만 추후 url을 변경해야합니다.

export const fetchBookMarkData = (page: number, size: number) => {
  authInstance
    .get("api/bookmarks", {
      params: {
        page,
        size,
      },
    })
    .then(res => res.data);
};

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
