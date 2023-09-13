import { AiFillStar } from "react-icons/ai";
import { Pagination } from "./Pagination";
import { Link } from "react-router-dom";
import { OfficeData, OfficeResponse } from "../../type/mainTypes";
import { Heart } from "./Heart";
import { mainClickEventHandler } from "../../Business/Main/targetLogic";
import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";
import { useQuery } from "react-query";
import { BookMarkDataType } from "../../pages/customer/BookMark";
import { fetchCustomerBookMarkData } from "../../fetch/get/customer";
import { useEffect, useState } from "react";
import { activeMatchBookMarkList } from "../../Business/AllOfficeList/activeMatchBookMark";

export const AllOfficeList = ({ data }: any): JSX.Element => {
  const [BookMarkDataState, setBookMarkDataState] = useState<any>(null);
  const [PageState, setPageState] = useState<number>(0);

  const BookMarkData = useQuery<BookMarkDataType | null>(
    ["mainBookMarkData", PageState],
    () => fetchCustomerBookMarkData(PageState, 10),
    {
      enabled: !!data,
    },
  );

  useEffect(() => {
    if (BookMarkData) {
      const data = BookMarkData.data;
      setBookMarkDataState(data);
    }
  }, [BookMarkData]);

  return (
    <>
      <div className="grid justify-center sm:grid-cols-1 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-w-min">

        {BookMarkDataState !== null && BookMarkDataState !== undefined
          ? data?.content?.map((item: any) => {
              const match: boolean = activeMatchBookMarkList(item, BookMarkDataState);
              return (
                <Link
                  to={`Booking/${item?.id}`}
                  key={item?.id}
                  className="mx-auto my-3 relative"
                  onClick={e => mainClickEventHandler(e)}
                  data-officenum={item.id}
                >
                  {item?.imagePath === "None" ? (
                    <img className="rounded-xl" src={`officeImg/noimage.png`} />
                  ) : (
                    <img
                      className="rounded-xl object-cover h-48 w-72"
                      alt="{data?.name}사진"
                      src={item?.imagePath[0]}
                    />
                  )}
                  {match === true ? <Heart fillState="active" type="main" /> : <Heart type="main" />}


                  <div className="text-left mt-2 px-1 relative">
                    <div className="flex justify-between flex-row">
                      <p className="font-bold text-base tracking-tight">{item?.name}</p>
                      <div className="flex gap-1 items-center">
                        <AiFillStar className="flex" />
                        <p className="font-bold text-sm tracking-tight">
                          {item?.reviewRate}({item?.reviewCount})
                        </p>
                      </div>
                    </div>
                    <p className="font-medium text-sm">{item?.location}</p>
                    <p className="font-medium text-sm price">월 {item?.leasePrice}원</p>
                  </div>
                </Link>
              );
            })
          : null}
      </div>


      <BackgroundCover width="w-1/3" margin="mx-auto mt-10" padding="p-4">
        {data && <Pagination itemsPerPage={10} totalItems={data.totalElements} setPageState={setPageState} />}
      </BackgroundCover>

    </>
  );
};
