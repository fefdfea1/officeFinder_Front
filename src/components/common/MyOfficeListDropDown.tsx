import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { fetchMyOfficesNameData } from "../../fetch/get/agent"

type MyOfficeListDropDownProps = {
  onOfficeChange: (office: string, id: number) => void;
  officeName: string
};

type Item = {
  officeName: string;
  id: number;
};

export const MyOfficeListDropDown: React.FC<MyOfficeListDropDownProps> = ({ onOfficeChange, officeName }) => {
  const [selectedItem, setSelectedItem] = useState<Item>({ id: -1, officeName: officeName });
  const [isOpen, setIsOpen] = useState(false);

  const { data: myOfficeNames } = useQuery('MyOfficesName', fetchMyOfficesNameData);

  const officeList = myOfficeNames?.data || ["오피스를 추가하세요"];

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
        <ul tabIndex={0} className={`dropdown-content w-full z-[1] menu p-2 shadow bg-base-100 rounded-box ${isOpen ? '' : 'hidden'}`}>
          {officeList.map((item: Item) => (
            <li key={item.id}>
              <a onClick={() => handleOfficeNameChange(item.officeName, item.id)}>
                {item.officeName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
