import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { OfficeName } from '../../components/booking/Officename';
import { BackgroundCover } from '../../components/common/BackgroundCover';
import { Button } from '../../components/common/Button';
import { Title } from '../../components/common/Title';
import { RecentReviews } from "../../components/agent/RecentReviews"

interface OfficeData {
  id: number;
  name: string;
  locaion: string;
  picture: string[];
}

interface MyOfficeResponse {
  myOffice: {
    data: OfficeData[];
  };
}

export const MyOffice = () => {
  const [myOfficeData, setMyOfficeData] = useState<OfficeData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<MyOfficeResponse>("https://my-json-server.typicode.com/kjewt/json-server/db");
        setMyOfficeData(response.data.myOffice.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-4 text-center font-bold">Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-end relative">
        <div className="absolute top-10 right-10 flex z-10">
          <Link to="/AddOffice"><Button style="btn btn-primary btn-outline w-[90px] md:w-40" text="새 지점 등록하기" /></Link>
        </div>
      </div>
      <BackgroundCover>
        <Title>나의 지점보기</Title>
        {myOfficeData.map((office, index) => (
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
        ))}

      </BackgroundCover>
    </>
  );
};
