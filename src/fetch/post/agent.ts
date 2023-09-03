import axios from "axios";
import { NewOfficePost } from "../../type/agentTypes";

export const postNewOfficeData = (props: NewOfficePost) => {
  axios
    .post("http://localhost:3000/myOffice", props)
    .then(response => {
      console.log("데이터가 성공적으로 추가되었습니다.");
      console.log("응답 데이터:", response.data);
    })
    .catch(error => {
      console.error("데이터 추가 중 오류가 발생했습니다.", error);
    });
};
