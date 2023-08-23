import { BsChatFill, BsFillCircleFill } from 'react-icons/bs';
import { useState } from 'react';

type ChatIconProps = {
  onIsOpenChange: (isOpen: boolean) => void;
};

export const ChatIcon = ({ onIsOpenChange }: ChatIconProps) => {
  //왜 만든건지
  const [isOpen, setIsOpen] = useState(false);

  const handleChatOpen = () => {
    setIsOpen(true);
    onIsOpenChange(true);
  };

  return (
    <div className="relative">
      <div className="indicator fixed bottom-10 right-10">
        <BsFillCircleFill className="z-10 absolute text-error top-[-2px] right-[-2px] text-base" />
        <button onClick={handleChatOpen} className="btn btn-primary btn-outline bg-base-100 rounded-2xl w-12 h-12">
          <BsChatFill className="text-xl" />
        </button>
      </div>
    </div>
  );
};
