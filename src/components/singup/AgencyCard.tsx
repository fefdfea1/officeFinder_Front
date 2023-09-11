import { useState } from "react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { useMutation } from "react-query";
// import { getAgencyApi } from "../../fetch/get/main";
import { signupAgencyApi } from "../../fetch/post/main";
import { FcGoogle } from "react-icons/fc";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import { AiOutlineEyeInvisible } from "react-icons/ai";

interface AgencyCardProps {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  businessNumber: string;
}

export const AgencyCard = ({ clickBack }: { clickBack: (step: number, key: string) => void }) => {
  // const { data } = useQuery("data", getAgencyApi);
  const navigate = useNavigate();
  const postSignup = useMutation("signUP", signupAgencyApi, {
    onSuccess: (res: any) => {
      alert("회원가입이 완료되었습니다:)");
      navigate("/Login");
      console.log("RES", res);
    },
    onError: (error: any) => {
      alert("이미 가입된 정보입니다.");
      console.log(error);
    },
  });
  // console.log({ data });

  const [signup, setSignup] = useState<AgencyCardProps>({
    businessNumber: "",
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  });

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    console.log({ name, value });
    setSignup(prev => {
      return { ...prev, [name]: value };
    });
  };

  const clickSignupButton = () => {
    postSignup.mutate({
      businessNumber: signup?.businessNumber,
      email: signup?.email,
      name: signup?.email,
      password: signup?.password,
    });
  };
  const validateName = (name: string) => {
    const nameRegex = /^\S{2,20}$/;
    return nameRegex.test(name);
  };
  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  const validatePassword = (password: string) => {
    const passwordRegex = /^\S{10,20}$/;
    return passwordRegex.test(password);
  };
  const validateBusinessNumber = (businessNumber: string) => {
    const businessNumberRegex = /^\d{10}$/;
    return businessNumberRegex.test(businessNumber);
  };

  return (
    <>
      <div className="shadow-md rounded-xl p-8  mx-auto mt-20 flex flex-col items-center md:w-[400px] min-h-[600px] sm:w-[340px]">
        <h3 className="font-black">임대인 회원가입</h3>
        <div className="pt-6 w-full">
          <Input
            inputLabel={"닉네임"}
            placeholder={"닉네임을 입력해주세요"}
            warning={signup.name.trim() ? (validateName(signup.name) ? "" : "두 글자 이상 작성해주세요") : ""}
            type={"text"}
            value={signup.name}
            name={"name"}
            onInputChange={handleFormData}
          />

          <Input
            inputLabel={"이메일"}
            placeholder={"이메일을 입력해 주세요"}
            warning={signup.email.trim() ? (validateEmail(signup.email) ? "" : "이메일 형식이 아닙니다") : ""}
            type={"email"}
            value={signup.email}
            name={"email"}
            onInputChange={handleFormData}
          />
          <Input
            inputLabel={"비밀번호"}
            placeholder={"10~20자리의 비밀번호를 입력해주세요"}
            warning={
              signup.password.trim() ? (validatePassword(signup.password) ? "" : "10~20자리로 입력해주세요") : ""
            }
            type={"password"}
            value={signup.password}
            name={"password"}
            onInputChange={handleFormData}
          />
          {/* <EyeIcon /> */}

          <Input
            value={signup.passwordConfirm}
            name={"passwordConfirm"}
            inputLabel={"비밀번호 확인"}
            placeholder={"한 번 더 입력해주세요"}
            warning={
              signup.passwordConfirm.trim()
                ? signup.password === signup.passwordConfirm
                  ? ""
                  : "비밀번호가 일치하지 않습니다"
                : ""
            }
            type={"password"}
            onInputChange={handleFormData}
          />
          <Input
            value={signup.businessNumber}
            name={"businessNumber"}
            inputLabel={"사업자 등록 번호"}
            placeholder={"사업자 등록번호 10자리를 입력해주세요"}
            warning={
              signup.businessNumber.trim()
                ? validateBusinessNumber(signup.businessNumber)
                  ? ""
                  : "10자리로 입력해주세요"
                : ""
            }
            type={"text"}
            onInputChange={handleFormData}
          />

          <Button
            clickHandler={() => clickSignupButton()}
            style={"btn btn-outline btn-primary m-2 text-base w-full"}
            // disabled={
            //   !validateName(signup.name) ||
            //   !validateEmail(signup.email) ||
            //   !validatePassword(signup.password) ||
            //   signup.password !== signup.passwordConfirm ||
            //   !validateBusinessNumber(signup.businessNumber)
            // }
          >
            <p>회원가입</p>
          </Button>
          <hr />
          <Button style={"btn btn-outline btn-info m-2 text-base w-full"}>
            <FcGoogle className="w-5 h-5" />
            <p>구글 계정으로 가입하기</p>
          </Button>
          <Button clickHandler={() => clickBack(0, "")} style={"btn btn-outline btn-primary m-2 text-base w-full"}>
            <p>가입 유형 선택하기</p>
            <BsArrowCounterclockwise className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
};
