import axiosClient from "api/axiosClient";
import Loading from "component/Loading";
import { AppContext } from "context/context";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { getDanhSachPhongVe } from "redux/action/BookingAction";
import ThongTinRap from "../component/ThongTinRap";
import TotalGhe from "../component/TotalGhe";
import { motion } from "framer-motion";
import { containerAnimation } from "animation";
function DatGhe() {
  const { dataBooking, gheDaDat, loadingBooking } = useSelector(
    (state) => state.BookingReducer
  );
  const dispatch = useDispatch();
  const { showModal } = useContext(AppContext);
  const history = useHistory();

  const user = localStorage.getItem("UserAccount")
    ? JSON.parse(localStorage.getItem("UserAccount"))
    : null;
  const maLichChieu = localStorage.getItem("maLichChieu");
  useEffect(() => {
    if (!dataBooking) {
      axiosClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${user.accessToken}`;
      dispatch(getDanhSachPhongVe(maLichChieu));
    }
  }, []);
  if (loadingBooking) {
    return <Loading text="Fetching data" />;
  }
  if (!user || !maLichChieu) {
    return <Redirect to="/" />;
  }
  const { thongTinPhim, danhSachGhe } = dataBooking;
  return (
    <React.Fragment>
      {!loadingBooking && (
        <motion.div
          className="container"
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h3>Step 2: Choose seats</h3>
          <div>
            <ThongTinRap thongTinPhim={thongTinPhim} />
            <TotalGhe danhSachGhe={danhSachGhe} gheDaDat={gheDaDat} />
          </div>
          <button
            className="btnCheckout"
            onClick={() => {
              if (gheDaDat.length < 1) {
                showModal("Xin hãy hoàn thành chọn ghế", "normal");
                return;
              }
              history.push("/checkout/thanhtoan");
            }}
          >
            Next
          </button>
        </motion.div>
      )}
    </React.Fragment>
  );
}

export default DatGhe;
