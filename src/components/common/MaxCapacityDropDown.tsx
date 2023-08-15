import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import styled from '@emotion/styled';

type StyledProps = {
  position?: string;
  top?: string;
  left?: string;
};
// labeldl 크기를 가지고 있어서 디자인상으로 이상해지는 문제가 생겨 position값을 넣어서 absolute로
//만들 수 있도록 하였습니다.
export const MaxCapacityDropDown = (props: { width: string }): JSX.Element => {
  // width로 넓이를 지정할 수 있습니다. ex) w-52, w-full
  const [selectedItem, setSelectedItem] = useState('');
  const [isOpen, setIsOpen] = useState(false);

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
        <Position className="label" position="absolute" top="-30px" left="0">
          <span className="label-text">최대 인원 수를 선택하세요.</span>
        </Position>
        <div className="dropdown">
          <label
            tabIndex={0}
            className="group btn btn-primary btn-outline justify-between w-full hover:"
            onClick={toggleDropDown}
          >
            <span className="label-text group-hover:text-white">{selectedItem}</span>
            <RiArrowDropDownLine className="text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className={`dropdown-content w-full z-[1] menu p-2 shadow bg-base-100 rounded-box ${
              isOpen ? '' : 'hidden'
            }`}
          >
            <li>
              <a onClick={() => handleItemClick('1인')}>1인</a>
            </li>
            <li>
              <a onClick={() => handleItemClick('2인')}>2인</a>
            </li>
            <li>
              <a onClick={() => handleItemClick('3인')}>3인</a>
            </li>
            <li>
              <a onClick={() => handleItemClick('4인')}>4인</a>
            </li>
            <li>
              <a onClick={() => handleItemClick('5인')}>5인</a>
            </li>
            <li>
              <a onClick={() => handleItemClick('6인~10인')}>6인~10인</a>
            </li>
            <li>
              <a onClick={() => handleItemClick('10인 이상')}>10인 이상</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Position = styled.label<StyledProps>`
  position: ${props => (props.position ? props.position : 'static')};
  top: ${props => props.top};
  left: ${props => props.left};
`;
