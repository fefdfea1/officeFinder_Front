import { Button } from "./Button";
import { PiBellRingingBold } from "react-icons/pi";
import { VscCircleFilled } from "react-icons/vsc";
import { useQuery } from "react-query";
import { fetchCustomerAlamData } from "../../fetch/get/customer";
import { fetchAgnetAlamData } from "../../fetch/get/agent";
import { useEffect } from "react";
import { useMyContext } from "../../contexts/MyContext";

type propsType = {
  clickMoreButton: () => void;
};

export type alamDataType = {
  content: {
    content: string;
    createdAt: string;
    title: string;
  }[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number;
  totalPages: number;
};

export const NavRingCompo = (props: propsType) => {
  const { isAlamData, setAlamData } = useMyContext();
  const getUserType = window.localStorage.getItem("userType");
  const { data } = useQuery(
    ["getAlamData", isAlamData],
    getUserType === "customer" && getUserType !== undefined ? fetchCustomerAlamData : fetchAgnetAlamData,
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  );

  useEffect(() => {
    if (data) {
      setAlamData(data);
    }
  }, [data]);

  return (
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
        {isAlamData &&
          isAlamData.content.map((item, index) => {
            return (
              <li className="p-0 text-left" key={index}>
                <a>{item.content}</a>
              </li>
            );
          })}
        <div className="w-full">
          <Button style={"btn btn-outline btn-primary w-full text-base"} clickHandler={props.clickMoreButton}>
            <p>더보기+</p>
          </Button>
        </div>
      </ul>
    </div>
  );
};
