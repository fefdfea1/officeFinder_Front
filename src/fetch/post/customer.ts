import { authInstance } from "../common/axiosApi";

export const fetchAddBookMark = (officeId: number) => {
  try {
    const addBookMark = authInstance
      .post("api/bookmarks/submit", {
        officeId,
      })
      .then(res => res.data);
    return addBookMark;
  } catch (error) {
    console.log(error);
  }
};
