import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { PiBellRingingBold } from 'react-icons/pi';
import { Title } from './Title';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate()

  const clickLogo = () => {
    navigate('/');
  };

  return (
  <>
  <div className="navbar bg-base-100 p-5 border-solid border-b-2 border-gray-200">
  <div className="flex-1">
    <a onClick={clickLogo} className="btn bg-white border-none hover:bg-white normal-case text-2xl text-primary">officeFinder</a>
  </div>
  <div className="flex-none">
    <div>
      <span className="text-base font-bold text-primary">customer</span>
      {/* <Title children={'일반사용자'}  /> */}
    </div>
    <div className='ml-4'>
      <span className="text-sm font-bold">닉네임자리</span>
      {/* <Title  children={'일반사용자'}  /> */}
    </div>
    <div className="dropdown dropdown-end" >
      <label tabIndex={0} className="btn bg-white border-none">
        <div className="indicator">
          <span className="mt-1 text-sm w-13">10,000원</span>
          {/* <span className="badge badge-sm indicator-item">8</span> */}

        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn bg-white border-none">
              <div className="indicator">
                <span className="mt-1 text-sm w-13">10,000원</span>
                {/* <span className="badge badge-sm indicator-item">8</span> */}
              </div>
            </label>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                {/* <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span> */}
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">충전하기</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="rounded-full">
                <CgProfile className="w-7 h-7" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 py-3 text-ms shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">프로필</a>
              </li>
              <li>
                <a>즐겨찾기</a>
              </li>
              <li>
                <a>예약내역</a>
              </li>
              <li>
                <a>로그아웃</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="rounded-full">
                <PiBellRingingBold className="w-7 h-7" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 py-3 text-ms shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">3일 후 예약한 오피스 이용이 만료됩니다.</a>
              </li>
              <li>
                <a>결제완료</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
