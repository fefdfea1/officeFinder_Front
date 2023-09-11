import styled from "@emotion/styled";
import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from "react";

type Message = {
    text: string;
    time: string;
};


export const ShowChat = () => {
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
            event.preventDefault();
            if (inputText.trim() !== "") {
                const newMessage: Message = {
                    text: inputText,
                    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                };
                setMessages([...messages, newMessage]);
                setInputText("");
            }
        }
    };

    const chatContainerRef = useRef<HTMLDivElement>(null);

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
            <div className="overflow-y-scroll md:h-2/3 h-[calc(100vh-82px)]" ref={chatContainerRef}>
                <div className="chat chat-start pl-3">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://picsum.photos/320" />
                        </div>
                    </div>
                    <div className="chat-header text-base pl-2">
                        zb-FE
                    </div>
                    <div className="chat-bubble text-base">건물에 주차공간이 얼마나 있나요?</div>
                    <time className="chat-footer text-sm opacity-50">12:45 PM</time>

                </div>
                {messages.map((message, index) => (
                    <div key={index} className="chat chat-end">
                        <div className="chat-bubble chat-bubble-primary text-base">{message.text}</div>
                        <time className="chat-footer text-sm pl-2 opacity-50 font-thin">{message.time}</time>
                    </div>
                ))}
            </div>
            <form className="bg-secondary w-full h-[46px] md:h-1/3 p-3 md:rounded-b-xl">
                <div className="relative h-full flex flex-row gap-2 md:flex-col items-end ">
                    <Textarea
                        className="text-base h-full"
                        value={inputText}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button className="btn btn-primary btn-sm w-16 absolute bottom-[-5px] right-0">send</button>
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
