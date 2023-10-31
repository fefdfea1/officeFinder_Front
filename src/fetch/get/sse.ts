import { EventSourcePolyfill } from "event-source-polyfill";
import { Cookies } from "react-cookie";
import { alertRemoveTimer } from "../../Business/BookMark/BookMarkTimer";
import { alamDataType } from "../../components/common/NavRingCompo";
import { useEffect } from "react";
import { useState } from "react";
const cookie = new Cookies();

export const usefetchSSE = (
  setAlamData: React.Dispatch<React.SetStateAction<alamDataType | null>>,
  setSseAlertState: React.Dispatch<React.SetStateAction<boolean>>,
  setSseText: React.Dispatch<React.SetStateAction<string>>,
) => {
  const [getMeesageState, setMeesageState] = useState<boolean>(false);
  const getCookie = cookie.get("Authorization");

  useEffect(() => {
    if (getCookie !== undefined) {
      if (getCookie) {
        let eventSource: any;
        const fetchSse = async () => {
          try {
            eventSource = new EventSourcePolyfill(`https://www.officefinder.site/sub`, {
              headers: {
                Authorization: `Bearer ${getCookie}`,
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
              },
              heartbeatTimeout: 8640000,
              withCredentials: true,
            });

            eventSource.onopen = async () => {
              console.log("open");
            };

            /* EVENTSOURCE ONMESSAGE ---------------------------------------------------- */
            eventSource.onmessage = async (event: any) => {
              const data = event.data;
              if (JSON.parse(data) !== undefined) {
                const contentData = JSON.parse(data);

                // const title = data.title;
                // const createdAt = data.createdAt;
                const changeString = data as String;
                const sliceString = changeString.slice(0, 11);
                if (sliceString === "연결이 성공하였습니다") return;
                alertRemoveTimer(setSseAlertState, 3000);
                setSseText(contentData.content);
                setAlamData;
              }
            }; // 헤더 마이페이지 아이콘 상태 변경};

            /* EVENTSOURCE ONERROR ------------------------------------------------------ */
            eventSource.onerror = async (event: any) => {
              const errorMessage = event.error.message;
              if (errorMessage === "network error") {
                eventSource.close();
                fetchSse();
              }
            };
          } catch (error) {}
        };
        fetchSse();
        return () => {
          eventSource.close();
          setMeesageState(!getMeesageState);
        };
      }
    } else return;
  }, [getMeesageState]);
};
