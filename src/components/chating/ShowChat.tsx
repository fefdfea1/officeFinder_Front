import styled from "@emotion/styled";
import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { useQuery } from "react-query";
import { fetchChatRoomData } from "../../fetch/get/agent";
import { MessagesListData } from "../../type/agentTypes";
import { ChatTimeFormating } from "../../Business/Agent/TimeFormating";
import SockJS from "sockjs-client";
import * as Stomp from "stompjs";
import { cookies } from "../../fetch/common/axiosApi";

type ChatProps = {
    roomId: string;
    userName: string;
};

export const ShowChat = (props: ChatProps) => {
    const { data: messagesList, isLoading } = useQuery<MessagesListData[]>(
        ["roomInfo", props],
        () => fetchChatRoomData(props.roomId),
        {
            retry: 2,
            refetchInterval: 30000,
        }
    );
    const token = cookies.get("Authorization")
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState<MessagesListData[]>([]);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const stompClient = useRef<any>(null);

    console.log(messagesList);

    const socket = new SockJS("https://www.officefinder.site/ws/chat");
    useEffect(() => {
        if (messagesList) {
            setMessages(messagesList);
        }
    }, [messagesList]);

    useEffect(() => {

        stompClient.current = Stomp.over(socket);

        stompClient.current.connect(
            {
                Authorization: `Bearer ${token}`
            },
            () => {
                console.log("연결완료");

                stompClient.current.subscribe(`/topic/chat/room/${props.roomId}`, (message: any) => {
                    const receivedMessage = JSON.parse(message.body) as MessagesListData;
                    console.log("서버로부터 메시지 수신:", receivedMessage);

                    setMessages(prevMessages => [...prevMessages, receivedMessage]);
                });
            }
        );

        onerror = (error: any) => {
            console.error("WebSocket 연결 오류:", error);
        }

        return () => {
            stompClient.current.disconnect(() => { });
        };
    }, [props.roomId]);

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    };

    const sendHandler = () => {
        const date = new Date();
        stompClient.current.send(
            "/app/chat/message",
            {
                Authorization: `Bearer ${token}`
            },
            JSON.stringify({
                roomUid: props.roomId,
                sender: "보내는사람",
                message: inputText,
                createdAt: String(date)
            })
        );
        setInputText("");
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
            event.preventDefault();
            if (inputText.trim() !== "") {
                const date = new Date();
                stompClient.current.send(
                    "/app/chat/message",
                    {
                        Authorization: `Bearer ${token}`
                    },
                    JSON.stringify({
                        roomUid: props.roomId,
                        sender: "보내는사람",
                        message: inputText,
                        createdAt: String(date)
                    })
                );

                setInputText("");
            }
        }
    };

    useEffect(() => {
        const scrollToBottom = () => {
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
        };
        scrollToBottom();
    }, [messages]);

    return (
        <div className="flex flex-col md:h-[485px] justify-between">
            {isLoading ? (
                <span className="badge text-base m-3 items-center mx-auto">Loading...</span>
            ) : (
                <div className="overflow-y-scroll md:h-2/3 h-[calc(100vh-82px)]" ref={chatContainerRef}>
                    {messages.map((message, index) => (
                        !message.myMessage ? (
                            <div key={index} className="chat chat-end">
                                <div className="chat-bubble chat-bubble-primary text-base">{message.message}</div>
                                <time className="chat-footer text-sm pl-2 opacity-50 font-thin">{ChatTimeFormating(message.createdAt)}</time>
                            </div>
                        ) : (
                            <div key={index} className="chat chat-start pl-3">
                                <div className="chat-header text-base pl-2">
                                    {`${props.userName}`}
                                </div>
                                <div className="chat-bubble text-base">{message.message} </div>
                                <time className="chat-footer text-sm opacity-50">{ChatTimeFormating(message.createdAt)}</time>
                            </div>
                        )
                    ))}
                </div>
            )}
            <form className="bg-secondary w-full h-[46px] md:h-1/3 p-3 md:rounded-b-xl" onClick={(e) => { e.preventDefault() }}>
                <div className="relative h-full flex flex-row gap-2 md:flex-col items-end">
                    <Textarea
                        className="text-base h-full"
                        value={inputText}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button className="btn btn-primary btn-sm w-16 absolute bottom-[-5px] right-0" onClick={sendHandler}>send</button>
                </div>
            </form>
        </div>
    );
};

const Textarea = styled.textarea`
    width: 100%;
    background-color: var(--secondary);
    &:focus {
        outline: none;
        padding: 2px;
    }
`;
