import { ChatList } from "./ChatList";
import { ChatIcon } from "./ChatIcon";
import { useMyContext } from "../../contexts/MyContext";
export const Chat = () => {
    const { isChatListOpen, setIsChatListOpen } = useMyContext();

    const handleIsOpenChange = (prev: boolean) => {
        setIsChatListOpen(prev);
    };


    return (
        <div>
            {isChatListOpen ? (
                <ChatList onIsOpenChange={handleIsOpenChange} />
            ) : (
                <ChatIcon onIsOpenChange={handleIsOpenChange} />
            )}
        </div>
    );

};
