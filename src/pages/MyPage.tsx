import { Title } from "../components/common/Title";
import { TitleAndDesc } from "../components/common/TitleAndDesc";
import { BackgroundCover } from "../components/common/BackgroundCover";
import { Modal } from "../components/common/Modal";
import { useState } from "react";
import { cacheChargeModalStateFn } from "../Business/Mypage/MyPageModalState";
import { pullCacheModalStateFn } from "../Business/Mypage/MyPageModalState";
import { useEffect, useRef } from "react";
import { changeProfile, removeProfile } from "../Business/Mypage/MyPageChangeProfile";
import { setEditClass, mypageBlueEventHandler } from "../Business/Mypage/MypageFouseHandler";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchMyPageData } from "../fetch/get/agent";
import styled from "@emotion/styled";

type fetchDataType = {
  email: string;
  id: string;
  name: string;
  point: number;
  roles: string;
};

const defaultUserData = {
  email: "",
  id: "",
  name: "",
  point: 0,
  roles: "",
};

const arr = Array.from({ length: 10 });

//Search와 마찬가지로 클린업 함수 작성을 위해 따로 파일로 만들지 않았습니다
export const MyPage = () => {
  const [cacheChargeModalState, setcacheChargeModalState] = useState<boolean>(false);
  const [pullCacheModalState, setpullCacheModalState] = useState<boolean>(false);
  const [OwnerState, setOwnerState] = useState<boolean>(false);
  const [fetchUserData, setUserData] = useState<fetchDataType>(defaultUserData);
  const cacheChargeButtonDom = useRef<HTMLButtonElement>(null);
  const pullCacheButtonDom = useRef<HTMLButtonElement>(null);
  const imageDom = useRef<HTMLImageElement>(null);
  const nameInputDom = useRef<HTMLInputElement>(null);
  console.log(setOwnerState);
  const { data } = useQuery("getData", fetchMyPageData);

  useEffect(() => {
    //클린업 함수를 위해 해당 부분에 작성
    const windowEventHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (!target.classList.contains("charge")) {
        if (target.closest(".Modal") === null) {
          if (
            cacheChargeButtonDom.current?.classList.contains("active") ||
            pullCacheButtonDom.current?.classList.contains("active")
          ) {
            setpullCacheModalState(false);
            setcacheChargeModalState(false);
          }
        }
      }
    };

    window.addEventListener("click", windowEventHandler);

    return () => {
      window.removeEventListener("click", windowEventHandler);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setUserData(data.MyPage);
      console.log(data);
    }
  }, [data]);

  return (
    <div className="relative mb-10">
      <BackgroundCover>
        <div className="mb-12 relative">
          <Title>마이페이지</Title>
          {OwnerState && (
            <ShowMyOfficeButotn>
              <button className="w-52 btn btn-outline btn-primary">
                <Link to={"/MyOffice"} className="w-52 btn btn-outline btn-primary absolute right-0 top-0">
                  나의 지점 보기
                </Link>
              </button>
            </ShowMyOfficeButotn>
          )}
        </div>
        <div className="flex justify-between items-center border-b border-solid border-accent mb-8 px-8 pb-8 sm:flex-col lg:flex-row lg:gap-x-9">
          <div className=" sm:w-full lg:w-full">
            <figure className="w-full overflow-hidden rounded-lg mb-4">
              {}
              <img
                src="data:image/jpeg;base64,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"
                alt="프로필 이미지"
                className="w-full h-full"
                ref={imageDom}
              />
            </figure>
            <div className="flex justify-between relative sm:px-4 md:px-14 lg:px-10 xl:px-14">
              <input
                type="file"
                id="EditProfile"
                className="hidden"
                accept="image/jpeg, image/png"
                readOnly
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
          <div className="w-6/12 sm:w-full lg:w-full">
            <div className="mb-6 pb-4 border-b border-solid border-accent">
              <TitleAndDesc
                title="아이디"
                description={`${fetchUserData ? fetchUserData.email : "불러오기에 실패하였습니다"}`}
              />
            </div>
            <div className="mb-6 pb-4 border-b border-solid border-accent relative leading-loose">
              <h3 className="font-black text-lg pl-4">닉네임</h3>
              <form action="#" method="post">
                {/* defaultValue값에 false일때 값을 주게 되면 해당 값으로 고정 되어버려 넣지 않음 */}
                <input
                  type="text"
                  id="EditIdInput"
                  className="text-base pl-4 mr font-bold bg-transparent"
                  defaultValue={`${fetchUserData ? fetchUserData.name : ""}`}
                  readOnly
                  ref={nameInputDom}
                  onBlur={() => {
                    mypageBlueEventHandler(nameInputDom);
                  }}
                />
              </form>

              <EditPosition
                className="border-b border-solid cursor-pointer"
                htmlFor="EditIdInput"
                onClick={() => {
                  setEditClass(nameInputDom);
                }}
              >
                수정
              </EditPosition>
            </div>
            <div className="mb-6 pb-4 border-b border-solid border-accent">
              <TitleAndDesc
                title="현재 포인트"
                description={`${fetchUserData ? fetchUserData.point : "불러오기에 실패하였습니다"}`}
                type="point"
              />
            </div>
            <div className="flex justify-between gap-x-9">
              <button
                ref={cacheChargeButtonDom}
                className={`btn btn-primary grow charge ${cacheChargeModalState && "active"}`}
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
                className={`btn btn-primary grow charge ${pullCacheModalState && "active"}`}
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
        <div className="pr-10 pl-20 font-bold relative ">
          <div className="flex justify-end mt-5 sm:justify-center sm:w-full lg:justify-end">
            <ChargeList>
              <h4 className="mb-4">충전 내역</h4>
              <table className=" text-left border-separate border-spacing-y-1.5 sm:whitespace-nowrap sm:border-spacing-y-4 sm:w-full">
                <thead className="font-black text-lg">
                  <th className="pr-40 sm:pr-0">날짜</th>
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
      {/* api 명세가 정해지면 테스트  */}
      {cacheChargeModalState && (
        <ModalPosition>
          <Modal spanString="원" Pstring="얼마를 충전할까요?" buttonString="충전">
            충전(모달)
          </Modal>
        </ModalPosition>
      )}
      {pullCacheModalState && (
        <ModalPosition>
          <Modal spanString="P" Pstring="얼마를 가져올까요?" buttonString="가져오기">
            내 계좌로 가져오기
          </Modal>
        </ModalPosition>
      )}
    </div>
  );
};

const EditPosition = styled.label`
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
`;

const ProfilePseudoElements = styled.label`
  &::after {
    content: "";
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
  transform: translate(-50%, -50%);

  @media (min-width: 360px) {
    top: 40%;
    left: 50%;
  }

  @media (min-width: 480px) {
    top: 43%;
    left: 50%;
  }

  @media (min-width: 768px) {
    top: 25%;
    left: 74%;
  }
`;

const ChargeList = styled.div`
  width: 50%;
  &::after {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    left: 46%;
    top: 50%;
    background-color: var(--secondary);
    transform: translateY(-50%);
  }

  @media (min-width: 360px) {
    width: 100%;
    justify-content: center;

    &::after {
      left: 40%;
    }
  }

  @media (min-width: 480px) {
    &::after {
      left: 36%;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    &::after {
      left: 41%;
    }
  }
`;

const ShowMyOfficeButotn = styled.div`
  position: absolute;
  top: -40%;
  right: 1%;
`;
