import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BackgroundCover } from '../../components/common/BackgroundCover';
import { Title } from '../../components/common/Title';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { MaxCapacityDropDown } from '../../components/common/MaxCapacityDropDown';
import { AddOfficePhoto } from '../../components/agent/AddOfficePhoto';
import { AddOfficeAddress } from '../../components/agent/AddOfficeAddress';
import { MyOfficeListDropDown } from '../../components/common/MyOfficeListDropDown';



export const SalesAnalysis = () => {

  const [officeName, setOfficeName] = useState('전체')
  const handleOfficeChange = (office: string) => {
    setOfficeName(office);
  };

  return (
    <>
      <div className="flex justify-end relative">
        <div className="absolute top-6 flex">
          <div className="group py-4">
            <MyOfficeListDropDown width="w-52" onOfficeChange={handleOfficeChange} />
            <hr className="border-primary group-hover:border-transparent" />
          </div>
          <Link to="/AddOffice">
            <Button style="btn btn-primary btn-outline w-40" text="오피스 수정하기" />
          </Link>
        </div>
      </div>
      <BackgroundCover>
        <Title>{officeName} 매출 상세</Title>

      </BackgroundCover>
    </>
  );
};
