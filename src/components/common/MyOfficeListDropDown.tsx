import React from 'react';
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

type MyOfficeListDropDownProps = {
  onOfficeChange: (office: string) => void;
};

export const MyOfficeListDropDown: React.FC<MyOfficeListDropDownProps> = ({onOfficeChange }) => {
  const [selectedItem, setSelectedItem] = useState('전체');
  const [isOpen, setIsOpen] = useState(false);

  const handleOfficeNameChange = (office: string) => {
    onOfficeChange(office);
    setSelectedItem(office);
    setIsOpen(false);
  };

  const officeList = ["전체", "오피스A 1인실", "오피스A 3인실", "오피스A 6인실"];

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="form-control lg:w-52  md:w-40 w-32">
      <div className="dropdown">
        <label tabIndex={0} className="group btn btn-primary btn-outline justify-between w-full hover:" onClick={toggleDropDown}>
          <span className="text-base group-hover:text-white">{selectedItem}</span>
          <RiArrowDropDownLine className="text-2xl" />
        </label>
        <ul tabIndex={0} className={`dropdown-content w-full z-[1] menu p-2 shadow bg-base-100 rounded-box ${isOpen ? '' : 'hidden'}`}>
          {officeList.map((office, index) => (
            <li key={index}>
              <a onClick={() => handleOfficeNameChange(office)}>
                {office}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
