// import { baseInstance } from "../common/axiosApi";
// import { newOfficeData } from "../../type/agentTypes";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZ2VudCIsImlkIjoxLCJuYW1lIjoidGVzdGVyIiwiaWF0IjoxNjk0MTYzODg4LCJleHAiOjE2OTQyNTAyODh9.xh-q0gMt0xwrgz54UsUjuIeVb_66WwFWNO_JWckoNw5xWnUkl1zIbBPWHYgiSFq-HvcRwxGNg2LBfseJ5kqP_A";

export const postNewOfficeData = async (data: object) => {
  const res = await axios.post("api/agents/offices", data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return res.data;
};
