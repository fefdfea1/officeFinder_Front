import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { getCustomerApi, getAgencyApi } from "../../fetch/get/main";
import { useQuery } from "react-query";
import { NavRingCompo } from "./NavRingCompo";
import { cookies } from "../../fetch/common/axiosApi";

const customerUrl = ["/MyPage", "/BookMark", "/MyBookings"];
const agentUrl = ["/MyPage", "MyOffice", "SalesAnalysis"];
const customerItems = ["프로필", "즐겨찾기", "예약내역", "로그아웃"];
const agentItems = ["프로필", "나의 오피스", "매출 보기", "로그아웃"];

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
  const clickMyPage = () => {
    navigate("/MyPage");
  };

  const clickLogout = () => {
    cookies.remove("Authorization", { path: "/" });
    window.localStorage.clear();
    // expires 24시간&로그아웃 newdate
  };

  const userType = window.localStorage.getItem("userType");

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
                  {customerItems.map((item, index) => {
                    return (
                      <li>
                        <Link
                          to={`${customerUrl[index] !== undefined ? customerUrl[index] : "/"}`}
                          onClick={customerUrl[index] === undefined ? clickLogout : () => {}}
                        >
                          {item}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 py-3 text-ms shadow bg-base-100 rounded-box w-48"
                >
                  {agentItems.map((item, index) => {
                    return (
                      <li>
                        <Link
                          to={`${agentUrl[index] !== undefined ? item : "/"}`}
                          onClick={agentItems[index] ? clickLogout : () => {}}
                        >
                          {item}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <NavRingCompo clickMoreButton={clickMoreButton} />
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
