import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { RiArrowDropDownLine } from "react-icons/ri";
import { fetchMyOfficesNameData } from "../../fetch/get/agent"

type MyOfficeListDropDownProps = {
  onOfficeChange: (office: string, id: number) => void;
  officeName: string;
  forReview: boolean;
};

type Item = {
  id: number;
  officeName: string;
}

export const MyOfficeListDropDown: React.FC<MyOfficeListDropDownProps> = ({ onOfficeChange, officeName, forReview }) => {
  const [selectedItem, setSelectedItem] = useState<Item>({ id: -1, officeName: officeName });
  const [isOpen, setIsOpen] = useState(false);

  const { data: myOfficeNames } = useQuery("MyOfficesName", fetchMyOfficesNameData, {

  });
  let officeList = myOfficeNames?.data || ["오피스를 추가하세요"];

  if (forReview && officeList.length > 1) {
    officeList = officeList.slice(1);
  }

  const handleOfficeNameChange = (officeName: string, id: number) => {
    setSelectedItem({ ...selectedItem, id, officeName });
    onOfficeChange(officeName, id);
    setIsOpen(false);
  };
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="form-control lg:w-52 md:w-40 w-32">
      <div className="dropdown">
        <label tabIndex={0} className="group btn btn-primary btn-outline justify-between w-full hover:" onClick={toggleDropDown}>
          <span className="text-base group-hover:text-white">{selectedItem.officeName}</span>
          <RiArrowDropDownLine className="text-2xl" />
        </label>
        <ul tabIndex={0} className={`dropdown-content w-full z-[1] menu p-2 shadow bg-base-100 rounded-box ${isOpen ? "" : "hidden"}`}>
          {officeList.map(({ id, officeName }: { id: number, officeName: string }) => (
            <li key={id}>
              <a onClick={() => handleOfficeNameChange(officeName, id)}>
                {officeName}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};
