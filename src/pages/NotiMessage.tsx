import { BackgroundCover } from "../components/common/BackgroundCover";
import { Pagination } from "../components/common/Pagination";
import { Title } from "../components/common/Title";

export const NotiMessage = () => {
  return (
    <>
      <BackgroundCover>
        <Title>전체 알림</Title>
        <BackgroundCover margin="my-4" padding="lg:p-8 md:p-4 p-2">
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row gap-x-4">
              <div className="font-black text-base">"임대 만료 임박"</div>
              <div className="text-sm">2023-08-29 12:34:56</div>
            </div>
            <div className="text-base"> 임대 만료가 3일 남았습니다!</div>
          </div>
          <div className="group py-4 ">
            <hr className="border-base group-hover:border-transparent" />
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row gap-x-4">
              <div className="font-black text-base">"임대 만료 임박"</div>
              <div className="text-sm">2023-08-29 12:34:56</div>
            </div>
            <div className="text-base"> 임대 만료가 3일 남았습니다!</div>
          </div>
          <div className="group py-4 ">
            <hr className="border-base group-hover:border-transparent" />
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row gap-x-4">
              <div className="font-black text-base">"임대 만료 임박"</div>
              <div className="text-sm">2023-08-29 12:34:56</div>
            </div>
            <div className="text-base"> 임대 만료가 3일 남았습니다!</div>
          </div>
          <div className="group py-4 ">
            <hr className="border-base group-hover:border-transparent" />
          </div>
        </BackgroundCover>
        <Pagination itemsPerPage={10} totalItems={55} />
      </BackgroundCover>
    </>
  );
};
