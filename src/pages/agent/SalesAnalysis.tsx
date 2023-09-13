import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BackgroundCover } from "../../components/common/BackgroundCover";
import { Title } from "../../components/common/Title";
import { Button } from "../../components/common/Button";
import { MyOfficeListDropDown } from "../../components/common/MyOfficeListDropDown";
import { OfficeName } from "../../components/booking/OfficeName";
import { OfficeOptions } from "../../components/booking/OfficeOptions";
import { ReservationAttendeesList } from "../../components/agent/SalesAnalysis/ReservationAttendeesList";
import { SalesCharts } from "../../components/agent/Charts/SalesCharts";
import { fetchdetailOfficeData } from "../../fetch/get/agent";
import { useQuery } from "react-query";
import type { DetailData } from "../../type/agentTypes";


export const SalesAnalysis = () => {
  const { paramsId, paramsName } = useParams();
  const navigate = useNavigate();
  const [officeName, setOfficeName] = useState<string>("전체");
  const [officeId, setOfficeId] = useState<number>(-1);

  useEffect(() => {
    const parsedId = Number(paramsId);
    setOfficeId(parsedId);
    setOfficeName(paramsName || "전체");
  }, [paramsId, paramsName]);

  const handleOfficeChange = (office: string, id: number) => {
    navigate(`/SalesAnalysis/${id}/${office}`);
    setOfficeName(office);
    setOfficeId(id);
  };

  const { data: detailData, isLoading, isError } = useQuery<DetailData>(["detailData", officeId], () =>
    fetchdetailOfficeData(officeId), { enabled: officeId !== -1 }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>데이터를 불러 올 수 없습니다.</p>;

  return (
    <>
      <div className="flex justify-end relative">
        <div className="absolute top-[-6px] lg:top-10 right-10 flex z-10">
          <div className="flex">
            <div className="group my-4 ">
              <MyOfficeListDropDown forReview={false} officeName={officeName} onOfficeChange={handleOfficeChange} />
              <hr className="border-primary group-hover:border-transparent" />
            </div>
            <Link to={`/AllReviews/${officeId}/${officeName}`}>
              {officeName === "전체" ? null : <Button style="btn btn-primary btn-outline w-[90px] md:w-40">
                <p>{officeName} 리뷰</p>
              </Button>}
            </Link>
          </div>
        </div>
      </div>
      <BackgroundCover>
        <Title>{officeName} 매출 상세</Title>
        <div className="flex flex-col ">
          {officeName !== "전체" && detailData && (
            <>
              <div className="p-3 flex justify-between">
                <OfficeName name={officeName} address={detailData.address} />
                <Link to={`/AddOffice/${officeId}`}>
                  <Button style="btn btn-primary w-[86px] md:w-40">
                    <p>수정하기</p>
                  </Button>
                </Link>
              </div>
              <OfficeOptions totalReview="2" maxPeople={detailData.maxCapacity} price={detailData.leaseFee} needReviewCount={false} OptionData={detailData.officeOptionDto} />
            </>
          )}
          <SalesCharts officeId={officeId} />
          {officeName !== "전체" && <ReservationAttendeesList officeId={officeId} />}
        </div>
      </BackgroundCover>
    </>
  );
};
