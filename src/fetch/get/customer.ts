// import { baseInstance } from "../common/axiosApi";
import { authInstance } from "../common/axiosApi";

// 지금은 모두 같지만 추후 url을 변경해야합니다.

export const fetchCustomerBookMarkData = (page: number, size: number) => {
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

export const fetchMyBookingsData = () => {
  try {
    const response = authInstance.get(`api/customers/info/leases`).then(res => res.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchBookingData = (officeid: number) => {
  try {
    const response = authInstance.get(`api/offices/${officeid}`).then(res => res.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAddOfficeReview = (officeid: number) => {
  const response = authInstance.get(`api/customers/info/leases/${officeid}`).then(res => res.data);
  return response;
};

export const fetchCustomerMyPageData = () => {
  const response = authInstance.get("api/customers/info").then(res => res.data);
  return response;
};
