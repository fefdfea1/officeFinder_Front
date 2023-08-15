import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

export const MyOfficeListDropDown = (props: { width: string }): JSX.Element => {
  // width로 넓이를 지정할 수 있습니다. ex) w-52, w-full
  const [selectedItem, setSelectedItem] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  //예시 자료입니다.
  const officeList = {
    더공간A: ["1인실", "2인실", "3인실"],
    더공간B: "2인실",
    더공간C: "3인실",
    더공간D: "4인실",
  };

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
          <label tabIndex={0} className="group btn btn-primary btn-outline justify-between w-full hover:" onClick={toggleDropDown}>
            <span className="label-text group-hover:text-white">{selectedItem}</span>
            <RiArrowDropDownLine className="text-2xl" />
          </label>
          <ul tabIndex={0} className={`dropdown-content w-full z-[1] menu p-2 shadow bg-base-100 rounded-box ${isOpen ? '' : 'hidden'}`}>
            {Object.entries(officeList).map(([officeName, roomList], index) => (
              <li key={index}>
                {Array.isArray(roomList) ? (
                  roomList.map((room, roomIndex) => (
                    <a key={roomIndex} onClick={() => handleItemClick(`${officeName} ${room}`)}>
                      {`${officeName} ${room}`}
                    </a>
                  ))
                ) : (
                  <a onClick={() => handleItemClick(`${officeName} ${roomList}`)}>
                    {`${officeName} ${roomList}`}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
