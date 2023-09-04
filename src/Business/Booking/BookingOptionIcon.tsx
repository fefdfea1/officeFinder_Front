//에어컨
import { TbAirConditioningDisabled } from "react-icons/tb";
//도어락
import { RiDoorLockBoxFill } from "react-icons/ri";
//라운지
import { GrLounge } from "react-icons/gr";
//화이트 보드
import { FaChalkboardTeacher } from "react-icons/fa";
//카페
import { IoIosCafe } from "react-icons/io";
//팩스
import { FaFax } from "react-icons/fa";
//부엌
import { FaKitchenSet } from "react-icons/fa6";
//인터넷
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";
//복사기
import { AiFillCopy } from "react-icons/ai";
//난방기
import { GiFireplace } from "react-icons/gi";
//개인 라커
import { PiLockersFill } from "react-icons/pi";
//샤워실
import { FaShower, FaParking } from "react-icons/fa";
//택배 , 프로젝터
import { BsFillBoxSeamFill, BsFillProjectorFill } from "react-icons/bs";
//창고
import { TbBuildingWarehouse } from "react-icons/tb";

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
      case "haveAirCondition":
        createObject.name = "에어컨";
        createObject.Icon = <TbAirConditioningDisabled />;
        changeArr.push(createObject);
        break;
      case "haveCafe":
        createObject.name = "카페";
        createObject.Icon = <IoIosCafe />;
        changeArr.push(createObject);
        break;
      case "havePrinter":
        createObject.name = "복사기";
        createObject.Icon = <AiFillCopy />;
        changeArr.push(createObject);
        break;
      case "packageSendServiceAvailable":
        createObject.name = "택배배송";
        createObject.Icon = <BsFillBoxSeamFill />;
        changeArr.push(createObject);
        break;
      case "haveDoorLock":
        createObject.name = "도어락";
        createObject.Icon = <RiDoorLockBoxFill />;
        changeArr.push(createObject);
        break;
      case "faxServiceAvailable":
        createObject.name = "팩스";
        createObject.Icon = <FaFax />;
        changeArr.push(createObject);
        break;
      case "havePublicKitchen":
        createObject.name = "공용주방";
        createObject.Icon = <FaKitchenSet />;
        changeArr.push(createObject);
        break;
      case "havePublicLounge":
        createObject.name = "공용라운지";
        createObject.Icon = <GrLounge />;
        changeArr.push(createObject);
        break;
      case "havePrivateLocker":
        createObject.name = "개인 사물함";
        createObject.Icon = <PiLockersFill />;
        changeArr.push(createObject);
        break;
      case "haveTvProjector":
        createObject.name = "프로젝터";
        createObject.Icon = <BsFillProjectorFill />;
        changeArr.push(createObject);
        break;
      case "haveWhiteBoard":
        createObject.name = "화이트보드";
        createObject.Icon = <FaChalkboardTeacher />;
        changeArr.push(createObject);
        break;
      case "haveWifi":
        createObject.name = "인터넷";
        createObject.Icon = <MdOutlineSignalWifiStatusbarConnectedNoInternet4 />;
        changeArr.push(createObject);
        break;
      case "haveShowerBooth":
        createObject.name = "샤워실";
        createObject.Icon = <FaShower />;
        changeArr.push(createObject);
        break;
      case "haveStorage":
        createObject.name = "창고";
        createObject.Icon = <TbBuildingWarehouse />;
        changeArr.push(createObject);
        break;
      case "haveHeater":
        createObject.name = "난방기";
        createObject.Icon = <GiFireplace />;
        changeArr.push(createObject);
        break;
      case "haveParking":
        createObject.name = "주차장";
        createObject.Icon = <FaParking />;
        changeArr.push(createObject);
        break;
    }
  });

  return changeArr;
};
