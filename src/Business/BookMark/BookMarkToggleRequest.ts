// import { addBookMark } from "../../fetch/post/agent";
// import { deleteBookmark } from "../../fetch/post/agent";
//만약 오피스 id 정보가 get 요청으로 함께 온다면 data- 로 저장하여 가져와서 전달
export const toggleBookMarkRequest = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("active")) {
    //오피스 id , 계정 토큰
    // addBookMark();
  } else {
    //오피스 id , 계정 토큰
    // deleteBookmark();
  }
};
