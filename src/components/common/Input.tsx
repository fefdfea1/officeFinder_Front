
interface InputProps {
  width: string,
  placeholder: string,
  inputLabel: string,
  warning: '',
  type: string,
}

export const Input = (props: InputProps) => {

  return (
  <>
  <div className='px-4'>
    <label className='text-base pl-2 mt-4'>{props.inputLabel}</label>
    <input type={props.type} placeholder={props.placeholder} className="{props.width} input input-bordered input-primary w-full max-w-xs m-2 placeholder:text-base" />
    {/* <p className='text-sm pl-2 mt-0 text-error'>{props.warning}</p> */}
  </div>
  </>
  );
}
