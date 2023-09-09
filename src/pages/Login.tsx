import { Input } from "../components/common/Input";
import { Button } from "../components/common/Button";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useMutation } from "react-query";
import { useState } from "react";
import axios from "axios";
import { baseInstance } from "../fetch/common/axiosApi";

interface LoginProps {
  email: string;
  password: string;
}

export const Login = () => {
  const [login, setLogin] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    console.log({ name, value });
    setLogin(prev => {
      return { ...prev, [name]: value };
    });
  };

  const loginCustomerApi = async (userInfo: any) => {
    try {
      const { data } = await baseInstance.post(`api/customers/login`, userInfo);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const baseAPI = (url = "https://www.officefinder.site/", options?: any) => {
    return axios.create({ baseURL: url, ...options });
  };

  const postLogin = useMutation("login", loginCustomerApi, {
    onSuccess: () => {
      console.log(postLogin);
      alert("환영합니다:)");
    },
    onError: error => {
      alert("이메일이나 비밀번호를 다시 확인해주세요.");
      console.log(error);
    },
  });
  console.log({ useMutation });
  const clickLoginButton = () => {
    postLogin.mutate({
      email: login?.email,
      password: login?.password,
    });
  };
  console.log({ useMutation });

  return (
    <>
      <div className="shadow-md rounded-xl p-8 mx-auto my-4 flex-col items-center flex-col items-center md:w-[400px] min-h-[400px] sm:w-[340px]">
        <div>
          <Input
            inputLabel={"이메일"}
            placeholder={"Email"}
            type={"email"}
            name={"email"}
            value={login.email}
            onInputChange={handleFormData}
          />
          <Input
            inputLabel={"비밀번호"}
            placeholder={"Password"}
            type={"password"}
            name={"password"}
            value={login.password}
            onInputChange={handleFormData}
          />
          <AiOutlineEyeInvisible className="absolute left-10 text-xl mx-4" />
          <Button
            clickHandler={() => clickLoginButton()}
            style={"btn btn-outline btn-primary m-2 text-base w-full"}
            text={"로그인"}
          />
          <div>
            <a className="text-base text-sm mx-auto">아직 회원이 아니신가요? 회원가입하기</a>
          </div>
        </div>
      </div>
    </>
  );
};
