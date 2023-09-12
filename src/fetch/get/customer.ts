// import { baseInstance } from "../common/axiosApi";
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

export const fetchCustomerAlamData = () => {
  const response = authInstance
    .get("api/customers/notifications", {
      params: {
        page: 0,
        size: 3,
      },
    })
    .then(res => res.data);
  return response;
};
