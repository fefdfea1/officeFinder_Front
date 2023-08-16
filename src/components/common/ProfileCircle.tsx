export const ProfileCircle = () => {
  return (
    <>
      <div className="avatar flex">
        <div className="w-10 h-10 rounded-full border-2  border-solid border-accent align-middle">
          <img
            // 확인을 위한 임시적인 이미지입니다 전역변수에 저장될 유저 이미지를 넣어주세요
            src="data:image/png;base64,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"
            className="block"
          />
        </div>
        <div className="flex flex-col ml-2">
          <p className="font-bold text-base text-black">김창규</p>
        </div>
      </div>
    </>
  );
};
