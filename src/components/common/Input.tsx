import React from 'react';

interface InputProps {
  width: string,
  placeholder: string,
  inputTitle: string,
  warning: string,
  type: string,
}

export const Input = (props: InputProps) => {

  return (
  <>
  <div className='px-4'>
    <p className='text-base pl-2 mt-4'>{props.inputTitle}</p>
    <input type={props.type} placeholder={props.placeholder} className="{props.width} input input-bordered input-primary w-full max-w-xs m-2 placeholder:text-base" />
    {/* <p className='text-sm pl-2 mt-0 text-error'>{props.warning}</p> */}
  </div>
  </>
  );
}
