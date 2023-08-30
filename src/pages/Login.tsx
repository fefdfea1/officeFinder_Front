import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useMutation } from 'react-query';

export const Login = () => {
  // const clickLoginButton = () => {
  //   navigate('/');
  // };
  const postLogin = useMutation(
    'login',
    () =>
      fetch('api/customers/login', {
        method: 'POST',
      }),
    {
      onSuccess: res => {
        console.log('RES', res);
      },
      onError: error => {
        console.log(error);
      },
    },
  );
  console.log({ useMutation });

  const clickLoginButton = () => {
    postLogin.mutate();
  };

  return (
    <>
      <div className="shadow-md rounded-xl p-8 w-[400px] h-[500px] mx-auto my-4 flex items-center">
        <div className="">
          <Input width="" inputLabel={'이메일'} placeholder={'Email'} type={'email'} onInputChange={() => {}}/>
          <Input width="" inputLabel={'비밀번호'} placeholder={'Password'} type={'password'} onInputChange={() => {}}/>
          <AiOutlineEyeInvisible className="absolute left-10 text-xl mx-4" />
          <Button
            clickHandler={() => clickLoginButton()}
            style={'btn btn-outline btn-primary w-80 m-2 text-base'}
            text={'로그인'}
          />
        </div>
      </div>
    </>
  );
};
