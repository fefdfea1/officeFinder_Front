import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { selectValueType } from "../../pages/Booking";

export const SelectDateDropDown = (props: {
  width: string;
  setChangeState?: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectValue?: React.Dispatch<React.SetStateAction<selectValueType>>;
  selectValue?: selectValueType;
}): JSX.Element => {
  // width로 넓이를 지정할 수 있습니다. ex) w-52, w-full
  const MaxMonth = Array.from({ length: 11 });
  const [selectedItem, setSelectedItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (props.setChangeState && selectedItem !== "") {
      const sliceValue = Number(selectedItem.replace("개월", ""));
      if (props.setSelectValue && props.selectValue) {
        props.setSelectValue({ ...props.selectValue, month: sliceValue });
      }
      props.setChangeState(true);
    }
  }, [selectedItem]);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    if (props.setSelectValue && props.selectValue) setIsOpen(false);
  };

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`form-control  ${props.width}`}>
        <div className="dropdown">
          <label
            tabIndex={0}
            className="group btn btn-primary btn-outline justify-between w-full"
            onClick={toggleDropDown}
          >
            <span className="label-text font-medium group-hover:text-white">
              {selectedItem || <span className="text-sm font-medium text-info">1 ~ 11개월 까지 선택 가능</span>}
            </span>
            <RiArrowDropDownLine className="text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className={`dropdown-content w-full h-52 z-[1] menu p-2 shadow bg-base-100 rounded-box flex flex-nowrap overflow-y-auto 
            ${isOpen ? "" : "hidden"}`}
          >
            {MaxMonth.map((_, index) => {
              return (
                <li key={index}>
                  <a onClick={() => handleItemClick(`${index + 1}개월`)}>{`${index + 1} 개월`}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
