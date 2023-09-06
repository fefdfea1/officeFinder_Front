import axios from "axios";
import { NewOfficePost } from "../../type/agentTypes";

export const postNewOfficeData = async (newOfficeData: NewOfficePost) => {
  try {
    const response = await axios.post(
      "https://my-json-server.typicode.com/kjewt/json-server-post/myOffice",
      newOfficeData,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteBookmark = (officeId: number, cookie: string) => {
  axios.post(
    "/api/bookarks/delete",
    {
      officdId: officeId,
    },
    {
      headers: {
        Authorization: cookie,
      },
    },
  );
};

export const addBookMark = (officeId: number, cookie: string) => {
  axios.post(
    "/api/bookmarks/submit",
    {
      officdId: officeId,
    },
    {
      headers: {
        Authorization: cookie,
      },
    },
  );
};
