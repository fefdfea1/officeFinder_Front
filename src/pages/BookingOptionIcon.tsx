//에어컨
// import { TbAirConditioningDisabled } from 'react-icons/tb';
//도어락
// import { RiDoorLockBoxFill } from 'react-icons/ri';
//라운지
// import { GrLounge } from 'react-icons/gr';
//화이트 보드
import { FaChalkboardTeacher } from 'react-icons/fa';
//카페
// import { IoIosCafe } from 'react-icons/io';
//팩스
// import { FaFax } from 'react-icons/fa';
//부엌
// import { FaKitchenSet } from 'react-icons/Fa6';
//인터넷
// import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from 'react-icons/md';
//복사기
// import { AiFillCopy } from 'react-icons/ai';
//난방기
import { GiFireplace } from 'react-icons/gi';
//개인 라커
// import { PiLockersFill } from 'react-icons/pi';
//샤워실
// import { FaShower, FaParking } from 'react-icons/fa';
//택배 , 프로젝터
// import { BsFillBoxSeamFill, BsFillProjectorFill } from 'react-icons/bs';
//창고
// import { TbBuildingWarehouse } from 'react-icons/tb';

type OptionType = string[];

export type ObjectType = {
  name?: string;
  Icon?: JSX.Element;
};

export const changeOptionName = (data: OptionType) => {
  const changeArr: ObjectType[] = [];
  data.forEach(element => {
    const createObject: ObjectType = {};
    switch (element) {
      case 'haveHeater':
        createObject.name = '난방기';
        createObject.Icon = <GiFireplace />;
        changeArr.push(createObject);
        break;
      case 'haveWhiteBoard':
        createObject.name = '화이트보드';
        createObject.Icon = <FaChalkboardTeacher />;
        changeArr.push(createObject);
        break;
    }
  });

  return changeArr;
};
