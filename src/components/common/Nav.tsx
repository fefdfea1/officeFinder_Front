import { CgProfile } from 'react-icons/cg';

export const Nav = () => {
  return (
    <>
      <div className="navbar bg-base-100 p-5">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl">Office-Finder</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn bg-white border-none">
              <div className="indicator">
                <span className="mt-1 text-sm" style={{ width: 50 }}>
                  10,000원
                </span>
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
                <CgProfile style={{ width: 28, height: 28 }} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
        </div>
      </div>
    </>
  );
};
