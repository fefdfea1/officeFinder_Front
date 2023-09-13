import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const MaxCapacityDropDown = (props: {
  width: string;
  setMaxPeople?: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  // width로 넓이를 지정할 수 있습니다. ex) w-52, w-full
  const [selectedItem, setSelectedItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (props.setMaxPeople && selectedItem !== "") props.setMaxPeople(true);
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
              props.setMaxPeople ? props.setMaxPeople(true) : null;
            }}
          >
            <span className="label-text font-medium group-hover:text-white">
              {selectedItem || <span className="text-sm font-medium text-info">최대인원 수</span>}
            </span>
            <RiArrowDropDownLine className="text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className={`dropdown-content w-full h-52 z-[1] menu p-2 shadow bg-base-100 rounded-box flex flex-nowrap overflow-y-auto 
            ${isOpen ? "" : "hidden"}`}
          >
            <li>
              <a onClick={() => handleItemClick("1인")}>1인</a>
            </li>
            <li>
              <a onClick={() => handleItemClick("2인")}>2인</a>
            </li>
            <li>
              <a onClick={() => handleItemClick("3인")}>3인</a>
            </li>
            <li>
              <a onClick={() => handleItemClick("4인")}>4인</a>
            </li>
            <li>
              <a onClick={() => handleItemClick("5인")}>5인</a>
            </li>
            <li>
              <a onClick={() => handleItemClick("6인")}>6인</a>
            </li>
            <li>
              <a onClick={() => handleItemClick("7인")}>7인</a>
            </li>
            <li>
              <a onClick={() => handleItemClick("8인")}>8인</a>
            </li>
            <li>
              <a onClick={() => handleItemClick("9인")}>9인</a>
            </li>
            <li>
              <a onClick={() => handleItemClick("10인 이상")}>10인 이상</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
