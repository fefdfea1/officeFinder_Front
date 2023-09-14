import { Title } from "../components/common/Title";
import { TitleAndDesc } from "../components/common/TitleAndDesc";
import { BackgroundCover } from "../components/common/BackgroundCover";
import { Modal } from "../components/common/Modal";
import { useState } from "react";
import { cacheChargeModalStateFn } from "../Business/Mypage/MyPageModalState";
import { useEffect, useRef } from "react";
import { changeProfile, removeProfile } from "../Business/Mypage/MyPageChangeProfile";
import { setEditClass, mypageBlueEventHandler } from "../Business/Mypage/MypageFouseHandler";
import { Link } from "react-router-dom";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useQuery } from "react-query";
import { fetchAgentMyPageData } from "../fetch/get/agent";
import { fetchCustomerMyPageData } from "../fetch/get/customer";
import { fetchRemoveUserProfile } from "../fetch/delete/customer";
import { fetchChangeName } from "../fetch/put/customer";
import styled from "@emotion/styled";

export type reFetchingType = <TPageData>(
  options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
) => Promise<QueryObserverResult<any, unknown>>;

type fetchDataType = {
  status: string;
  data: {
    id: number;
    email: string;
    name: string;
    point: number;
    roles: string[];
    histories?: {
      chargeAmount: number;
      createdAt: string;
    }[];
    profileImagePath: string;
  };
};

//Search와 마찬가지로 클린업 함수 작성을 위해 따로 파일로 만들지 않았습니다
export const MyPage = () => {
  const [cacheChargeModalState, setcacheChargeModalState] = useState<boolean>(false);
  const [pullCacheModalState, setpullCacheModalState] = useState<boolean>(false);
  const [OwnerState, setOwnerState] = useState<boolean>(false);
  const [fetchUserData, setUserData] = useState<fetchDataType | null>(null);
  const cacheChargeButtonDom = useRef<HTMLButtonElement>(null);
  const pullCacheButtonDom = useRef<HTMLButtonElement>(null);
  const imageDom = useRef<HTMLImageElement>(null);
  const nameInputDom = useRef<HTMLInputElement>(null);
  const userType = localStorage.getItem("userType");
  const { data, refetch } = useQuery(
    "getData",
    userType === "customer" && userType !== undefined ? fetchCustomerMyPageData : fetchAgentMyPageData,
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );

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
      setUserData(data);
    }
  }, [data]);
  console.log(data)
  useEffect(() => {
    if (fetchUserData) {
      setOwnerState(fetchUserData.data.roles[0] !== "ROLE_CUSTOMER" ? true : false);
    }
  }, [fetchUserData]);

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
        <div className={`flex justify-between items-center ${fetchUserData?.data.histories ? 'border-b border-solid border-accent' : ''} mb-8 px-8 pb-8 sm:flex-col lg:flex-row lg:gap-x-9`}>
          <div className=" sm:w-full lg:w-full">
            <figure className="w-full h-96 overflow-hidden rounded-lg mb-4">
              <img
                src={
                  fetchUserData && fetchUserData.data.profileImagePath !== "None"
                    ? fetchUserData.data.profileImagePath
                    : "public/officeImg/noimage.png"
                }
                alt="프로필 이미지"
                className="w-full h-full object-cover"
                ref={imageDom}
              />
            </figure>
            <div className="flex justify-between relative sm:px-4 md:px-14 lg:px-10 xl:px-14">
              <input
                type="file"
                id="EditProfile"
                className="hidden"
                accept="image/jpeg, image/png"
                name="profile"
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
                  fetchRemoveUserProfile();
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
                description={`${fetchUserData ? fetchUserData.data.email : "불러오기에 실패하였습니다"}`}
              />
            </div>
            <div className="mb-6 pb-4 border-b border-solid border-accent relative leading-loose">
              <h3 className="font-black text-lg pl-4">닉네임</h3>
              <form action="#" method="put" onSubmit={event => fetchChangeName(event, refetch)}>
                {/* defaultValue값에 false일때 값을 주게 되면 해당 값으로 고정 되어버려 넣지 않음 */}
                {fetchUserData ? (
                  <input
                    type="text"
                    id="EditIdInput"
                    className="text-base pl-4 mr font-bold bg-transparent"
                    defaultValue={`${fetchUserData.data.name}`}
                    readOnly
                    ref={nameInputDom}
                    onBlur={() => {
                      mypageBlueEventHandler(nameInputDom);
                    }}
                  />
                ) : (
                  <span className="text-base pl-4 mr font-bold bg-transparent">불러오기에 실패했습니다</span>
                )}
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
                description={`${fetchUserData ? fetchUserData.data.point : "불러오기에 실패하였습니다"}`}
                type="point"
              />
            </div>
            {fetchUserData?.data.histories && <div className="flex justify-between gap-x-9">
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
            </div>}
          </div>
        </div>
        {fetchUserData?.data.histories && <div className="pr-10 pl-20 font-bold relative ">
          <div className="flex justify-end mt-5 sm:justify-center sm:w-full lg:justify-end">
            <ChargeList>
              <h4 className="mb-4">충전 내역</h4>
              <table className=" text-left border-separate border-spacing-y-1.5 sm:whitespace-nowrap sm:border-spacing-y-4 sm:w-full">
                <thead className="font-black text-lg">
                  <tr>
                    <th className="pr-40 sm:pr-0">날짜</th>
                    <th>충전 금액</th>
                  </tr>
                </thead>
                <tbody className="font-thin text-base">
                  {fetchUserData?.data.histories &&
                    fetchUserData.data.histories.map((item, index) => {
                      const formatDate = item.createdAt.slice(0, 10);
                      return (
                        <tr key={index}>
                          <td>{formatDate}</td>
                          <td>
                            {item.chargeAmount}
                            <span>원</span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </ChargeList>
          </div>
        </div>}
      </BackgroundCover>
      {/* absolute를 이용하여 자유롭게 위치를 조정 할 수 있도록 제작 */}
      {/* api 명세가 정해지면 테스트  */}
      {cacheChargeModalState && (
        <ModalPosition>
          <Modal spanString="원" Pstring="얼마를 충전할까요?" buttonString="충전" refetch={refetch}>
            충전(모달)
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
