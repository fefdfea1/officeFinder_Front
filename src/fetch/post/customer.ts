import { authInstance } from "../common/axiosApi";
// import { baseInstance } from "../common/axiosApi";
import { reservationType } from "../../type/customerTypes";

export const fetchAddBookMark = (officeId: number) => {
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
