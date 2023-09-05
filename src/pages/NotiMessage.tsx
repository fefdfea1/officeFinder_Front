import styled from "@emotion/styled";
import { BackgroundCover } from "../components/common/BackgroundCover";
import { Pagination } from "../components/common/Pagination";
import { Title } from "../components/common/Title";

export const NotiMessage = () => {
  const data = Array.from({ length: 15 }, (_, i) => {
    return { id: i, title: "임대만료임박", time: "2023-08-29 12:34:56", content: "임대 만료가 3일 남았습니다!" };
  });

  console.log({ data });
  return (
    <>
      <BackgroundCover margin="mt-20">
        <Title>전체 알림</Title>
        <BackgroundCover margin="my-4" padding="lg:p-8 md:p-4 p-2">
          {data?.map(v => {
            return (
              <Noti key={v?.id} className="flex flex-col gap-y-2">
                <div className="flex flex-row gap-x-4 mt-2">
                  <div className="font-black text-base">{v?.title}</div>
                  <div className="text-sm">{v?.time}</div>
                </div>
                <div className="text-base pl-2">{v?.content}</div>
              </Noti>
            );
          })}
        </BackgroundCover>
        <Pagination itemsPerPage={10} totalItems={data?.length} />
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
