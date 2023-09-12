import { authInstance } from "../common/axiosApi";
export const fetchChangeName = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const target = event.target as HTMLInputElement;
  const response = authInstance
    .put("api/customers/info/username", {
      newName: target.value,
    })
    .then(res => res.data);
  return response;
};
