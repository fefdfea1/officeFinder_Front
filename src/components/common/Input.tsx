import React from 'react';

interface InputProps {
  placeholder: string,
  inputTitle: string,
  warning: string,
}

export const Input = (props: InputProps) => {
  return (
  <>
  <div className='px-4'>
    <p className='text-sm pl-2 mt-0'>{props.inputTitle}</p>
    <input type="text" placeholder={props.placeholder} className="relative input input-bordered input-primary w-full max-w-xs m-2" />
    {/* <p className='text-sm pl-2 text-error'>{props.warning}</p> */}
  </div>
  </>
  );
}
