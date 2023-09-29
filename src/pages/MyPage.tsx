import { Title } from "../components/common/Title";
import { BackgroundCover } from "../components/common/BackgroundCover";
import { Modal } from "../components/common/Modal";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useQuery } from "react-query";
import { fetchAgentMyPageData } from "../fetch/get/agent";
import { fetchCustomerMyPageData } from "../fetch/get/customer";
import { MyPageProfileImgCompo } from "./MyPageProfileImgCompo";
import { MyPageProfileButtonCompo } from "./MyPageProfileButtonCompo";
import { MyPageProfileInfoCompo } from "./MyPageProfileInfoCompo";
import { MyPageChargeList } from "./customer/MyPageChargeList";
import styled from "@emotion/styled";

export type reFetchingType = <TPageData>(
  options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
) => Promise<QueryObserverResult<any, unknown>>;

export type fetchDataType = {
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
            <ShowMyOfficeButton>
              <button className="w-52 btn btn-outline btn-primary">
                <Link to={"/MyOffice"} className="w-52 btn btn-outline btn-primary absolute right-0 top-0">
                  나의 지점 보기
                </Link>
              </button>
            </ShowMyOfficeButton>
          )}
        </div>
        <div
          className={`flex justify-between items-center ${
            fetchUserData?.data.histories ? "border-b border-solid border-accent" : ""
          } mb-8 px-8 pb-8 sm:flex-col lg:flex-row lg:gap-x-9`}
        >
          <div className=" sm:w-full lg:w-full">
            <MyPageProfileImgCompo fetchUserData={fetchUserData} imageDom={imageDom} />
            <MyPageProfileButtonCompo imageDom={imageDom} OwnerState={OwnerState} />
          </div>
          <MyPageProfileInfoCompo
            fetchUserData={fetchUserData}
            refetch={refetch}
            OwnerState={OwnerState}
            cacheChargeModalState={cacheChargeModalState}
            pullCacheModalState={pullCacheModalState}
            setcacheChargeModalState={setcacheChargeModalState}
            setpullCacheModalState={setpullCacheModalState}
          />
        </div>
        {fetchUserData?.data.histories ? (
          <MyPageChargeList fetchUserData={fetchUserData} />
        ) : (
          <table className=" text-left border-separate border-spacing-y-1.5 sm:whitespace-nowrap sm:border-spacing-y-4 sm:w-full">
            <thead className="font-black text-lg">
              <tr>
                <th className="pr-40 sm:pr-0">날짜</th>
                <th>충전 금액</th>
              </tr>
            </thead>
            <tbody className="font-thin text-base">
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        )}
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

const ShowMyOfficeButton = styled.div`
  position: absolute;
  top: -40%;
  right: 1%;
`;
