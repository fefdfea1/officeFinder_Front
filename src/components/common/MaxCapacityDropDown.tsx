import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { selectValueType } from "../../pages/Booking";

export const MaxCapacityDropDown = (props: {
  width: string;
  setSelectMaxPeople?: React.Dispatch<React.SetStateAction<boolean>>;
  maxPeople: number;
  setSelectValue?: React.Dispatch<React.SetStateAction<selectValueType>>;
  setMainMaxValue?: React.Dispatch<
    React.SetStateAction<{
      maxCapacity: number;
    }>
  >;
  selectValue?: selectValueType;
}): JSX.Element => {
  // width로 넓이를 지정할 수 있습니다. ex) w-52, w-full
  const [selectedItem, setSelectedItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const createMaxPeopleArray = Array.from({ length: props.maxPeople });
  useEffect(() => {
    if (props.setSelectMaxPeople && selectedItem !== "") {
      if (props.setSelectValue && props.selectValue) {
        const sliceValue = Number(selectedItem.replace("인", ""));
        props.setSelectValue({ ...props.selectValue, maxPeople: sliceValue });
      }
      props.setSelectMaxPeople(true);
    }
    if (props.setMainMaxValue) {
      const sliceValue = Number(selectedItem.replace("인", ""));
      props.setMainMaxValue({ maxCapacity: sliceValue });
    }
  }, [selectedItem]);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);

    setIsOpen(false);
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
            onChange={() => {
              props.setSelectMaxPeople ? props.setSelectMaxPeople(true) : null;
            }}
          >
            <span className="label-text font-medium group-hover:text-white">
              {selectedItem || <span className="text-sm font-medium text-info">최대인원 수</span>}
            </span>
            <RiArrowDropDownLine className="text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className={`dropdown-content w-full max-h-[13rem] z-[1] menu p-2 shadow bg-base-100 rounded-box flex flex-nowrap overflow-y-auto 
            ${isOpen ? "" : "hidden"}`}
          >
            {createMaxPeopleArray.map((_, index) => (
              <li key={index}>
                <a
                  onClick={() => {
                    handleItemClick(`${index + 1}인`);
                  }}
                >
                  {`${index + 1}인`}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
