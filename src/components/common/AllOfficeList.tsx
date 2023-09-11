import { AiFillStar } from "react-icons/ai";
import { BackgroundCover } from "./BackgroundCover";
import { Pagination } from "./Pagination";
import { useQuery } from "react-query";

export const AllOfficeList = ({ data }: any): JSX.Element => {
  // const list = Array.from({ length: 27 }, (_, i) => {
  //   return {
  //     id: i,
  //     image: "https://picsum.photos/320",
  //     officeName: "선릉 더 공간A",
  //     grade: "4.91(21)",
  //     address: "서울시 강남구 테헤란로70번길 14-10",
  //     price: "월 500,000",
  //   };
  // });

  return (
    <>
      <div className="grid justify-center sm:grid-cols-1 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-w-min">
        {data?.content?.map((data: any) => {
          return (
            <figure key={data?.id} className="mx-auto">
              {data?.imagePath === "None" ? (
                <img className="rounded-xl object-contain" src={`officeImg/noimage.png`} />
              ) : (
                <img className="rounded-xl object-contain" alt="{data?.name}사진" src={data?.imagePath[0]} />
              )}
              <div className="text-left">
                <div className="flex justify-between flex-row">
                  <p className="font-bold text-base tracking-tight">{data?.name}</p>
                  <div className="flex gap-1 items-center">
                    <AiFillStar className="flex" />
                    <p className="font-bold text-sm tracking-tight">
                      {data?.reviewRate}({data?.reviewCount})
                    </p>
                  </div>
                </div>
                <p className="font-medium text-sm">{data?.location}</p>
                <p className="font-medium text-sm price">월{data?.leasePrice}원</p>
              </div>
            </figure>
          );
        })}
      </div>
      <BackgroundCover width="w-1/3" margin="mx-auto mt-10" padding="p-4">
        {/* <Pagination itemsPerPage={10} totalItems={data?.totalPages} /> */}
      </BackgroundCover>
    </>
  );
};
