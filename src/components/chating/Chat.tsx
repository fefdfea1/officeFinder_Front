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
    sessionStorage.setItem('chatState', JSON.stringify(isOpen));
  }, [isOpen]);

  useEffect(() => {
    if (sessionStorage.getItem('chatState') !== null) {
      const getItemValue = sessionStorage.getItem('chatState');
      if (getItemValue === 'true') setIsOpen(true);
      else setIsOpen(false);
    }
  }, [sessionStorage.getItem('chatState')]);

  return (
    <div>
      {isOpen ? <ChatList onIsOpenChange={handleIsOpenChange} /> : <ChatIcon onIsOpenChange={handleIsOpenChange} />}
    </div>
  );
};
