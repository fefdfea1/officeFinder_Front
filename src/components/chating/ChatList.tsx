import { useState, useEffect } from "react"
import { useQuery, useQueryClient } from "react-query";
import { fetchChatListData } from "../../fetch/get/agent";
import { useReadMessage } from "../../fetch/post/agent"
import { FaChevronLeft, FaTimes } from "react-icons/fa";
import { BackgroundCover } from "../common/BackgroundCover";
import { ProfileCircle } from "../common/ProfileCircle";
import styled from "@emotion/styled";
import { ShowChat } from "./ShowChat";
import { useMyContext } from "../../contexts/MyContext";
import { ChatListData } from "../../type/agentTypes";
import { TimeFormating } from "../../Business/Agent/TimeFormating"
type ChatingProps = {
    onIsOpenChange: (isOpen: boolean) => void;
};
type ChatList = ChatListData[];

export const ChatList = ({ onIsOpenChange }: ChatingProps) => {
    const { isChatRoom, setIsChatRoom } = useMyContext();
    const queryClient = useQueryClient()
    const [roomId, setRoomId] = useState("")
    const [userName, setUserName] = useState("")
    const [roomName, setRoomName] = useState("")
    const { data: chatData, status } = useQuery<ChatList>("chatList", fetchChatListData, {
        retry: 1,
        refetchOnWindowFocus: false,

    });
    const readMessage = useReadMessage()
    useEffect(() => {
        if (!isChatRoom) {
            queryClient.invalidateQueries("chatList");
        }
    }, [isChatRoom]);

    const handleChatClose = () => {
        onIsOpenChange(false);
        setIsChatRoom(false);
        onIsOpenChange(false);
    };

    const handleGoToList = () => {
        readMessage(roomId)
        setIsChatRoom(false)

    };

    const handleReadMessage = async () => {
        readMessage(roomId)
        setIsChatRoom(false)
        onIsOpenChange(false);

    }

    const renderContent = () => {
        if (status === "success") {
            if (isChatRoom) {
                return <ShowChat roomId={roomId} userName={userName} />;
            } else {
                return (
                    <div className="flex flex-col w-full overflow-y-auto">
                        {/*  채팅룸 */}
                        {chatData.map((data: ChatListData) => (
                            <button
                                key={data.roomUid}
                                className="flex p-3 bg-base-100 justify-betwee items-center gap-2 hover:bg-secondary"
                                onClick={() => {
                                    setIsChatRoom(true)
                                    setRoomId(data.roomUid)
                                    setUserName(data.userName)
                                    setRoomName(data.roomName)
                                }}
                            >
                                <div className="flex w-full relative">
                                    <ProfileCircle useName={data.userName} imgUrl={data.profileImageUrl} />
                                    <Span className="text-sm absolute">{data.lastMessage ? data.lastMessage : ""}</Span>

                                </div>
                                <div className="flex flex-col justify-between h-full">
                                    {data.newMessage ?? <span className="text-primary text-sm font-bold text-left">N</span>}
                                    <div className="text-sm text-info w-11 text-left overflow-x-hidden">{TimeFormating(data.lastMessageTime)}</div>
                                </div>
                            </button>
                        ))}
                        {/* -- 채팅룸-- */}
                    </div>
                );
            }
        }
    };

    return (
        <div className="relative z-20">
            <div className="indicator md:h-[520px] h-full min-h-[350px] fixed bottom-0 right-0 md:bottom-2 md:right-2">
                <BackgroundCover width="h-[35px] md:w-[320px] min-h-full relative w-screen" margin="m-0 p-0" padding={`${isChatRoom ? "bg-accent" : "bg-base-100"}`}>
                    <div className="flex flex-col items-center border-b border-accent border-solid shadow-sm">
                        {isChatRoom ? (
                            <button onClick={handleGoToList} className="btn btn-ghost btn-sm p-2 px-3 hover:bg-transparent hover:text-secondary absolute left-0 top-0">
                                <FaChevronLeft />
                            </button>
                        ) : null}
                        {isChatRoom ? (<button onClick={handleReadMessage} className="btn btn-ghost btn-sm p-2 px-3 hover:bg-transparent hover:text-secondary absolute right-0 top-0">
                            <FaTimes />
                        </button>) : (<button onClick={handleChatClose} className="btn btn-ghost btn-sm p-2 px-3 hover:bg-transparent hover:text-secondary absolute right-0 top-0">
                            <FaTimes />
                        </button>)}
                        <div className="font-bold text-base p-2">{isChatRoom ? `${roomName} | ${userName}` : "채팅목록"}</div>
                    </div>
                    {renderContent()}
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 3.6em;
`;
