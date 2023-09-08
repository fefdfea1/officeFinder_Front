import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { BackgroundCover } from '../../components/common/BackgroundCover';
import { Title } from '../../components/common/Title';
import { Button } from '../../components/common/Button';
import { MyOfficeListDropDown } from '../../components/common/MyOfficeListDropDown';
import { OfficeName } from '../../components/booking/Officename';
import { OfficeOptions } from '../../components/booking/OfficeOptions';
import { ReservationAttendeesList } from '../../components/agent/ReservationAttendeesList'
import { SalesCharts } from '../../components/agent/Charts/SalesCharts';


export const SalesAnalysis = () => {
  let { paramsId, paramsName } = useParams()
  const navigate = useNavigate()
  const [officeName, setOfficeName] = useState<string>();
  const [officeId, setOfficeId] = useState<number | undefined>();
  useEffect(() => { setOfficeId(Number(paramsId)); setOfficeName(paramsName) }, [paramsId, paramsName])
  console.log(paramsId, paramsName)
  const handleOfficeChange = (office: string, id: number) => {
    navigate(`/SalesAnalysis/${id}/${office}`);

    setOfficeName(office);
    setOfficeId(id)
  };



  return (
    <>
      {officeName && officeId &&
        (<>
          <div className="flex justify-end relative">
            <div className="absolute top-[-6px] lg:top-10 right-10 flex z-10">
              <div className="flex">
                <div className="group my-4 ">
                  <MyOfficeListDropDown onOfficeChange={handleOfficeChange} />
                  <hr className="border-primary group-hover:border-transparent" />
                </div>
                <Link to={`/AllReviews/${officeId}/${officeName}`}>
                  <Button style="btn btn-primary btn-outline w-[90px] md:w-40">
                    <p>{officeName} 리뷰</p>
                  </Button>
                </Link>

              </div>
            </div>
          </div>
          <BackgroundCover>
            <Title>{officeName} 매출 상세</Title>
            {/* 본문 */}
            <div className="flex flex-col ">
              {officeName === "전체" ? null :
                <>
                  <div className="p-3 flex justify-between">
                    <OfficeName name="오피스A" address="주소" />
                    <Link to={`/AddOffice/${officeId}`}>
                      <Button style="btn btn-primary w-[86px] md:w-40"><p>수정하기</p></Button>
                    </Link>
                  </div>
                  <OfficeOptions totalReview={20} needReviewCount={false} OptionData={{ haveTvProjector: true }} />
                </>
              }
              <SalesCharts officeId={officeId} />
              <ReservationAttendeesList />
            </div>
          </BackgroundCover>
        </>)}
    </>
  );
};
