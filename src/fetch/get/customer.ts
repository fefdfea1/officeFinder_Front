import axios from "axios";
import { baseInstance } from "../common/axiosApi";
import { authInstance } from "../common/axiosApi";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

// 지금은 모두 같지만 추후 url을 변경해야합니다.

cookies.set(
  "Authorization",
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjdXN0b21lciIsImlkIjoyLCJuYW1lIjoi6rmA7LC96recIiwiaWF0IjoxNjk0MDYyODYxLCJleHAiOjE2OTQxNDkyNjF9.OJH1MWNOV_UC9Ir_ZncF5vZEonX4vyx9oogxrMkqITTmgRNvwFcqk9H91SYF7fAZ_qET9sfvRuGGX0ercHCEOQ",
  {
    path: "officefinder.site",
  },
);

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
