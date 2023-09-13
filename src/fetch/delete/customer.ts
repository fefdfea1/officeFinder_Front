import { authInstance } from "../common/axiosApi";
//전체삭제
export const fetchBookMarkAllDelete = () => {
  try {
    const response = authInstance.delete("api/bookmarks").then(res => res.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//낱개로 삭제
export const fetchBookMarkDelete = (officeId: string) => {
  try {
    const response = authInstance.delete(`api/offices/${officeId}/bookmarks`).then(res => res.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchRemoveUserProfile = () => {
  try {
    const response = authInstance.delete("api/customers/info/profileImage").then(res => res.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
