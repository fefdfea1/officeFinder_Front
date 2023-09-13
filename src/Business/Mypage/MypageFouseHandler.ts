//수정 버튼을 누를때만 자유롭게 수정을 할 수 있도록 하는 로직

export const setEditClass = (nameInputDom: React.RefObject<HTMLInputElement>) => {
  if (nameInputDom.current) {
    nameInputDom.current.readOnly = false;
  }
};

export const mypageBlueEventHandler = (nameInputDom: React.RefObject<HTMLInputElement>) => {
  if (nameInputDom.current) {
    nameInputDom.current.readOnly = true;
    nameInputDom.current.value = nameInputDom.current.defaultValue;
  }
};

//post 요청 추가가 필요함
