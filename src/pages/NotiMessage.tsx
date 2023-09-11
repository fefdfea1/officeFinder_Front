import styled from "@emotion/styled";
import { BackgroundCover } from "../components/common/BackgroundCover";
import { Pagination } from "../components/common/Pagination";
import { Title } from "../components/common/Title";
import { useQuery } from "react-query";
import { getAgencyNotiApi, getCustomerNotiApi } from "../fetch/get/main";

export const NotiMessage = () => {
  const userType = window.localStorage.getItem("userType");
  console.log(userType);
  const { data } = useQuery("getNotiApi", userType === "customer" ? getCustomerNotiApi : getAgencyNotiApi);

  console.log({ data });
  return (
    <>
      <BackgroundCover margin="mt-20">
        <Title>전체 알림</Title>
        <BackgroundCover margin="my-4" padding="lg:p-8 md:p-4 p-2">
          {data?.content?.map((data: any) => {
            return (
              <Noti key={data?.id} className="flex flex-col gap-y-2">
                <div className="flex flex-row gap-x-4 mt-2">
                  <div className="font-black text-base">{data?.title}</div>
                  <div className="text-sm">{data?.createdAt}</div>
                </div>
                <div className="text-base pl-2">{data?.content}</div>
              </Noti>
            );
          })}
        </BackgroundCover>
        {/* <Pagination itemsPerPage={10} totalItems={data?.totalPages} /> */}
      </BackgroundCover>
    </>
  );
};

const Noti = styled.div`
  ::after {
    content: "";
    position: relative;
    width: 100%;
    height: 0.5px;
    margin: 6px 0;
    background-color: #dde1eb;
  }
  &:last-child {
    padding-bottom: 7px;
  }
  &:last-child::after {
    display: none;
  }
`;
