import { Routes, Route } from "react-router-dom";
import { Main } from "../pages/Main";
import { AddOffice } from "../pages/agent/AddOffice";
import { AllReviews } from "../pages/agent/AllReviews";
import { MyOffice } from "../pages/agent/MyOffice";
import { SalesAnalysis } from "../pages/agent/SalesAnalysis";
import { BookMark } from "../pages/customer/BookMark";
import { MyBookings } from "../pages/customer/MyBookings";
import { Booking } from "../pages/Booking";
import { Join } from "../pages/Join";
import { Login } from "../pages/Login";
import { AddOfficeReviews } from "../pages/customer/AddOfficeReviews";
import { MyPage } from "../pages/MyPage";
import { NotiMessage } from "../pages/NotiMessage";
import { usefetchSSE } from "./../fetch/get/sse";
import { useMyContext } from "../contexts/MyContext";

export const Router = () => {
  const { setAlamData, setSseAlertState, setSseText } = useMyContext();

  usefetchSSE(setAlamData, setSseAlertState, setSseText);

  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/BookMark" element={<BookMark />}></Route>
      <Route path="/AddOffice/:paramsId?" element={<AddOffice />}></Route>
      <Route path="/AllReviews/:paramsId/:paramsName" element={<AllReviews />}></Route>
      <Route path="/MyOffice" element={<MyOffice />}></Route>
      <Route path="/SalesAnalysis/:paramsId/:paramsName" element={<SalesAnalysis />}></Route>
      <Route path="/MyBookings" element={<MyBookings />}></Route>
      <Route path="/Booking/:id" element={<Booking />}></Route>
      <Route path="/Join" element={<Join />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/AddOfficeReviews/:id" element={<AddOfficeReviews />}></Route>
      <Route path="/MyPage" element={<MyPage />}></Route>
      <Route path="/Noti" element={<NotiMessage />}></Route>
    </Routes>
  );
};
