import { authInstance } from "../common/axiosApi";
import { reFetchingType } from "../../pages/MyPage";

export const fetchChangeName = (event: React.FormEvent<HTMLFormElement>, refetch: reFetchingType) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  const input = target.children[0] as unknown as HTMLInputElement;
  const response = authInstance
    .put("api/customers/info/username", {
      newName: input.value,
    })
    .then(res => {
      refetch();
      return res.data;
    });
  return response;
};
