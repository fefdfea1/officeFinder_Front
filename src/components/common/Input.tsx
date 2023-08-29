interface InputProps {

  width?: string;
  placeholder?: string;
  inputLabel?: string;
  inputLabelPosition?: string;
  warning?: string;
  type?: string;
  value?: string;
  name?: string;
  onInputChange?: any;

}


export const Input = (props: InputProps) => {
  const {
    onInputChange,
    width = "w-full",
    placeholder = "",
    inputLabel = "",
    inputLabelPosition = "",
    warning = "",
    type = "text",
    value = "",
  } = props;

  return (
    <>
      <div className="flex flex-col px-4">
        <label className={`text-base pl-2 mt-4 ${inputLabelPosition}`}>{inputLabel}</label>
        <input
          value={value}
          name={name}
          type={type}
          onChange={onInputChange}
          placeholder={placeholder}
          className={`input input-bordered input-primary max-w-sm m-2 placeholder:text-base ${width}`}
        />
        <p className="text-sm pl-2 mt-0 text-error">{warning}</p>
      </div>
    </>
  );
};
