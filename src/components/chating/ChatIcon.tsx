import { BsChatFill, BsFillCircleFill } from 'react-icons/bs';

type ChatIconProps = {
    onIsOpenChange: (isOpen: boolean) => void;
};

export const ChatIcon = ({ onIsOpenChange }: ChatIconProps) => {

    const handleChatOpen = () => {
        onIsOpenChange(true);
    };

    return (
        <div className="relative z-10">
            <div className="indicator fixed bottom-10 right-10">
                <BsFillCircleFill className="absolute text-error top-[-2px] right-[-2px] text-base" z-20 />
                <button onClick={handleChatOpen} className="btn btn-primary btn-outline bg-base-100 rounded-2xl w-12 h-12">
                    <BsChatFill className="text-xl" />
                </button>
            </div>
        </div>
    );
};
