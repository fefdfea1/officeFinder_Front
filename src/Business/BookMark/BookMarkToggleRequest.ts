import { fetchBookMarkDelete } from "../../fetch/delete/customer";
import { fetchAddBookMark } from "../../fetch/post/customer";

export const toggleBookMarkRequest = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, officeId: number) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("active")) {
    fetchBookMarkDelete(officeId);
    //오피스 id , 계정 토큰
  } else {
    fetchAddBookMark(officeId);
    //오피스 id , 계정 토큰
  }
};
