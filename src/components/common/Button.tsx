import React from 'react';

interface ButtonProps {
  text: string,
  style: string,
}

export const Button = (props: ButtonProps) => {
  return (
  <>
  <div className='p-4'>
    <button className={props.style}>{props.text}</button>
    {/* <button className="btn btn-primary w-72 m-2 text-sm">{props.text}</button> */}
  </div>
  </>
  )
}
