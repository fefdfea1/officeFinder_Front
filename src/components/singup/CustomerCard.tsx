import { useNavigate } from "react-router-dom";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
// import { AiOutlineEyeInvisible } from "react-icons/ai";


export const CustomerCard = () => {
  const navigate = useNavigate()

  const clickSignupButton = () => {
    navigate('/Login');
  };

  return (
    <>
    <div className="shadow-md rounded-xl p-8 w-[400px] h-[500px] mx-auto my-4 flex items-center">
      <div className=''>
      <Input width=''
        inputTitle={'이메일'} 
        placeholder={'이메일을 입력해 주세요'} 
        warning={''} type={'email'} />
      <Input 
        width=''
        inputTitle={'비밀번호'} 
        placeholder={'10~20자리의 비밀번호를 입력해주세요'}
        warning={''} type={'password'}  />
      <Input 
        width=''
        inputTitle={'비밀번호'} 
        placeholder={'한 번 더 입력해주세요'}
        warning={''} type={'password'}  />

          {/* <AiOutlineEyeInvisible className="absolute left-10 text-xl mx-4" /> */}
        <Button clickHandler={clickSignupButton} style={"btn btn-outline btn-primary w-80 m-2 text-base"} text={'회원가입'}/>

      </div>

    </div>
    </>
  )
}