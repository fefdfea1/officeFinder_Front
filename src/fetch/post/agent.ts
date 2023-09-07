import { authInstance } from "../common/axiosApi";
import { newOfficeData } from "../../type/agentTypes";

export const postNewOfficeData = (newOfficeData: newOfficeData) => {
  return authInstance
    .post<newOfficeData>("api/agents/offices", {
      newOfficeData,
    })
    .then(res => res.data)
    .catch(error => {
      console.error("데이터 전송 중 에러 발생:", error);
      throw error;
    });
};
