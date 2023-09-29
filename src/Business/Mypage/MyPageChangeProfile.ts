import { fetchAgentEditProfile } from "../../fetch/post/agent";
import { fetchEditProfile } from "../../fetch/post/customer";

const extensionCheck = (extension: string) => {
  if (extension === "png" || extension === "jpg") {
    return true;
  } else false;
};

const sizeCheck = (fileSize: number) => {
  const maxSize = 3 * 1024 * 1024; //3MB파일 사이르 제한

  if (fileSize > maxSize) {
    alert("파일의 크기는 3MB이하여야 합니다");
    return false;
  } else {
    return true;
  }
};

const previewImg = (fileBlob: FileList, imageDom: React.RefObject<HTMLImageElement>) => {
  const reader = new FileReader();
  reader.onload = ({ target }) => {
    if (imageDom.current && target) {
      const result = target.result as string;
      imageDom.current.src = result;
    }
  };
  reader.readAsDataURL(fileBlob[0]);
};

export const changeProfile = (
  event: React.ChangeEvent<HTMLInputElement>,
  imageDom: React.RefObject<HTMLImageElement>,
  ownerState: boolean,
) => {
  let formData = new FormData();
  const target = event.target as HTMLInputElement;
  const targetFiles = event.target.files;
  if (target && targetFiles) {
    const fileExtension = targetFiles[0].name.split(".").pop();
    const fileSize = targetFiles[0].size;
    if (fileExtension) {
      if (extensionCheck(fileExtension)) {
        if (sizeCheck(fileSize)) {
          formData.append("value", targetFiles[0] as unknown as Blob);
          previewImg(targetFiles, imageDom);
          if (ownerState === true) {
            fetchAgentEditProfile(formData);
          } else {
            fetchEditProfile(formData);
          }
        }
      }
    }
  }
};

export const removeProfile = (imageDom: React.RefObject<HTMLImageElement>) => {
  if (imageDom.current) {
    imageDom.current.src = "/officeImg/noimage.png";
  }
};
