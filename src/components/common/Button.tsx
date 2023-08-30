import type { ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  style: any;
  clickHandler?: () => void;
}

export const Button = ({ text, style, clickHandler, ...rest }: ButtonProps) => {
  return (
    <>
      <div className="p-4">
        <button onClick={clickHandler} className={style} {...rest}>
          {text}
        </button>
        {/*className="btn btn-outline btn-primary w-72 m-2 text-base" 기본 스타일 입니다. */}
      </div>
    </>
  );
};
