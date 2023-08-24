
interface ButtonProps {
  text: string,
  style: string,
  clickHandler?: () => void,
}

export const Button = (props: ButtonProps) => {
  return (
  <>
  <div className='p-4'>
    <button onClick={props.clickHandler} className={props.style}>{props.text}</button>
    {/*className="btn btn-outline btn-primary w-72 m-2 text-base" 기본 스타일 입니다. */}
  </div>
  </>
  )

}
