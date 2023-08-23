import { useState, useEffect } from 'react';
import { ChatList } from './ChatList';
import { ChatIcon } from './ChatIcon';

export const Chat = () => {
    const storedChatState = sessionStorage.getItem('chatState');
    const initialIsOpen = storedChatState === 'true';

    const [isOpen, setIsOpen] = useState(initialIsOpen);

    const handleIsOpenChange = (prev: boolean) => {
        setIsOpen(prev);
    };

    useEffect(() => {
        sessionStorage.setItem('chatState', String(isOpen));
    }, [isOpen]);

    return (
        <div>
            {isOpen ? (
                <ChatList onIsOpenChange={handleIsOpenChange} />
            ) : (
                <ChatIcon onIsOpenChange={handleIsOpenChange} />
            )}
        </div>
    );
};
