import { EventSourcePolyfill } from "event-source-polyfill";
import { Cookies } from "react-cookie";
import { alertRemoveTimer } from "../../Business/BookMark/BookMarkTimer";
import { alamDataType } from "../../components/common/NavRingCompo";
const cookie = new Cookies();
export const fetchSSE = (
  setAlamData: React.Dispatch<React.SetStateAction<alamDataType | null>>,
  setSseAlertState: React.Dispatch<React.SetStateAction<boolean>>,
  setSseText: React.Dispatch<React.SetStateAction<string>>,
) => {
  const getCookie = cookie.get("Authorization");
  console.log(getCookie);
  if (getCookie !== undefined) {
    const eventSource = new EventSourcePolyfill("https://www.officefinder.site/sub", {
      headers: {
        Authorization: `Bearer ${getCookie}`,
        "Content-Type": "text/event-stream",
        "Connection": "keep-alive",
        "Cache-Control": "no-cache",
      },
      heartbeatTimeout: 86400000,
      withCredentials: true,
    });

    eventSource.onopen = () => {
      console.log("open");
    };

    eventSource.onmessage = event => {
      const data = event.data;
      const changeString = data as String;
      const sliceString = changeString.slice(0, 11);
      if (sliceString === "연결이 성공하였습니다") return;
      alertRemoveTimer(setSseAlertState, 3000);
      setSseText(data);
      setAlamData;
    };

    eventSource.onerror = (e: any) => {
      console.log(e);
      // eventSource.close();
    };

    return () => {
      if (eventSource !== undefined && getCookie === undefined) {
        eventSource.close();
      }
    };
  } else return;
};
