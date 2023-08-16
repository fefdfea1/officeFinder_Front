import { AiFillGithub } from 'react-icons/ai';
import { RxNotionLogo } from 'react-icons/rx';

export const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover normal-case text-xl">Office-Finder</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <AiFillGithub style={{ width: 24, height: 24 }} />
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <RxNotionLogo style={{ width: 24, height: 24 }} />
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

// : JSX.Element
