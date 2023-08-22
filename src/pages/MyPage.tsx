import { Title } from '../components/common/Title';
import { TitleAndDesc } from '../components/common/TitleAndDesc';
import { BackgroundCover } from '../components/common/BackgroundCover';
import { Modal } from '../components/common/Modal';
import { useState } from 'react';
import { cacheChargeModalStateFn } from './MyPageModalState';
import { pullCacheModalStateFn } from './MyPageModalState';
import { useEffect, useRef } from 'react';
import { changeProfile, removeProfile } from './MyPageChangeProfile';
import styled from '@emotion/styled';

const arr = Array.from({ length: 10 });

//Search와 마찬가지로 클린업 함수 작성을 위해 따로 파일로 만들지 않았습니다
export const MyPage = () => {
  const [cacheChargeModalState, setcacheChargeModalState] = useState<boolean>(false);
  const [pullCacheModalState, setpullCacheModalState] = useState<boolean>(false);
  const cacheChargeButtonDom = useRef<HTMLButtonElement>(null);
  const pullCacheButtonDom = useRef<HTMLButtonElement>(null);
  const imageDom = useRef<HTMLImageElement>(null);
  // const cn1 = n1.toString()
  // .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    const windowEventHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.classList.contains('charge')) {
        if (
          cacheChargeButtonDom.current?.classList.contains('active') ||
          pullCacheButtonDom.current?.classList.contains('active')
        ) {
          setpullCacheModalState(false);
          setcacheChargeModalState(false);
        }
      }
    };

    window.addEventListener('click', windowEventHandler);

    return () => {
      window.removeEventListener('click', windowEventHandler);
    };
  }, []);

  return (
    <div className="relative mb-10">
      <BackgroundCover>
        <div className="mb-12">
          <Title>마이페이지</Title>
        </div>
        <div className="flex justify-between items-center border-b border-solid border-accent mb-8 px-8 pb-8 ">
          <div className="w-4/12">
            <figure className="w-full overflow-hidden rounded-lg mb-4">
              <img
                src="data:image/jpeg;base64,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"
                alt="프로필 이미지"
                className="w-full h-full"
                ref={imageDom}
              />
            </figure>
            <div className="flex justify-between px-14 relative ">
              <input
                type="file"
                id="EditProfile"
                className="hidden"
                accept="image/jpeg, image/png"
                onChange={event => {
                  changeProfile(event, imageDom);
                }}
              />
              <ProfilePseudoElements htmlFor="EditProfile" className="cursor-pointer">
                프로필 등록
              </ProfilePseudoElements>
              <button
                onClick={() => {
                  removeProfile(imageDom);
                }}
              >
                프로필 제거
              </button>
            </div>
          </div>
          <div className="w-6/12 ">
            <div className="mb-6 pb-4 border-b border-solid border-accent">
              <TitleAndDesc title="아이디" description="cankyu6@gmail.com" />
            </div>
            <div className="mb-6 pb-4 border-b border-solid border-accent relative">
              <TitleAndDesc title="닉네임" description="이용자1" />
              <EditPosition className="border-b border-solid ">수정</EditPosition>
            </div>
            <div className="mb-6 pb-4 border-b border-solid border-accent">
              <TitleAndDesc title="현재 포인트" description="50000" type="point" />
            </div>
            <div className="flex justify-between gap-x-9">
              <button
                ref={cacheChargeButtonDom}
                className={`btn btn-primary grow charge ${cacheChargeModalState && 'active'}`}
                onClick={() => {
                  cacheChargeModalStateFn(
                    cacheChargeModalState,
                    pullCacheModalState,
                    setcacheChargeModalState,
                    setpullCacheModalState,
                  );
                }}
              >
                충전
              </button>
              <button
                ref={pullCacheButtonDom}
                className={`btn btn-primary grow charge ${pullCacheModalState && 'active'}`}
                onClick={() => {
                  pullCacheModalStateFn(
                    pullCacheModalState,
                    cacheChargeModalState,
                    setcacheChargeModalState,
                    setpullCacheModalState,
                  );
                }}
              >
                가져오기
              </button>
            </div>
          </div>
        </div>
        <div className="px-10 font-bold relative">
          <div className="flex justify-end mt-5">
            <ChargeList>
              <h4 className="mb-4">충전 내역</h4>
              <table className="text-left border-separate border-spacing-y-1.5">
                <thead className="font-black text-lg">
                  <th className="pr-40">날짜</th>
                  <th>충전 금액</th>
                </thead>
                <tbody className="font-thin text-base">
                  {arr.map(() => {
                    return (
                      <>
                        <tr>
                          <td>2023-08-22</td>
                          <td>
                            200000000<span>원</span>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </ChargeList>
          </div>
        </div>
      </BackgroundCover>
      {/* absolute를 이용하여 자유롭게 위치를 조정 할 수 있도록 제작 */}
      {cacheChargeModalState && (
        <ModalPosition>
          <Modal spanString="원" PTagString="얼마를 충전할까요?" buttonString="충전">
            충전(모달)
          </Modal>
        </ModalPosition>
      )}
      {pullCacheModalState && (
        <ModalPosition>
          <Modal spanString="P" PTagString="얼마를 가져올까요?" buttonString="가져오기">
            내 계좌로 가져오기
          </Modal>
        </ModalPosition>
      )}
    </div>
  );
};

const EditPosition = styled.button`
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
`;

const ProfilePseudoElements = styled.label`
  &::after {
    content: '';
    width: 1px;
    height: 20px;
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--secondary);
  }
`;

const ModalPosition = styled.div`
  position: absolute;
  left: 35%;
  top: 10%;
`;

const ChargeList = styled.div`
  width: 50%;
  &::after {
    content: '';
    width: 1px;
    height: 100%;
    position: absolute;
    left: 46%;
    top: 50%;
    background-color: var(--secondary);
    transform: translateY(-50%);
  }
`;
