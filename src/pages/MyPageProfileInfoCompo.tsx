import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query";
import { cacheChargeModalStateFn } from "../Business/Mypage/MyPageModalState";
import { mypageBlueEventHandler, setEditClass } from "../Business/Mypage/MypageFouseHandler";
import { TitleAndDesc } from "../components/common/TitleAndDesc";
import { fetchAgentEditName } from "../fetch/put/agent";
import { fetchChangeName } from "../fetch/put/customer";
import { fetchDataType } from "./MyPage";
import { useRef } from "react";
import styled from "@emotion/styled";

type refetchType = <TPageData>(
  options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
) => Promise<QueryObserverResult<any, unknown>>;

type propsType = {
  fetchUserData: fetchDataType | null;
  refetch: refetchType;
  OwnerState: boolean;
  cacheChargeModalState: boolean;
  pullCacheModalState: boolean;
  setcacheChargeModalState: React.Dispatch<React.SetStateAction<boolean>>;
  setpullCacheModalState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MyPageProfileInfoCompo = (props: propsType) => {
  const nameInputDom = useRef<HTMLInputElement>(null);
  const cacheChargeButtonDom = useRef<HTMLButtonElement>(null);
  return (
    <div className="w-6/12 sm:w-full lg:w-full">
      <div className="mb-6 pb-4 border-b border-solid border-accent">
        <TitleAndDesc
          title="아이디"
          description={`${props.fetchUserData ? props.fetchUserData.data.email : "불러오기에 실패하였습니다"}`}
        />
      </div>
      <div className="mb-6 pb-4 border-b border-solid border-accent relative leading-loose">
        <h3 className="font-black text-lg pl-4">닉네임</h3>
        <form
          action="#"
          method="post"
          onSubmit={event =>
            props.OwnerState === true ? fetchAgentEditName(event, props.refetch) : fetchChangeName(event, props.refetch)
          }
          encType="multipart/form-data"
        >
          {/* defaultValue값에 false일때 값을 주게 되면 해당 값으로 고정 되어버려 넣지 않음 */}
          {props.fetchUserData ? (
            <input
              type="text"
              id="EditIdInput"
              className="text-base pl-4 mr font-bold bg-transparent"
              defaultValue={`${props.fetchUserData.data.name}`}
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
          description={`${props.fetchUserData ? props.fetchUserData.data.point : "불러오기에 실패하였습니다"}`}
          type="point"
        />
      </div>
      {props.fetchUserData?.data.histories && (
        <div className="flex justify-between gap-x-9">
          <button
            ref={cacheChargeButtonDom}
            className={`btn btn-primary grow charge ${props.cacheChargeModalState && "active"}`}
            onClick={() => {
              cacheChargeModalStateFn(
                props.cacheChargeModalState,
                props.pullCacheModalState,
                props.setcacheChargeModalState,
                props.setpullCacheModalState,
              );
            }}
          >
            충전
          </button>
        </div>
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
