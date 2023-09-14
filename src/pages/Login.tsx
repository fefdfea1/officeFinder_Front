import { Input } from "../components/common/Input";
import { Button } from "../components/common/Button";
// import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useMutation } from "react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { loginAgentApi, loginCustomerApi } from "../fetch/post/main";
import { cookies } from "../fetch/common/axiosApi";

import { usefetchSSE } from "../fetch/get/sse";
import { useMyContext } from "../contexts/MyContext";

interface LoginProps {
  email: string;
  password: string;
}
export const Login = () => {
  const navigate = useNavigate();
  const handleGoToJoin = () => {
    navigate("/Join");
  };

  const [login, setLogin] = useState<LoginProps>({
    email: "",
    password: "",
  });
  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setLogin(prev => {
      return { ...prev, [name]: value };
    });
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  const validatePassword = (password: string) => {
    const passwordRegex = /^\S{10,20}$/;
    return passwordRegex.test(password);
  };

  const [ischecked, setChecked] = useState(false);
  const { setAlamData, setSseAlertState, setSseText } = useMyContext();
  usefetchSSE(setAlamData, setSseAlertState, setSseText);

  const postLogin = useMutation("login", ischecked ? loginAgentApi : loginCustomerApi, {
    onSuccess: res => {
      ischecked ? navigate("/MyPage") : navigate("/");
      location.reload();
      const userType = res?.data?.userType;
      window.localStorage.setItem("userType", userType);
      const token = res?.data?.token;
      cookies.set("Authorization", token, { maxAge: 3600 });

      alert("환영합니다:)");
    },
    onError: (error: any) => {
      alert("이메일이나 비밀번호를 다시 확인해주세요.");
    },
  });

  const clickCheckbox = () => {
    setChecked(prev => !prev);
  };

  const clickLoginButton = () => {
    postLogin.mutate({
      email: login?.email,
      password: login?.password,
    });
  };

  return (
    <>
      <div className="shadow-md rounded-xl p-8 mx-auto my-20 flex flex-col items-center justify-center md:w-[400px] sm:w-[340px]">
        <h3 className="font-black">로그인</h3>
        <div className="pt-6 w-full flex flex-col">
          <div className="pl-6">
            <label className="label cursor-pointer justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-xs checkbox-primary" onClick={clickCheckbox} />
              <span className="label-text">임대인 회원</span>
              {/* <span className="text-sm text-info">임대인이시라면 체크해주세요. </span> */}
            </label>
          </div>
          <Input
            inputLabel={"이메일"}
            placeholder={"Email"}
            type={"email"}
            name={"email"}
            value={login.email}
            warning={login.email.trim() ? (validateEmail(login.email) ? "" : "이메일 형식이 아닙니다") : ""}
            onInputChange={handleFormData}
          />
          <Input
            inputLabel={"비밀번호"}
            placeholder={"Password"}
            type={"password"}
            name={"password"}
            value={login.password}
            warning={login.password.trim() ? (validatePassword(login.password) ? "" : "10~20자리로 입력해주세요") : ""}
            onInputChange={handleFormData}
          />
          {/* <AiOutlineEyeInvisible className="absolute left-10 text-xl mx-4" /> */}
          <Button
            clickHandler={() => clickLoginButton()}
            style={"btn btn-outline btn-primary m-2 text-base w-full"}
            // disabled={
            //   !login.email.trim() ||
            //   !login.password.trim() ||
            //   !validateEmail(login.email) ||
            //   !validatePassword(login.password)
            // }
          >
            <p>로그인</p>
          </Button>
          <hr />
          <Button style={"btn btn-outline btn-info m-2 text-base w-full"}>
            <FcGoogle className="w-5 h-5" />
            <p>구글 계정으로 로그인하기</p>
          </Button>
          <div className="mx-auto text-center">
            <a onClick={handleGoToJoin} className="text-sm mx-auto underline underline-offset-1 hover:cursor-pointer">
              아직 회원이 아니신가요? 회원가입하기
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
