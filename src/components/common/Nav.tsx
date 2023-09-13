import { VscCircleFilled } from "react-icons/vsc";
import { PiBellRingingBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
// import { useMutation, useQuery } from "react-query";
import { getCustomerApi, getAgencyApi } from "../../fetch/get/main";
import { useQuery } from "react-query";
import { cookies } from "../../fetch/common/axiosApi";


export const Nav = () => {
  const navigate = useNavigate();
  const clickLogo = () => {
    navigate("/");
  };
  const clickLogin = () => {
    navigate("/Login");
  };
  const clickMoreButton = () => {
    navigate("/Noti");
  };
  const clickBookmark = () => {
    navigate("/BookMark");
  };
  const clickMyBookings = () => {
    navigate("/MyBookings");
  };
  const clickMyPage = () => {
    navigate("/MyPage");
  };
  const clickMyOffice = () => {
    navigate("/MyOffice");
  };
  const clickAddOffice = () => {
    navigate("/AddOffice");
  };
  const clickSales = () => {
    navigate("/SalesAnalysis");
  };

  const clickLogout = () => {
    navigate("/");
    cookies.remove("Authorization", { path: "/" });
    window.localStorage.clear();
    // expires 24시간&로그아웃 newdate
  };

  const userType = window.localStorage.getItem("userType");
  console.log(userType);
  const { data } = useQuery("getUsertypeApi", userType === "customer" ? getCustomerApi : getAgencyApi, {
    enabled: Boolean(userType),
  });
  return (
    <>
      <div className="navbar bg-base-100 border-solid border-b-2 border-gray-200 p-5 sm:p-2 md:p-3 lg:p-5">
        <div className="flex-1">
          <a onClick={clickLogo} className="btn bg-white border-none hover:bg-white normal-case text-2xl text-primary">
            officeFinder
          </a>
        </div>
        {Boolean(userType) ? (
          <div className="flex-none">
            <div className="m-3">
              <span className="text-base font-bold text-primary lg:inline md:hidden sm:hidden">{userType}</span>
            </div>
            <div className="m-3">
              <span className="text-sm font-bold md:inline sm:hidden">{data?.name}</span>
            </div>
            <div className="dropdown dropdown-end z-20">
              <label tabIndex={0} className="btn bg-white border-none">
                <div className="indicator">
                  <span className="mt-1 text-sm w-13 md:inline sm:hidden">{data?.point}원</span>
                </div>
              </label>
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <div className="card-actions ">
                    <button className="btn btn-primary btn-block" onClick={clickMyPage}>
                      충전하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end z-20">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="rounded-full w-9 h-9">
                  {data?.profileImagePath === "None" ? (
                    <img src={`/officeImg/noProfile.png`} />
                  ) : (
                    <img src={data?.profileImagePath} />
                  )}
                </div>
              </label>
              {userType === "customer" ? (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 py-3 text-ms shadow bg-base-100 rounded-box w-48"
                >
                  <li>
                    <a onClick={clickMyPage} className="justify-between">
                      프로필
                    </a>
                  </li>
                  <li>
                    <a onClick={clickBookmark}>즐겨찾기</a>
                  </li>
                  <li>
                    <a onClick={clickMyBookings}>예약내역</a>
                  </li>
                  <li>
                    <a onClick={clickLogout}>로그아웃</a>
                  </li>
                </ul>
              ) : (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 py-3 text-ms shadow bg-base-100 rounded-box w-48"
                >
                  <li>
                    <a onClick={clickMyPage} className="justify-between">
                      프로필
                    </a>
                  </li>
                  <li>
                    <a onClick={clickMyOffice}>나의 오피스</a>
                  </li>
                  <li>
                    <a onClick={clickAddOffice}>오피스 등록</a>
                  </li>
                  <li>
                    <a onClick={clickSales}>매출 보기</a>
                  </li>
                  <li>
                    <a onClick={clickLogout}>로그아웃</a>
                  </li>
                </ul>
              )}
            </div>
            <div className="dropdown dropdown-end mx-auto z-20">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="rounded-full">
                  <PiBellRingingBold className="w-7 h-7" />
                  <VscCircleFilled className="absolute text-primary top-[0] right-[0] text-xl" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 py-3 text-ms shadow bg-base-100 rounded-box w-48"
              >
                <li className="p-0 text-left">
                  <a>3일 후 예약한 오피스의 이용 기간이 만료됩니다.</a>
                </li>
                <li>
                  <a>결제가 완료되었습니다.</a>
                </li>
                <li>
                  <a>예약이 거절되었습니다. </a>
                </li>
                <div className="w-full">
                  <Button style={"btn btn-outline btn-primary w-full text-base"} clickHandler={clickMoreButton}>
                    <p>더보기+</p>
                  </Button>
                </div>
              </ul>
            </div>
          </div>
        ) : (
          <Button style={undefined} onClick={clickLogin}>
            <p>로그인</p>
          </Button>
        )}
      </div>
    </>
  );
};
