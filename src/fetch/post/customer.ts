import { authInstance } from "../common/axiosApi";
import { reservationType } from "../../type/customerTypes";
import { reFetchingType } from "../../pages/MyPage";
import { formInstance } from "../common/axiosApi";

export const fetchAddBookMark = (officeId: string) => {
  try {
    const response = authInstance
      .post("api/bookmarks/submit", {
        officeId,
      })
      .then(res => res.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCreateChatRoom = (officeId: number) => {
  try {
    const response = authInstance
      .post(`api/chat/room/${officeId}`, {
        officeId,
      })
      .then(res => res.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReservation: reservationType = (
  officeId,
  startDate,
  usePeopleCount,
  month,
  setReservationComplete,
) => {
  try {
    if (startDate === "") {
      alert("예약 날짜를 선택해주세요");
      return;
    } else if (month === 0) {
      alert("몇 개월 사용할지 알려주세요");
      return;
    } else if (usePeopleCount === 0) {
      alert("사용할 인원을 선택해주세요");
      return;
    }
    setReservationComplete(true);
    const response = authInstance
      .post(`api/offices/${officeId}`, {
        customerCount: usePeopleCount,
        months: month,
        startDate,
      })
      .then(res => res.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAddPoint = (chargePoint: string, refetch: reFetchingType) => {
  if (chargePoint === "") return;
  const response = authInstance
    .post("api/customers/charge", {
      chargeAmount: chargePoint,
    })
    .then(res => {
      refetch();
      return res.data;
    });
  return response;
};

export const fetchEditProfile = (formData: FormData) => {
  formInstance.post("https://www.officefinder.site/api/customers/info/profileImage", {
    value: formData,
  });
};

export const fetchAddReview = (leaseId: number, desc: string, rate: number) => {
  try {
    const response = authInstance
      .post(`api/customers/info/leases/${leaseId}/reviews`, {
        description: desc,
        rate,
      })
      .then(res => res.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
