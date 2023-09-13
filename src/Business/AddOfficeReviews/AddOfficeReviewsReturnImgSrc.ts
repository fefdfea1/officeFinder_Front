import { fetchAddReview } from "../../fetch/post/customer";

export const returnImgSrc = (imgSrcArr: string[]) => {
  const returnArr: string[] = [];
  imgSrcArr.forEach(item => {
    if (item === "None") return;
    returnArr.push(item);
  });
  return returnArr;
};

export const submitHandler = (event: React.FormEvent<HTMLFormElement>, id: number) => {
  event.preventDefault();
  const target = event.target as HTMLElement;
  const childrenNode = target.childNodes[0];
  const textAreaDivNode = target.childNodes[1];
  const textAreaNode = textAreaDivNode.childNodes[0] as HTMLTextAreaElement;
  const textValue = textAreaNode.value;
  const inputDomNode = childrenNode.childNodes;
  let rating = 0;
  for (let i = 1; i < inputDomNode.length; i++) {
    const nodeTarget = inputDomNode[i] as HTMLInputElement;
    if (nodeTarget.checked) {
      rating = 0.5 * i;
    }
  }
  fetchAddReview(id, textValue, rating);
};
