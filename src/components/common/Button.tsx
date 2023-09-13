import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  style: any;
  clickHandler?: () => void;
}

export const Button = ({ children, style, clickHandler, ...rest }: ButtonProps) => {
  return (
    <>
      <div className="p-4">
        <button onClick={clickHandler} className={style} {...rest}>
          {children}
        </button>
        {/*className="btn btn-outline btn-primary w-72 m-2 text-base" 기본 스타일 입니다. */}
      </div>
    </>
  );
};
