import styled from "@emotion/styled";
import { useState } from "react";
import { modalCheckValue } from "./ModalValueCheck";
import { fetchAddPoint } from "../../fetch/post/customer";
import { reFetchingType } from "../../pages/MyPage";

type WrapperProps = {
  children: React.ReactNode;
  spanString: string;
  Pstring: string;
  buttonString: string;
  refetch: reFetchingType;
};

export const Modal = ({ children, spanString, Pstring, buttonString, refetch }: WrapperProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="w-96 h-60 p-8 shadow-xl box-content rounded-xl bg-secondary Modal  sm:w-64 sm:h-48  md:w-80 md:h-52  xl:w-96 xl:h-60">
      <h2 className="text-center mb-4 text-lg font-black">{children}</h2>
      <div>
        <p className="text-base mb-4 font-medium">{Pstring}</p>
        <div className="relative flex items-center mb-8">
          <input
            type="text"
            className="w-full input input-bordered input-primary rounded-md placeholder:text-accent placeholder:text-base text-base box-border pr-10"
            placeholder="금액을 입력해주세요"
            onChange={event => {
              modalCheckValue(event, setInputValue);
            }}
            value={inputValue}
          />
          <SpanTag className="absolute">{spanString}</SpanTag>
        </div>
      </div>
      <button
        className="btn btn-primary w-full p-2.5 bg-primary rounded-lg text-base"
        onClick={() => fetchAddPoint(inputValue, refetch)}
      >
        {buttonString}
      </button>
    </div>
  );
};
// transform translate가 tailwind에서 -50% -50%로 정해진 틀이 없어서 직접
// 스타일링 했습니다
const SpanTag = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
`;