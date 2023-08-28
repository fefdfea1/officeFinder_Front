import React from 'react';

type Options = {
  [key: string]: boolean;
};
type OptionsCheckboxProps = {
  onOptionChange: (options: Options) => void;
};

export const OptionsCheckbox: React.FC<OptionsCheckboxProps> = ({ onOptionChange }) => {
  const initialOptions: Options = {
    에어컨: false,
    카페: false,
    복사기: false,
    택배서비스: false,
    도어락: false,
    팩스: false,
    난방기: false,
    주차: false,
    '공용 라운지': false,
    '공용 주방': false,
    '개인 락커': false,
    프로젝터: false,
    화이트보드: false,
    인터넷: false,
    샤워시설: false,
    창고: false,
  };

  const [selectedOptions, setSelectedOptions] = React.useState<Options>(initialOptions);
  const handleCheckboxChange = (option: string) => {
    const updatedOptions = {
      ...selectedOptions,
      [option]: !selectedOptions[option],
    };
    onOptionChange(updatedOptions);
    setSelectedOptions(updatedOptions);
  };

  const optionKeys = Object.keys(initialOptions);

  return (
    <div className="options border rounded-xl p-4">
      <div className="grid grid-cols-4">
        {optionKeys.map((option, index) => (
          <div key={index} className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
              <input
                type="checkbox"
                checked={selectedOptions[option]}
                onChange={() => handleCheckboxChange(option)}
                className="checkbox checkbox-xs checkbox-primary"
              />
              <span className="label-text">{option}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
