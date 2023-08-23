interface ButtonProps {
  text: string;
  style: string;
  clickHandler: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <>
      <div className="p-4">
        <button className={props.style} onClick={props.clickHandler}>
          {props.text}
        </button>
        {/* <button className="btn btn-primary w-72 m-2 text-sm">{props.text}</button> */}
      </div>
    </>
  );
};
