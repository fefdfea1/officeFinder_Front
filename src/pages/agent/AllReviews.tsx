import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BackgroundCover } from '../../components/common/BackgroundCover';
import { Title } from '../../components/common/Title';
import { Button } from '../../components/common/Button';
import { MyOfficeListDropDown } from '../../components/common/MyOfficeListDropDown';
import { OfficeName } from '../../components/booking/Officename';
import { Reviews } from '../../components/booking/Reviews';



export const AllReviews = () => {

  const [officeName, setOfficeName] = useState('전체')
  const handleOfficeChange = (office: string) => {
    setOfficeName(office);
  };

  return (
    <>
      <div className="flex justify-end relative">
        <div className="absolute top-6 right-10 flex z-10">
          <div className="group py-4">
            <MyOfficeListDropDown width="w-52" onOfficeChange={handleOfficeChange} />
            <hr className="border-primary group-hover:border-transparent" />
          </div>
          <Link to="/SalesAnalysis">
            <Button style="btn btn-primary btn-outline w-40" text="매출보기" />
          </Link>
        </div>
      </div>
      <BackgroundCover>
        <Title>{officeName}전체 리뷰</Title>
        {/* 본문 */}
        <div className="flex flex-col gap-4">
          <div className="p-3 flex justify-between">
            <OfficeName name="오피스A" address="주소" />
          </div>
          <BackgroundCover margin="m-0">
            <Reviews />
          </BackgroundCover>
        </div>
        {/* 본문 끝 */}
      </BackgroundCover>
    </>
  );
};
