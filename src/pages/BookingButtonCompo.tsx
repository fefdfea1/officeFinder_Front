import { Link } from "react-router-dom";
import { fetchCreateChatRoom } from "../fetch/post/customer";
import { useMyContext } from "../contexts/MyContext";

type propsType = {
  officeId: number;
};

export const BookingButtonCompo = (props: propsType) => {
  const { setIsChatListOpen } = useMyContext();

  return (
    <div className="flex w-full gap-x-2">
      <button className="btn btn-outline btn-primary block p-0 grow shrink basis-1/2">
        <Link to={"/"} className="whitespace-nowrap w-full h-full flex justify-center items-center">
          다른 오피스 둘러보기
        </Link>
      </button>
      <button
        className="btn btn-outline btn-primary block p-0 grow shrink basis-1/2"
        onClick={() => {
          setIsChatListOpen(true);
          fetchCreateChatRoom(props.officeId);
        }}
      >
        문의하기
      </button>
    </div>
  );
};
