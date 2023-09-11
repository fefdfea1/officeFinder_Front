import axios from "axios";

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
