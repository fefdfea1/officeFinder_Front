import React from 'react';

import { Input } from '../components/common/Input'
import { Button } from '../components/common/Button';
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { useQuery,useMutation } from 'react-query';

export const Login = () => {

  const navigate = useNavigate()
  const clickLoginButton = () => {
    navigate('/');
  };
  const postLogin = useMutation(
  'login',
    () => fetch('api/customers/login',{
      method:'POST'
    }),
    {
    onSuccess:(res)=>{
      console.log('RES',res)
    },
    onError:(error)=>{
console.log(error)
    }
    }
  );
  console.log({useMutation})


  return (
  <>
    <div className="shadow-md rounded-xl p-8 w-[400px] h-[500px] mx-auto my-4 flex items-center">
      <div className=''>
      <Input width=''
          inputLabel={'이메일'} placeholder={'Email'} type={'email'} value={''} />
        <Input 
            width=''
            inputLabel={'비밀번호'} placeholder={'Password'} type={'password'} value={''} />
          <AiOutlineEyeInvisible className="absolute left-10 text-xl mx-4" />
        <Button clickHandler={clickLoginButton} style={"btn btn-outline btn-primary w-80 m-2 text-base"} text={'로그인'}/>

      </div>

    </div>
  </>
  );

}
