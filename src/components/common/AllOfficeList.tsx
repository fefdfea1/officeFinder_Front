import { AiFillStar } from "react-icons/ai";
import { Pagination } from "./Pagination";
import { Link } from "react-router-dom";
import { OfficeData, OfficeResponse } from "../../type/mainTypes";

type OfficeListProps = {
  data: OfficeResponse
}

export const AllOfficeList = (props: OfficeListProps): JSX.Element => {

  return (
    <>
      <div className="grid justify-center sm:grid-cols-1 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-w-min">
        {props.data.content?.map((data: OfficeData) => {
          return (
            <Link to={`Booking/${data?.id}`} key={data?.id} className="mx-auto my-3">
              {data?.imagePath === "None" ? (
                <img className="rounded-xl" src={`officeImg/noimage.png`} />
              ) : (
                <img className="rounded-xl object-cover h-48 w-72" alt={`${data?.name}사진`} src={data?.imagePath[0]} />
              )}
              <div className="text-left mt-2 px-1">
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
                <p className="font-medium text-sm price">월 {data?.leasePrice}원</p>
              </div>
            </Link>
          );
        })}
      </div>

      <Pagination itemsPerPage={10} totalItems={props.data.totalPages} />

    </>
  );
};
