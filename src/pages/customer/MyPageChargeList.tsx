import { fetchDataType } from "../MyPage";
import styled from "@emotion/styled";
type propsType = {
  fetchUserData: fetchDataType | null;
};

export const MyPageChargeList = (props: propsType) => {
  return (
    <>
      <div className="pr-10 pl-20 font-bold relative ">
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
                {props.fetchUserData?.data.histories &&
                  props.fetchUserData.data.histories.map((item, index) => {
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
      </div>
    </>
  );
};

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
