import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { BackgroundCover } from '../../components/common/BackgroundCover';
import { Title } from '../../components/common/Title';
import { Button } from '../../components/common/Button';
import { MyOfficeListDropDown } from '../../components/common/MyOfficeListDropDown';
import { OfficeName } from '../../components/booking/Officename';
import { Reviews } from '../../components/booking/Reviews';
import { Pagination } from '../../components/common/Pagination';
import { fetchReviewsData } from '../../fetch/get/agent';

// import { useQuery } from 'react-query';


export const AllReviews = () => {

  const { paramsId, paramsName } = useParams();
  const navigate = useNavigate();
  const [officeName, setOfficeName] = useState<string>("전체");
  const [officeId, setOfficeId] = useState<number>(0);

  useEffect(() => {
    const parsedId = Number(paramsId);
    setOfficeId(parsedId);
    setOfficeName(paramsName || "전체");
  }, [paramsId, paramsName]);

  const handleOfficeChange = (office: string, id: number) => {
    navigate(`/AllReviews/${id}/${office}`);
    setOfficeName(office);
    setOfficeId(id)
  };
  const { data, isLoading, isError } = useQuery(["reviews", officeId], () => fetchReviewsData(officeId), {
    retry: 1,
    onError: (data) => console.log(data)
  })
  console.log(data)

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>데이터를 불러 올 수 없습니다.</p>;

  return (
    <>
      <div className="flex justify-end relative">
        <div className="absolute top-[-6px] lg:top-10 right-10 flex z-10">
          <div className="flex">
            <div className="group my-4 ">
              <MyOfficeListDropDown forReview={true} officeName={officeName} onOfficeChange={handleOfficeChange} />
              <hr className="border-primary group-hover:border-transparent" />
            </div>
            <Link to={`/SalesAnalysis/${officeId}/${officeName}`}>
              <Button style="btn btn-primary btn-outline  w-[86px] md:w-40"><p>매출보기</p></Button>
            </Link>
          </div>
        </div>
      </div>
      <BackgroundCover>
        <Title>{officeName} 리뷰</Title>
        {/* 본문 */}
        <div className="flex flex-col gap-4">
          <div className="p-3 flex justify-between">
            <OfficeName name="오피스A" address="주소" />
          </div>
          <BackgroundCover margin="m-0" padding="lg:p-8 md:p-4 p-2">
            <Reviews />
            <div className="flex justify-center mt-4">
              <Pagination itemsPerPage={10} totalItems={55} />
            </div>
          </BackgroundCover>
        </div>
        {/* 본문 끝 */}
      </BackgroundCover>
    </>
  );
};
