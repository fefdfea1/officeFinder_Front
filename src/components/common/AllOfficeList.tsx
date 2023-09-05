import { AiFillStar } from "react-icons/ai";
import { BackgroundCover } from "./BackgroundCover";
import { Pagination } from "./Pagination";

export const AllOfficeList = (): JSX.Element => {
  const list = Array.from({ length: 27 }, (_, i) => {
    return {
      id: i,
      image: "https://picsum.photos/320",
      officeName: "선릉 더 공간A",
      grade: "4.91(21)",
      address: "서울시 강남구 테헤란로70번길 14-10",
      price: "월 500,000",
    };
  });
  return (
    <>
      <div className="grid justify-center sm:grid-cols-1 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-w-min">
        {list?.map(v => {
          return (
            <figure key={v?.id} className="mx-auto">
              <img className="rounded-xl" src={v?.image} alt="Shoes" />
              <div className="text-left">
                <div className="flex justify-between flex-row">
                  <p className="font-bold text-base tracking-tight">{v?.officeName}</p>
                  <div className="flex gap-1 items-center">
                    <AiFillStar className="flex" />
                    <p className="font-bold text-sm tracking-tight">{v?.grade}</p>
                  </div>
                </div>
                <p className="font-medium text-sm">{v?.address}</p>
                <p className="font-medium text-sm price">{v?.price}</p>
              </div>

            </div>
            <p className="font-medium text-sm">서울시 강남구 테헤란로70번길 14-10</p>
            <p className="font-medium text-sm">200m</p>
            <p className="font-medium text-sm price">월 500,000</p>
          </div>
        </figure>

        <figure className="mx-auto">
          <img className="rounded-xl" src="https://picsum.photos/320" alt="Shoes" />
          <div className="text-left">
            <div className="flex justify-between flex-row">
              <p className="font-bold text-base tracking-tight">선릉 더 공간A</p>
              <div className="flex gap-1 items-center">
                <AiFillStar className="flex" />
                <p className="font-bold text-sm tracking-tight">4.91(21)</p>
              </div>
            </div>
            <p className="font-medium text-sm">서울시 강남구 테헤란로70번길 14-10</p>
            <p className="font-medium text-sm">200m</p>
            <p className="font-medium text-sm price">월 500,000</p>
          </div>
        </figure>
        <figure className="mx-auto">
          <img className="rounded-xl" src="https://picsum.photos/320" alt="Shoes" />
          <div className="text-left">
            <div className="flex justify-between flex-row">
              <p className="font-bold text-base tracking-tight">선릉 더 공간A</p>
              <div className="flex gap-1 items-center">
                <AiFillStar className="flex" />
                <p className="font-bold text-sm tracking-tight">4.91(21)</p>
              </div>
            </div>
            <p className="font-medium text-sm">서울시 강남구 테헤란로70번길 14-10</p>
            <p className="font-medium text-sm">200m</p>
            <p className="font-medium text-sm price">월 500,000</p>
          </div>
        </figure>
        <figure className="mx-auto">
          <img className="rounded-xl" src="https://picsum.photos/320" alt="Shoes" />
          <div className="text-left">
            <div className="flex justify-between flex-row">
              <p className="font-bold text-base tracking-tight">선릉 더 공간A</p>
              <div className="flex gap-1 items-center">
                <AiFillStar className="flex" />
                <p className="font-bold text-sm tracking-tight">4.91(21)</p>
              </div>
            </div>
            <p className="font-medium text-sm">서울시 강남구 테헤란로70번길 14-10</p>
            <p className="font-medium text-sm">200m</p>
            <p className="font-medium text-sm price">월 500,000</p>
          </div>
        </figure>
        <figure className="mx-auto">
          <img className="rounded-xl" src="https://picsum.photos/320" alt="Shoes" />
          <div className="text-left">
            <div className="flex justify-between flex-row">
              <p className="font-bold text-base tracking-tight">선릉 더 공간A</p>
              <div className="flex gap-1 items-center">
                <AiFillStar className="flex" />
                <p className="font-bold text-sm tracking-tight">4.91(21)</p>
              </div>
            </div>
            <p className="font-medium text-sm">서울시 강남구 테헤란로70번길 14-10</p>
            <p className="font-medium text-sm">200m</p>
            <p className="font-medium text-sm price">월 500,000</p>
          </div>
        </figure>

      </div>
      <BackgroundCover width="w-1/3" margin="mx-auto" padding="p-4">
        <Pagination itemsPerPage={10} totalItems={list?.length} />
      </BackgroundCover>
    </>
  );
};
