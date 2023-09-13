export const changeCommentHandler = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
  textAreaCount: string,
  setCount: React.Dispatch<React.SetStateAction<string>>,
) => {
  //600자를 넘어 텍스트를 입력하려 하면 자동으로 600자에 맞춰지도록 앞에 글씨를 제거
  const target = e.target as HTMLTextAreaElement;
  const maxInputString = 600;
  if (textAreaCount.length < maxInputString) {
    setCount(target.value);
  } else if (textAreaCount.length >= maxInputString) {
    const sliceString = target.value.slice(0, 600);
    setCount(sliceString);
  }
};
