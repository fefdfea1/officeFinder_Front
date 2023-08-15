export const OptionsCheckbox = () => {
  const optionList = [
    "에어컨", "카페", "복사기", "택배서비스", "도어락", "콘센트", "팩스",
    "24시 운영", "연중 무휴", "난방기", "주차", "공용 라운지", "공용 주방",
    "정수기", "루프탑", "다과", "음료", "개인 락커", "프로젝터", "화이트보드",
    "인터넷", "샤워시설", "창고"
  ];

  return (
    <div className="options border rounded-xl p-4">
      <div className="grid grid-cols-4">
        {optionList.map((option, index) => (
          <div key={index} className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-xs checkbox-primary" />
              <span className="label-text">{option}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
