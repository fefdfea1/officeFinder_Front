import { Link } from "react-router-dom";
import { BackgroundCover } from "../../components/common/BackgroundCover";
import { Title } from "../../components/common/Title";
import { Button } from "../../components/common/Button";

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
      </BackgroundCover>
    </>
  );
};
