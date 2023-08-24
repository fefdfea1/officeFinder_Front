const checkReg = /[^0-9]/g;

export const modalCheckValue = (
  event: React.ChangeEvent<HTMLInputElement>,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
) => {
  const targetValue = event.target.value;
  const onlyNumber = targetValue.replace(checkReg, '');
  setInputValue(onlyNumber);
};
