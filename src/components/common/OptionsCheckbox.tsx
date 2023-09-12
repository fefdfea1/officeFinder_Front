import React from "react";
import type { officeOptions } from "../../type/agentTypes";

type OptionInfo = {
  name: string;
  key: string;
};

type OptionsCheckboxProps = {
  onOptionChange: (options: officeOptions) => void;
};

export const OptionsCheckbox: React.FC<OptionsCheckboxProps> = ({ onOptionChange }) => {
  const optionInfos: OptionInfo[] = [
    { name: "에어컨", key: "haveAirCondition" },
    { name: "카페", key: "haveCafe" },
    { name: "복사기", key: "havePrinter" },
    { name: "택배서비스", key: "packageSendServiceAvailable" },
    { name: "도어락", key: "haveDoorLock" },
    { name: "팩스", key: "faxServiceAvailable" },
    { name: "난방기", key: "haveHeater" },
    { name: "주차", key: "haveParking" },
    { name: "공용 라운지", key: "havePublicLounge" },
    { name: "공용 주방", key: "havePublicKitchen" },
    { name: "개인 락커", key: "havePrivateLocker" },
    { name: "프로젝터", key: "haveTvProjector" },
    { name: "화이트보드", key: "haveWhiteBoard" },
    { name: "인터넷", key: "haveWifi" },
    { name: "샤워시설", key: "haveShowerBooth" },
    { name: "창고", key: "haveStorage" },
  ];

  const initialOptions: officeOptions = optionInfos.reduce(
    (options, optionInfo) => ({
      ...options,
      [optionInfo.key]: false,
    }),
    {} as officeOptions, // 초기 값은 빈 officeOptions 객체로 설정
  );

  const [selectedOptions, setSelectedOptions] = React.useState<{ [key: string]: boolean }>(initialOptions);
  const handleCheckboxChange = (key: string) => {
    const updatedOptions = {
      ...selectedOptions,
      [key]: !selectedOptions[key],
    };
    onOptionChange(updatedOptions);
    setSelectedOptions(updatedOptions);
  };

  return (
    <div className="options border rounded-xl p-4">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {optionInfos.map((optionInfo, index) => (
          <div key={index} className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
              <input
                type="checkbox"
                checked={selectedOptions[optionInfo.key]}
                onChange={() => handleCheckboxChange(optionInfo.key)}
                className="checkbox checkbox-xs checkbox-primary"
              />
              <span className="label-text">{optionInfo.name}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
