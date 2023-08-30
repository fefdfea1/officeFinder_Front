import { AiFillGithub } from 'react-icons/ai'
import { RxNotionLogo } from 'react-icons/rx'
import { BsYoutube } from 'react-icons/bs'

export const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover normal-case text-xl">officeFinder</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href='https://github.com/fefdfea1/officeFinder_Front'>
              <AiFillGithub className="w-6 h-6" />
            </a>
            <a>
              <BsYoutube className="w-6 h-6" />
            </a>
            <a>
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
