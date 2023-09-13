import { useState, useEffect } from "react"
import { AiFillGithub } from "react-icons/ai";
import { RxNotionLogo } from "react-icons/rx";
import { BsYoutube } from "react-icons/bs";
import { cookies } from "../../fetch/common/axiosApi";

export const Footer = () => {
  const [isLogin, setIsLogin] = useState(false)
  const token = cookies.get("Authorization");

  useEffect(() => {
    setIsLogin(!!token);
  }, [token]);

  return (
    <>
      <footer className={`footer footer-center p-10 bg-base-200 text-base-content rounded ${isLogin ? 'mt-20' : ''}`}>
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover normal-case text-xl">officeFinder</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/fefdfea1/officeFinder_Front">
              <AiFillGithub className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/">
              <BsYoutube className="w-6 h-6" />
            </a>
            <a href="https://www.notion.so/1d1353b49cb5451792acf302fffe1685">
              <RxNotionLogo className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by </p>
        </div>
      </footer>
    </>
  );
};
