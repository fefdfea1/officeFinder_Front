import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { BackgroundCover } from "../../components/common/BackgroundCover";
import { Button } from "../../components/common/Button";
import { Title } from "../../components/common/Title";
import { OfficeName } from "../../components/booking/Officename";
import { RecentReviews } from "../../components/agent/RecentReviews"
import type { MyOfficeResponse, OfficeData } from "../../type/agentTypes";
import { fetchMyOfficeData } from "../../fetch/get/agent";
import { MyOfficeFigure } from "../../components/agent/MyOfficeFigure";


export const MyOffice = () => {

  const { data: officeData, isLoading: isOfficeLoading, isError: isOfficeError } = useQuery<MyOfficeResponse>("myOfficeData", fetchMyOfficeData, {
  });

  if (isOfficeLoading) {
    return <div className="p-4 text-center font-bold">Loading...</div>;
  }

  if (isOfficeError) {
    return <div className="p-4 text-center font-bold">데이터를 가져올 수 없습니다.</div>;
  }

  const myOfficeData = officeData?.content;
  // const filteredImagePaths = myOfficeData
  //   ?.map((office) => office.imagePath)
  //   .filter((imagePath) => imagePath !== "None");

  console.log(myOfficeData)

  return (
    <>
      <div className="flex justify-end relative">
        <div className="absolute top-10 right-10 flex z-10">
          <Link to="/AddOffice"><Button style="btn btn-primary btn-outline w-[90px] md:w-40"><p>오피스 등록하기</p></Button></Link>
        </div>
      </div>
      <BackgroundCover>
        <Title>나의 지점보기</Title>
        {myOfficeData && myOfficeData.length > 0 ? (
          myOfficeData.map((office: OfficeData, index: number) => (
            <div key={office.id} className={`flex flex-col gap-4 p-4 lg:flex-row pb-8
            ${index !== myOfficeData.length - 1 ? "border-b border-accent border-solid" : ""}
            `}>
              <div className="w-full lg:w-2/5 lg:max-w-[400px]">
                <MyOfficeFigure picturesUrl={office.imagePath} />
              </div>
              <div className="reviews flex flex-col gap-4 border-black w-full lg:w-3/5">
                <OfficeName name={office.officeName} address={office.address} />
                <Link to={`/SalesAnalysis/${office.id}/${office.officeName}`}><button className="btn btn-primary w-full">매출 자세히보기</button></Link>
                <RecentReviews officeId={office.id} />
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