import React from 'react';
import { Input } from '../components/common/Input'
import { Button } from '../components/common/Button';
import { AiOutlineEyeInvisible } from 'react-icons/ai'

export default function Join() {
  return (
  <>
  <div className='w-80 mx-auto'>
    <Input inputTitle={'이메일'} placeholder={'Email'} warning={'이미 존재하는 계정입니다.'}/>
    <Input inputTitle={'비밀번호'} placeholder={'Password'} warning={'대문자, 소문자, 숫자를 포함해야합니다.'}/>
      <AiOutlineEyeInvisible className="absolute top-[225px] right-[300px] text-xl mx-4" />
    <Input inputTitle={'비밀번호 확인'} placeholder={'Password'} warning={'비밀번호가 일치하지 않습니다.'}/>
    <Button style={'btn btn-outline btn-primary w-72 m-2 text-sm'} text={'회원가입하기'}/>

  </div>

  </>);
}
