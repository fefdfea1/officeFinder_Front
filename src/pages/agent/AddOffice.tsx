import { Link } from 'react-router-dom';
import { BackgroundCover } from '../../components/common/BackgroundCover';
import { Title } from '../../components/common/Title';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { OptionsCheckbox } from '../../components/common/OptionsCheckbox';
import { AddOfficePhoto } from '../../components/agent/AddOfficePhoto';
import { AddOfficeAddress } from '../../components/agent/AddOfficeAddress';
import { useAddOfficeHandel } from '../../components/agent/addOfficeHandel'


export const AddOffice = () => {
  //selectedOptions를 true만 넘길 수 있도록 filter사용 예정
  const { selectedOptions, handleOptionsChange, address, } = useAddOfficeHandel();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  console.log(selectedOptions)
  console.log(address)

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
        <form className="flex flex-col items-center py-8 gap-6" onSubmit={handleSubmit}>
          <Input inputTitle="공간의 이름을 입력해주세요." placeholder="" warning="" />
          <AddOfficeAddress onAddressHandler={useAddOfficeHandel} />
          <div className="">
            <p className="text-center text-base">필요한 옵션을 선택하세요.</p>
            <OptionsCheckbox onOptionChange={handleOptionsChange} />
          </div>
          <div className="">
            <p className="text-center text-base pb-4">최대 인원수와 오피스의 개수, 가격을 입력하세요.</p>
            <div className="flex">
              <Input placeholder="숫자로 입력하세요" inputTitle="최대 인원수" warning="" />
              <Input placeholder="숫자로 입력하세요." inputTitle="개수" warning="" />
              <Input placeholder="숫자로 입력하세요." inputTitle="가격" warning="" />
            </div>
          </div>
          <AddOfficePhoto />
          <Button text="등록하기" style="btn btn-primary w-64 mt-4" />
        </form>
      </BackgroundCover>
    </>
  );
};
