type propsType = {
  imgUrl?: string;
  useName?: string;
};

export const ProfileCircle = (props: propsType) => {
  return (
    <>
      <div className="avatar w-24 h-10">
        <div className="rounded-full border-2  border-solid border-accent align-middle">
          <img
            // 확인을 위한 임시적인 이미지입니다 전역변수에 저장될 유저 이미지를 넣어주세요
            src={props.imgUrl}
            alt="사용자 프로필"
            className="block"
          />
        </div>
        <div className="ml-2">
          <p className="font-bold text-base text-black">{props.useName}</p>
        </div>
      </div>
    </>
  );
};
