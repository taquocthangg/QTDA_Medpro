
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";
import './css/main.css'
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Header from './componnets/Header/Header';
import Fooder from './componnets/Footer/Fooder';
import PhongKham from './pages/PhongKham';
import GioiThieu from './pages/GioiThieu';
import HuongDan from './pages/HuongDan';
import QuyTrinh from './pages/QuyTrinh';
import TinTuc from "./pages/TinTuc.jsx";
import { ThacMac } from "./pages/ThacMac.jsx";
import LienHe from "./pages/LienHe.jsx";
import Err404 from "./pages/Err404.jsx";
import LoginPhongKham from './componnets/FromDangNhap/LoginPhongKham.jsx'
import DangKy from "./componnets/FromDangKy/DangKy";
import ScrollToTop from "./componnets/ScrollToTop.js";
import BackToTop from "./componnets/BackToTop.js";
import Choose from "./componnets/ChonBenhVien/Choose.jsx";
import ChonChucNang from "./componnets/ChonHinhThuc/ChonChucNang.jsx";
import PropagateLoader from "react-spinners/PropagateLoader";
import Admin from "./Admin/Admin.jsx";
import QuanLyBV from "./Admin/QuanLyBV.jsx";
import QuanLyUsert from "./Admin/QuanLyUsert.jsx";
import QuanLyNews from "./Admin/QuanLyNews.jsx";
import DangKi from "./pages/DangKi.jsx";
import QuenMatKhau from "./pages/Quen_Mat_Khau.jsx";
import Update_User_Detail from "./Admin/Update_User_Detail.jsx";
import Insert_User_Detail from "./Admin/Insert_User_Detail.jsx";
import Update_Patent_Detail from "./Admin/Update_Patent_Detail";
import Insert_Patent_Detail from "./Admin/Insert_Patent_Detail";
import BenhVien from "./pages/Benh_vien.jsx";
import User from "./pages/User.jsx";
import Them_Moi_Chuyen_Khoa from "./pages/Them_Moi_Chuyen_Khoa.jsx";
import Insert_Doctor from "./pages/Insert_Doctor.jsx";
import Update_doctor from "./pages/Update_doctor.jsx";
import Sua_Chuyen_Khoa from "./pages/Sua_chuyen_khoa.jsx"

import BacSi from "./Admin/Bac_Si/BacSi.jsx"
import DatKham from "./Admin/Bac_Si/DatKham.jsx"
import BenhAn from "./Admin/Bac_Si/BenhAn.jsx"
import Search_Chuyen_Khoa from "./User/Search_Chuyen_Khoa.jsx";
import Search_Doctor from "./User/Search_Doctor.jsx";
import Select_day from "./User/Select_day.jsx";
import { isAuthenticated, logout, handleAuthentication } from './pages/auth';


function App() {
  
  return (
    <div className="App">
      {
        <Router>
          <Header />
          <BackToTop />
          <ScrollToTop >
            <Routes>
              <Route path='QuanLyBV' element={<QuanLyBV />} />
              <Route path='QuanLyNews' element={<QuanLyNews />} />
              <Route path='QuanLyUsert' element={<QuanLyUsert />} />
              <Route path='/admin/:getId/Insert_Patent_Detail' element={<Insert_Patent_Detail />} />
              <Route path='admin/Update_User_Detail/:getId' element={<Update_User_Detail />} />
              <Route path='Insert_User_Detail' element={<Insert_User_Detail />} />
              <Route path='admin/Update_Patent_Detail/:getId' element={<Update_Patent_Detail />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/' element={<Home />} />
              <Route path='dang-nhap' element={<LoginPhongKham />} />
              <Route path='login' element={<Login />} />
              <Route path='dang-ky' element={<DangKy />} />
              <Route path='gioi-thieu' element={<GioiThieu />} />
              <Route path='quy-trinh' element={<QuyTrinh />} />
              <Route path='huong-dan' element={<HuongDan />} />
              <Route path='tin-tuc' element={<TinTuc />} />
              <Route path='thac-mac' element={<ThacMac />} />
              <Route path='lien-he' element={<LienHe />} />
              <Route path='phong-kham' element={<PhongKham />} />
              <Route path='chon-benh-vien' element={<Choose />} />
              <Route path='chon-benh-vien/chon-hinh-thuc' element={<ChonChucNang />} />
              <Route path='dang-ki' element={<DangKi />} />
              <Route path='quen-mat-khau' element={<QuenMatKhau />} />
              <Route path='benh-vien/:getId' element={<BenhVien />} />
              <Route path='user' element={<User />} />

              <Route path='benh-vien/:getId/them-moi-chuyen-khoa/:getId' element={<Them_Moi_Chuyen_Khoa />} />
              <Route path='benh-vien/:getId/thembacsi/:getId' element={<Insert_Doctor />} />
              <Route path='/update_Chuyen_Khoa/:getId' element={<Sua_Chuyen_Khoa />} />
              <Route path='/updateUser/:getId' element={<Update_doctor />} />
              <Route path='/*' element={<Err404 />} />


              <Route path='bac-si/:getId' element={<BacSi />} />
              <Route path='DatKham' element={<DatKham />} />
              <Route path='BenhAn' element={<BenhAn />} />

              {/* Đặt lịch */}
              <Route path='/chon-benh-vien' element={<Choose />} />
              <Route path='/chon-benh-vien/chon-chuyen-khoa/:getId' element={<Search_Chuyen_Khoa />} />
              <Route path='/chon-benh-vien/chon-chuyen-khoa/:getId/chon-bac-si/:getId' element={<Search_Doctor />} />
              <Route path='/chon-benh-vien/chon-chuyen-khoa/:getId/chon-bac-si/:getId/chon-lich/:getId' element={<Select_day />} />
              <Route />
            </Routes>
          </ScrollToTop>
          <Fooder />
        </Router>
      }
    </div>
  );
}

export default App;
