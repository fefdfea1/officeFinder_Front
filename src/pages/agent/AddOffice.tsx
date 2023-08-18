import { Link } from "react-router-dom";
import { BackgroundCover } from "../../components/common/BackgroundCover";
import { Title } from "../../components/common/Title";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import { OptionsCheckbox } from "../../components/common/OptionsCheckbox";
import { MaxCapacityDropDown } from "../../components/common/MaxCapacityDropDown";
import { AddOfficePhoto } from "../../components/agent/AddOfficePhoto"
import { AddOfficeAddress } from "../../components/agent/AddOfficeAddress"

export const AddOffice = () => {
  return (
    <>
      <div className="flex justify-end relative">
        <div className="absolute top-6">
          <Link to="/MyOffice">
            <Button style="btn btn-primary btn-outline w-40" text="등록취소" />
          </Link>
        </div>
      </div>
      <BackgroundCover>
        <Title>새 지점 등록하기</Title>
        <div className="flex flex-col items-center py-8 gap-4">
          <Input inputTitle="공간의 이름을 입력해주세요." placeholder="" warning="" />
          <AddOfficeAddress />
          <div className="">
            <p className="text-center text-base">필요한 옵션을 선택하세요.</p>
            <OptionsCheckbox />
          </div>
          <div className="pt-4">
            <p className="text-center text-base pb-4">최대 인원수와 오피스의 개수, 가격을 입력하세요.</p>
            <div className="flex">
              <div className="maxCapacity">
                <p className='text-sm pl-2 mt-0'>최대 인원수</p>
                <div className="group relative">
                  <MaxCapacityDropDown width="w-52 my-2" />
                  <hr className="group-hover:border-transparent border-1 border-primary w-full absolute top-[58px]" />
                </div>
              </div>
              <Input placeholder="숫자로 입력하세요." inputTitle="개수" warning="" />
              <Input placeholder="숫자로 입력하세요." inputTitle="가격" warning="" />
            </div>
          </div>
          <AddOfficePhoto />
        </div>
      </BackgroundCover>
    </>
  );
};
