import { AppContext } from "context/context";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { postDatVeAction, thanhToan } from "redux/action/BookingAction";
import { motion } from "framer-motion";
import { containerAnimation } from "animation";

function ThanhToan() {
  const history = useHistory();
  const { comboChoose, gheDaDat, dataBooking } = useSelector(
    (state) => state.BookingReducer
  );
  const dispatch = useDispatch();
  const { showModal } = useContext(AppContext);
  const { thongTinPhim } = dataBooking;
  const comboLocal = localStorage.getItem("combo")
    ? JSON.parse(localStorage.getItem("combo"))
    : 0;
  //console.log(comboLocal);
  const giaTienBongNuoc = comboLocal ? comboLocal.giaTien : 0;

  const tongGiaVe = gheDaDat.reduce((total, item) => {
    return total + item.giaVe;
  }, 0);

  const user = localStorage.getItem("UserAccount")
    ? JSON.parse(localStorage.getItem("UserAccount"))
    : null;
  useEffect(() => {
    return () => {
      dispatch(thanhToan());
    };
  }, []);
  if (!dataBooking || gheDaDat.length < 1) {
    return <Redirect to="/checkout/combo" />;
  }
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <motion.div
        className="container"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h3>Step 3: Payment</h3>
        <div className="cartContent">
          <div className="cart__item">
            <img src={thongTinPhim.hinhAnh} alt={thongTinPhim.tenPhim} />
            <div>
              <h4>{thongTinPhim.tenPhim}</h4>
              <p>
                Ghế :{" "}
                {gheDaDat.map((item) => (
                  <span key={item.maGhe}>{item.tenGhe},</span>
                ))}
              </p>
            </div>
            <div>
              <p>{tongGiaVe}đ</p>
            </div>
          </div>
          {comboLocal && (
            <div className="cart__item">
              <img src={comboLocal.hinhAnh} alt={comboLocal.name} />
              <div>
                <h4>{comboLocal.label}</h4>
                <p>Số lượng: 1</p>
              </div>
              <p>{comboLocal.giaTien}đ</p>
            </div>
          )}
          <div className="totalCart">
            <hr />
            <h4>
              Total <span>{giaTienBongNuoc + tongGiaVe}đ</span>
            </h4>
          </div>
        </div>
        <button
          className="btnCheckout"
          onClick={() => {
            const obj = {
              taiKhoanNguoiDung: user.taiKhoan,
              maLichChieu: thongTinPhim.maLichChieu,
              danhSachVe: gheDaDat,
            };
            dispatch(postDatVeAction(obj, showModal, history));
          }}
        >
          Checkout
        </button>
      </motion.div>
    </React.Fragment>
  );
}

export default ThanhToan;
