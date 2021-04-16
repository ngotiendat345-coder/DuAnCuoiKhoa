import Modal from "component/Modal";
import { AppContext } from "context/context";
import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  dangKyActionCreator,
  dangNhapActionCreator,
} from "redux/action/UserAction";
import DangKy from "../component/DangKy";
import DangNhap from "../component/DangNhap";
import "./dangNhap.scss";

function CheckIn() {
  const history = useHistory();
  const { showModal } = useContext(AppContext);
  const userExisted = localStorage.getItem("UserAccount");
  const [isDangNhap, setIsDangNhap] = useState(true);
  const dispatch = useDispatch();
  const handleDangNhap = (user) => {
    dispatch(dangNhapActionCreator(user, history, "/", showModal));
  };
  const handleDangKy = (user) => {
    dispatch(dangKyActionCreator(user, showModal));
  };
  const changeDangNhap = () => {
    setIsDangNhap(!isDangNhap);
  };
  if (userExisted) {
    history.replace("/");
    return;
  }
  return (
    <main className="SignIn">
      <DangNhap
        isDangNhap={isDangNhap}
        changeDangNhap={changeDangNhap}
        handleDangNhap={handleDangNhap}
      />
      <DangKy
        isDangNhap={isDangNhap}
        changeDangNhap={changeDangNhap}
        handleDangKy={handleDangKy}
      />
    </main>
  );
}

export default CheckIn;
