import styled from '@emotion/styled';
import { useState } from 'react';
import { modalCheckValue } from './ModalValueCheck';

type WrapperProps = {
  children: React.ReactNode;
  spanString: string;
  Pstring: string;
  buttonString: string;
};

export const Modal = ({ children, spanString, Pstring, buttonString }: WrapperProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className="w-96 h-60 p-8 shadow-xl box-content rounded-xl bg-secondary Modal">
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
          <SapnTag className="absolute">{spanString}</SapnTag>
        </div>
      </div>
      <button className="btn btn-primary w-full p-2.5 bg-primary rounded-lg text-base">{buttonString}</button>
    </div>
  );
};
// transform translate가 tailwind에서 -50% -50%로 정해진 틀이 없어서 직접
// 스타일링 했습니다
const SapnTag = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
`;
