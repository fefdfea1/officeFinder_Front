import axios from "axios";
import { newOfficeData } from "../../type/agentTypes";

export const postNewOfficeData = async (newOfficeData: newOfficeData, cookie: string) => {
  try {
    const response = await axios.post(
      "https://my-json-server.typicode.com/kjewt/json-server-post/myOffice",
      {
        request: newOfficeData,
      },
      {
        headers: {
          Authorization: cookie,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
