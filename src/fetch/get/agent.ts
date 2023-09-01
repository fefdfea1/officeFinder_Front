import axios from "axios";

// 지금은 모두 같지만 추후 url을 변경해야합니다.

export const fetchBookMarkData = () =>
  axios.get("https://my-json-server.typicode.com/fefdfea1/jsonData/db").then(res => res.data);

export const fetchMyBookingsData = () =>
  axios.get("https://my-json-server.typicode.com/fefdfea1/jsonData/db").then(res => res.data);

export const fetchBookingData = () =>
  axios.get("https://my-json-server.typicode.com/fefdfea1/jsonData/db").then(res => res.data);

export const fetchMyPageData = () =>
  axios.get("https://my-json-server.typicode.com/fefdfea1/jsonData2/db").then(res => res.data);
