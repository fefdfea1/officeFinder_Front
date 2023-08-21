import { Routes, Route } from 'react-router-dom';
import { Main } from '../pages/Main';
import { AddOffice } from '../pages/agent/AddOffice';
import AllReviews from '../pages/agent/AllReviews';
import { MyOffice } from '../pages/agent/MyOffice';
import SalesAnalysis from '../pages/agent/SalesAnalysis';
import BookMark from '../pages/customer/BookMark';
import MyBookings from '../pages/customer/MyBookings';
import Booking from '../pages/Booking';
import Join from '../pages/Join';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/BookMark" element={<BookMark />}></Route>
      <Route path="/AddOffice" element={<AddOffice />}></Route>
      <Route path="/AllReviews" element={<AllReviews />}></Route>
      <Route path="/MyOffice" element={<MyOffice />}></Route>
      <Route path="/SalesAnalysis" element={<SalesAnalysis />}></Route>
      <Route path="/MyBookings" element={<MyBookings />}></Route>
      <Route path="/Booking" element={<Booking />}></Route>
      <Route path="/Join" element={<Join />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Profile" element={<Profile />}></Route>
    </Routes>
  );
}
