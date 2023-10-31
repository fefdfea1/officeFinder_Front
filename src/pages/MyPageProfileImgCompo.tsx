import { fetchDataType } from "./MyPage";
type propsType = {
  fetchUserData: fetchDataType | null;
  imageDom: React.RefObject<HTMLImageElement>;
};

export const MyPageProfileImgCompo = (props: propsType) => {
  return (
    <figure className="w-full h-96 overflow-hidden rounded-lg mb-4">
      <img
        src={
          props.fetchUserData && props.fetchUserData.data.profileImagePath !== "None"
            ? props.fetchUserData.data.profileImagePath
            : "public/officeImg/noProfile.png"
        }
        alt="프로필 이미지"
        className="w-full h-full object-cover"
        ref={props.imageDom}
      />
    </figure>
  );
};
