import { Link } from "react-router-dom";
import { BackgroundCover } from "../../components/common/BackgroundCover";
import { Title } from "../../components/common/Title";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import { OptionsCheckbox } from "../../components/common/OptionsCheckbox";

export const AddOffice = () => {
  return (
    <>
      <div className="flex justify-end relative">
        <div className="absolute top-6">
          <Link to="/MyOffice">

            <Button style="btn btn-primary btn-outline w-32" text="등록취소" />
          </Link>
        </div>
      </div>
      <BackgroundCover>
        <Title>새 지점 등록하기</Title>
        <div className="flex flex-col items-center py-8">
          <Input inputTitle="공간의 이름을 입력해주세요." placeholder="" warning="" />
          <Input inputTitle="오피스 주소를 입력해주세요." placeholder="도로명으로 입력해주세요." warning="" />
          <OptionsCheckbox />
        </div>
      </BackgroundCover>
    </>
  );
};
