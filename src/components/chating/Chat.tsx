import { ChatList } from './ChatList';
import { ChatIcon } from './ChatIcon';
import { useMyContext } from '../../contexts/MyContext'; // 실제 파일 경로로 바꾸세요

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
