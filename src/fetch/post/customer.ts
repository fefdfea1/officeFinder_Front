import { authInstance } from "../common/axiosApi";
import { reservationType } from "../../type/customerTypes";
import { reFetchingType } from "../../pages/MyPage";
import { formInstance } from "../common/axiosApi";
import { alertRemoveTimer } from "../../Business/BookMark/BookMarkTimer";

export const fetchAddBookMark = (officeId: string) => {
  try {
    const response = authInstance
      .post(`api/offices/${officeId}/bookmarks`, {
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
  setAlertText,
  setFaildState,
  setLoadingState,
) => {
  try {
    if (startDate === "") {
      throw new Error("예약 날짜를 선택하지 않았습니다");
    } else if (month === 0) {
      throw new Error("이용하실 기간을 선택하지 않았습니다");
    } else if (usePeopleCount === 0) {
      throw new Error("사용할 인원을 선택하지 않았습니다");
    }
    setLoadingState(true);
    const response = authInstance
      .post(`api/offices/${officeId}`, {
        customerCount: usePeopleCount,
        months: month,
        startDate,
      })
      .then(res => {
        setLoadingState(false);
        return res.data;
      });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      setLoadingState(false);
      setFaildState(false);
      setAlertText(error.message);
      alertRemoveTimer(setFaildState, 2000);
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
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

export const fetchEditProfile = async (formData: FormData) => {
  try {
    const response = await formInstance.post("api/customers/info/profileImage", formData);
    return response;
  } catch (error) {
    console.log(error);
  }
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
