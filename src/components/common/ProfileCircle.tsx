type propsType = {
  imgUrl: string,
  useName: string,
};

export const ProfileCircle = (props: propsType) => {
  return (
    <>
      <div className="avatar h-10">
        <div className="rounded-full align-middle">
          {props.imgUrl === "None" ? (
            <img
              src={`public/officeImg/noProfile.png`}
              alt="사용자 프로필"
              className="block"
            />
          )
            : (<img
              src={props.imgUrl}
              alt="사용자 프로필"
              className="block"
            />)}
        </div>
        <div className="ml-2">
          <p className="font-bold text-base text-black">{props.useName}</p>
        </div>
      </div>
    </>
  );
};