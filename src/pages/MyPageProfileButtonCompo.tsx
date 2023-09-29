import { changeProfile, removeProfile } from "../Business/Mypage/MyPageChangeProfile";
import { fetchRemoveUserProfile } from "../fetch/delete/customer";
import styled from "@emotion/styled";
type propsType = {
  imageDom: React.RefObject<HTMLImageElement>;
  OwnerState: boolean;
};

export const MyPageProfileButtonCompo = (props: propsType) => {
  return (
    <div className="flex justify-between relative sm:px-4 md:px-14 lg:px-10 xl:px-14">
      <input
        type="file"
        id="EditProfile"
        className="hidden"
        accept="image/jpeg, image/png"
        name="profile"
        readOnly
        onChange={event => changeProfile(event, props.imageDom, props.OwnerState)}
      />
      <ProfilePseudoElements htmlFor="EditProfile" className="cursor-pointer">
        프로필 등록
      </ProfilePseudoElements>
      <button
        onClick={() => {
          removeProfile(props.imageDom);
          fetchRemoveUserProfile();
        }}
      >
        프로필 제거
      </button>
    </div>
  );
};

const ProfilePseudoElements = styled.label`
  &::after {
    content: "";
    width: 1px;
    height: 20px;
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--secondary);
  }
`;
