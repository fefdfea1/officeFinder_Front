import axios from "axios";
import { baseInstance } from "../common/axiosApi";
import { authInstance } from "../common/axiosApi";

// 지금은 모두 같지만 추후 url을 변경해야합니다.

export const fetchBookMarkData = async (page: number, size: number) => {
  const response = await authInstance
    .get("api/bookmarks", {
      params: {
        page,
        size,
      },
    })
    .then(res => res.data);
  return response;
};

export const fetchMyBookingsData = () =>
  axios.get("https://my-json-server.typicode.com/fefdfea1/jsonData/db").then(res => res.data);

export const fetchBookingData = () => baseInstance.get("api/customers/info/leases", {}).then(res => res.data);
