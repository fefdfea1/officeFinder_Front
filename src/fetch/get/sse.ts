import { EventSourcePolyfill } from "event-source-polyfill";
import { Cookies } from "react-cookie";
import { alertRemoveTimer } from "../../Business/BookMark/BookMarkTimer";
import { useMyContext } from "../../contexts/MyContext";
const cookie = new Cookies();

export const fetchSSE = () => {
  const { setAlamData } = useMyContext();
  const { setSseAlertState } = useMyContext();
  const getCookie = cookie.get("Authorization");
  const eventSource = new EventSourcePolyfill("https://www.officefinder.site/sub", {
    headers: {
      Authorization: `Bearer ${getCookie}`,
      "Content-Type": "text/event-stream",
    },
    withCredentials: true,
  });

  eventSource.onopen = () => {
    console.log("연결되었습니다");
  };

  eventSource.onmessage = event => {
    console.log(event);
    alertRemoveTimer(setSseAlertState);
    setAlamData;
  };

  eventSource.onerror = (e: any) => {
    console.log(e);
    eventSource.close();
  };
};
