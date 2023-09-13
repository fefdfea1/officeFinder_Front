import type { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { authInstance } from "../common/axiosApi";

const config = {
  headers: { "Content-Type": "multipart/form-data" },
};
export const usePost = () => {
  return useMutation(
    (formData: FormData): Promise<AxiosResponse> => authInstance.post("api/agents/offices", formData, config),
  );
};

export const useUpdate = (id: number) => {
  return useMutation(
    (formData: FormData): Promise<AxiosResponse> => authInstance.post(`api/agents/offices/${id}`, formData, config),
  );
};
