
import { FaChevronLeft, FaTimes } from 'react-icons/fa';
import { BackgroundCover } from '../common/BackgroundCover';
import { ProfileCircle } from '../common/ProfileCircle';
import styled from '@emotion/styled';
import { ShowChat } from './ShowChat';
import { useMyContext } from '../../contexts/MyContext';


type ChatingProps = {
  onIsOpenChange: (isOpen: boolean) => void;
};

export const ChatList = ({ onIsOpenChange }: ChatingProps) => {

  const [showChatDetail, setShowChatDetail] = useState(0);

  useEffect(() => {
    const storedShowChatDetail = localStorage.getItem("showChatDetail");
    setShowChatDetail(Number(storedShowChatDetail));
  }, []);


    const renderContent = () => {
        if (isChatRoom) {
            return (
                <ShowChat />
            );
        } else {
            return (
                <div className="flex flex-col w-full overflow-y-auto">
                    {/* 첫번째 채팅창 */}
                    <button className="flex p-3 bg-base-100 justify-between gap-2" onClick={() => setIsChatRoom(true)}>
                        <div className="flex">
                            <ProfileCircle />
                            <Span className="text-sm">
                                오피스에 주차공간이 얼마나 있나요?
                            </Span>
                        </div>
                        <div className="flex flex-col justify-between h-full">
                            <span className="text-primary text-sm font-bold text-left">N</span>
                            <div className="text-sm text-info w-11 text-left">8:21 AM</div>
                        </div>
                    </button>
                    {/* -- 첫번째 채팅 -- */}

                </div>
              </button>
              {/* -- 첫번째 채팅 -- */}


    return (
        <div className="relative z-20 ">
            <div className="indicator md:h-[600px] h-full min-h-[350px] fixed bottom-0 right-0 md:bottom-2 md:right-2 ">
                <BackgroundCover width="h-[35px] md:w-[320px] min-h-full relative w-screen" margin="m-0 p-0" padding={`${isChatRoom ? 'bg-accent' : 'bg-base-100'}`}>
                    <div className="flex flex-col items-center border-b border-accent border-solid shadow-sm ">
                        {isChatRoom ? (
                            <button onClick={handleGoToList} className="btn btn-ghost btn-sm p-2 px-3 hover:bg-transparent hover:text-secondary absolute left-0 top-0">
                                <FaChevronLeft />
                            </button>
                        ) : null}
                        <button onClick={handleChatClose} className="btn btn-ghost btn-sm p-2 px-3 hover:bg-transparent hover:text-secondary absolute right-0 top-0">
                            <FaTimes />
                        </button>
                        <div className="font-bold text-base p-2">{isChatRoom ? "아이디" : "채팅목록"}</div>
                    </div>
                    {renderContent()}
                </BackgroundCover>

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
