import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { BsBuildingFillAdd } from 'react-icons/bs'
import { BackgroundCover } from '../../components/common/BackgroundCover';
import { Button } from '../../components/common/Button';
import { Title } from '../../components/common/Title';
import { OfficeName } from '../../components/booking/Officename';
import { RecentReviews } from "../../components/agent/RecentReviews"
import type { MyOfficeResponse, OfficeData } from './agentTypes'; // Import the MyOffice type
import { fetchMyOfficeData } from '../../fetch/get/agent';

export const MyOffice = () => {
  const { data, isLoading, isError } = useQuery<MyOfficeResponse>('myOfficeData', fetchMyOfficeData, {

  });

  if (isLoading) {
    return <div className="p-4 text-center font-bold">Loading...</div>;
  }

  if (isError) {
    return <div className="p-4 text-center font-bold">데이터를 가져올 수 없습니다.</div>;
  }

  const myOfficeData = data?.data;

  return (
    <>
      <div className="flex justify-end relative">
        <div className="absolute top-10 right-10 flex z-10">
          <Link to="/AddOffice"><Button style="btn btn-primary btn-outline w-[90px] md:w-40" text="새 지점 등록하기" /></Link>
        </div>
      </div>
      <BackgroundCover>
        <Title>나의 지점보기</Title>
        {myOfficeData && myOfficeData.length > 0 ? (
          myOfficeData.map((office: OfficeData, index) => (
            <div key={office.id} className={`flex flex-col gap-4 p-4 lg:flex-row ${index !== myOfficeData.length - 1 ? 'border-b border-accent border-solid' : ''}`}>
              <figure className="flex flex-col w-full lg:w-1/3 gap-1">
                <img className="rounded-xl" src={office.picture[0]} alt={office.name} />
              </figure>
              <div className="reviews flex flex-col gap-2 border-black w-full">
                <OfficeName name={office.name} address={office.locaion} />
                <Link to="/SalesAnalysis"><button className="btn btn-primary w-full">매출 자세히보기</button></Link>

                <div className="reviews">
                  <div className="w-full shadow-md rounded-xl p-4 h-full">
                    <p className="text-primary pb-4">Reviews</p>
                    <RecentReviews />

                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-4">
            <div className="p-4 text-center font-bold">아직 등록된 오피스가 없습니다. <br />먼저 오피스를 <Link to="/addOffice" className="link link-primary">등록</Link>해주세요.</div>
          </div>
        )}
      </BackgroundCover>
    </>
  );
};
