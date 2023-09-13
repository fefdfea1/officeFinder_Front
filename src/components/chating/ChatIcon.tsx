import { useQuery } from "react-query";
import { fetchNewMessageData } from "../../fetch/get/agent";
import { BsChatFill, BsFillCircleFill } from "react-icons/bs";

type ChatIconProps = {
    onIsOpenChange: (isOpen: boolean) => void;
};
type IsNew = {
    data: boolean;
    statue: string;
};

export const ChatIcon = ({ onIsOpenChange }: ChatIconProps) => {

    const { data: newData } = useQuery<IsNew>("newMessage", fetchNewMessageData, {
        retry: 1,
    })
    const handleChatOpen = () => {
        onIsOpenChange(true);
    };

    return (
        <div className="relative z-10">
            <div className="indicator fixed bottom-10 right-10">
                {newData?.data ? <BsFillCircleFill className="absolute text-error top-[-2px] right-[-2px] text-base" /> : null}
                <button onClick={handleChatOpen} className="btn btn-secondary shadow-md  rounded-2xl w-12 h-12">
                    <BsChatFill className="text-xl" />
                </button>
            </div>
        </div>
    );

};
