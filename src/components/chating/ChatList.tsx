import { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { FaChevronLeft } from "react-icons/fa";
import { BackgroundCover } from "../common/BackgroundCover";
import { ProfileCircle } from "../common/ProfileCircle";
import styled from "@emotion/styled";
import { ShowChat } from "./ShowChat";

type ChatingProps = {
  onIsOpenChange: (isOpen: boolean) => void;
};

export const ChatList = ({ onIsOpenChange }: ChatingProps) => {

  const [showChatDetail, setShowChatDetail] = useState(0);

  useEffect(() => {
    const storedShowChatDetail = localStorage.getItem("showChatDetail");
    setShowChatDetail(Number(storedShowChatDetail));
  }, []);

  useEffect(() => {
    localStorage.setItem("showChatDetail", String(showChatDetail));
  }, [showChatDetail]);


  const handleChatClose = () => {
    onIsOpenChange(false);
    setShowChatDetail(0);
  };


  const handleGoToList = () => {
    setShowChatDetail(0);
  };

  return (
    <div className="relative z-20 ">
      <div className="indicator h-[600px] fixed md:bottom-10 md:right-10 bottom-2 right-2">
        <BackgroundCover
          width="h-[35px] w-[320px] min-h-full relative"
          margin="m-0 p-0"
          padding={`${showChatDetail === 0 ? "bg-base-100" : "bg-accent"}`}
        >
          <div className="flex flex-col items-center shadow-sm">
            {!showChatDetail ? null : (
              <button onClick={handleGoToList} className="btn btn-ghost btn-sm p-2 absolute left-0 top-0">
                <FaChevronLeft className="text-sm" />
              </button>
            )}
            <button onClick={handleChatClose} className="btn btn-ghost btn-sm p-2 absolute right-0 top-0">
              <GrClose className="text-sm" />
            </button>
            <div className="font-bold text-base p-2">{!showChatDetail ? "채팅목록" : "zb-FE"}</div>
          </div>
          {showChatDetail === 0 ? (
            <div className="flex flex-col w-full overflow-y-auto">
              {/* 첫번째 채팅창 */}
              <button className="flex p-2 bg-base-100 justify-between gap-2" onClick={() => setShowChatDetail(1)}>
                <div className="flex">
                  <ProfileCircle />
                  <Span className="text-sm">오피스에 주차공간이 얼마나 있나요?</Span>
                </div>
                <div className="flex flex-col justify-between h-full">
                  <span className="text-primary text-sm font-bold text-left">N</span>
                  <div className="text-sm text-info w-11 text-left">8:21 AM</div>
                </div>
              </button>
              {/* -- 첫번째 채팅 -- */}

            </div>
          ) : (
            <ShowChat />
          )}
        </BackgroundCover>
      </div>
    </div>
  );
};

const Span = styled.span`
  padding-left: 4px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 3.6em;
`;
