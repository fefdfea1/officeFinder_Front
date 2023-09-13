import { EventSourcePolyfill } from "event-source-polyfill";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const fetchSSE = () => {
  const getCookie = cookie.get("Authorization");
  const eventSource = new EventSourcePolyfill("https://www.officefinder.site/sub", {
    headers: {
      Authorization: `Bearer ${getCookie}`,
      "Content-Type": "text/event-stream",
    },
    withCredentials: true,
  });

  eventSource.onopen = () => {
    console.log("연결완료");
  };

  eventSource.onerror = (e: any) => {
    console.log(e);
    eventSource.close();
  };
};
