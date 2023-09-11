// import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { BackgroundCover } from "../../components/common/BackgroundCover";
import { Title } from "../../components/common/Title";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import { OptionsCheckbox } from "../../components/common/OptionsCheckbox";
import { AddOfficePhoto } from "../../components/agent/addOffice/AddOfficePhoto";
import { AddOfficeAddress } from "../../components/agent/addOffice/AddOfficeAddress";
import { useAddOfficeHandel } from "../../components/agent/addOffice/HandelAddOffice"
import { NumberToKoreanConverter } from "../../Business/Agent/NumberToKorean";
import { usePost, useUpdate } from "../../fetch/post/agent"

export const AddOffice = () => {
  const navigate = useNavigate();
  const paramsId = useParams();
  // const [officeId, setOfficeId] = useState<number>(0)
  console.log(paramsId.paramsId)
  const { name, handleOfficeName,
    selectedOptions, handleOptionsChange,
    address, handleAddressChange,
    monthlyPrice, handlePriceChange,
    rooms, handleCountRoomsChange,
    maxCapacity, handleMaxCapacityChange,
    images, handlefileUpload
  } = useAddOfficeHandel();

  // useEffect(() => {
  //   setOfficeId(Number(paramsId.paramsId))

  // })
  console.log(paramsId)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const { mutate: PostMutate } = usePost()
  const { mutate: UpdateMutate } = useUpdate(Number(paramsId.paramsId))
  const handleChange = () => {
    const updatedData = {
      officeName: name,
      maxCapacity: maxCapacity,
      leaseFee: monthlyPrice,
      maxRoomCount: rooms,
      address: address,
      officeOption: selectedOptions,
    };

    const formData = new FormData()

    const blob = new Blob([JSON.stringify(updatedData)], {
      type: 'application/json',
    });
    formData.append("request", blob);

    if (images.length !== 0) {
      images.forEach((image) => {
        formData.append("multipartFileList", image);
      });
    }
    if (paramsId.paramsId !== undefined) {
      UpdateMutate(formData, {
        onSuccess: () => {
          alert("등록이 완료되었습니다!")
          navigate("/MyOffice");

        },
      });
    } else {
      PostMutate(formData, {
        onSuccess: () => {
          alert("수정이 완료되었습니다!")
          navigate("/MyOffice");
        },
      });
    }
  }

  return (
    <>
      <div className="flex justify-end relative">
        <div className="absolute top-10 right-10 flex z-10">
          <Link to="/MyOffice">
            <Button style="btn btn-primary btn-outline w-[90px] md:w-40"><p>등록취소</p></Button>
          </Link>
        </div>
      </div>
      <BackgroundCover>
        {(paramsId.paramsId === undefined) ? <Title>오피스 등록하기</Title> : <Title>오피스 수정하기</Title>}
        <form className="flex flex-col items-center py-8 gap-6" onSubmit={handleSubmit}>
          <Input type="text" width="w-80" inputLabel="공간의 이름을 입력해주세요." inputLabelPosition="text-center" onInputChange={handleOfficeName} />
          <AddOfficeAddress onAddressHandler={handleAddressChange} />
          <div className="">
            <div className="flex justify-center gap-2">
              <p className="text-center text-base">필요한 옵션을 선택하세요.</p>
            </div>
            <OptionsCheckbox onOptionChange={handleOptionsChange} />
          </div>
          <div className="">
            <p className="text-center text-base pb-4">최대 인원수와 오피스의 개수, 가격을 입력하세요.</p>
            <div className="flex flex-col md:flex-row">
              <Input type="number" placeholder="숫자로 입력하세요." inputLabelPosition="text-center" inputLabel="최대 인원수" onInputChange={handleMaxCapacityChange} />
              <Input type="number" placeholder="숫자로 입력하세요." inputLabelPosition="text-center" inputLabel="개수" onInputChange={handleCountRoomsChange} />
              <div className="flex flex-col items-center">
                <Input type="text" onInputChange={handlePriceChange} placeholder="숫자로 입력하세요." inputLabelPosition="text-center" inputLabel="1인당 월 가격" />
                {monthlyPrice ? <NumberToKoreanConverter price={monthlyPrice || 0} /> : null}
              </div>
            </div>
          </div>
          <AddOfficePhoto onImgChange={handlefileUpload} />
          <Button style="btn btn-primary w-64 mt-2" clickHandler={handleChange} ><p>등록하기</p></Button>
        </form>
      </BackgroundCover>
    </>
  );
};
