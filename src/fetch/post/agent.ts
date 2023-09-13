import type { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { authInstance } from "../common/axiosApi";

// 오피스 등록
const config = {
  headers: { "Content-Type": "multipart/form-data" },
};
export const usePost = () => {
  return useMutation(
    (formData: FormData): Promise<AxiosResponse> => authInstance.post("api/agents/offices", formData, config),
  );
};

//오피스 수정
export const useUpdate = (id: number) => {
  return useMutation(
    (formData: FormData): Promise<AxiosResponse> => authInstance.post(`api/agents/offices/${id}`, formData, config),
  );
};
// 채팅 읽음처리
export const useReadMessage = () => {
  const mutation = useMutation((roomId: string) => authInstance.post(`api/chat/room/read-message/${roomId}`));

  const readMessage = async (roomId: string) => {
    try {
      await mutation.mutateAsync(roomId);
      console.log("메세지 읽음 처리 완료");
    } catch (error) {
      console.error("메세지 읽음 처리 실패", error);
    }
  };

  return readMessage;
};
