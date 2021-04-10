import React from "react";
import { useSelector } from "react-redux";
import download from "assets/download.png";
import galaxy from "assets/rap/galaxy.jpg";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ketquaAnimation, childVariants } from "animation";
function KetQua() {
  //const kqua = localStorage.getItem("ketqua") ? JSON.parse(localStorage.getItem("ketqua")) : null;
  const { dataBooking } = useSelector((state) => state.BookingReducer);
  const location = useLocation();
  const data = location.state ? location.state.data : null;

  const { thongTinPhim } = dataBooking;
  const {
    tenCumRap,
    tenPhim,
    gioChieu,
    diaChi,
    tenRap,
    ngayChieu,
  } = thongTinPhim;
  if (!dataBooking || !data) {
    return <Redirect to="/" />;
  }
  const { danhSachVe } = data;
  return (
    <React.Fragment>
      <motion.div
        className="container"
        variants={ketquaAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h3>Step 4: Result</h3>
        <div className="ketqua">
          <h3>Chúc bạn xem phim vui vẻ</h3>
          <motion.h4 className="title" variants={childVariants}>
            <span>C16</span> {tenPhim}
          </motion.h4>
          <div className="content">
            <motion.div className="detail" variants={childVariants}>
              <div>
                <p>{tenCumRap}</p>
                <span>{diaChi}</span>
              </div>
              <div>
                <img src={galaxy} alt="logo" />
              </div>
            </motion.div>
            <motion.div className="detailRap" variants={childVariants}>
              <div>
                <h4>Ngày</h4>
                <p>{ngayChieu}</p>
              </div>
              <div>
                <h4>Giờ</h4>
                <p>{gioChieu}</p>
              </div>
              <div>
                <h4>Rạp</h4>
                <p>{tenRap}</p>
              </div>
            </motion.div>
            <motion.div className="numberGhe" variants={childVariants}>
              <h4>SỐ GHẾ</h4>
              <p>
                {danhSachVe.map((item) => {
                  return <span key={item.tenGhe}>{item.tenGhe},</span>;
                })}
              </p>
            </motion.div>
          </div>
          <motion.hr className="cardLine" variants={childVariants} />
          <motion.div className="maVe" variants={childVariants}>
            <img src={download} />
            <div className="maVeDetail">
              <span>Mã vé</span>
              <h3 className="codeVe">1615477133740</h3>
              <h3 className="warning">
                *VÉ ĐÃ MUA
                <br />
                KHÔNG THỂ ĐỔI TRẢ
              </h3>
            </div>
          </motion.div>
          <motion.div variants={childVariants}>
            <Link to="/" className="btnHome">
              Về trang chủ
            </Link>
            <p className="warning">
              Xin lưu ý, bạn không thể hủy hoặc thay đổi suất chiếu cho vé đã
              mua.
            </p>
            <div className="hotline">
              <div className="hotlineText">
                <h4>HOTLINE</h4>
                <small>Phí cuộc gọi 1000VND/phút</small>
              </div>
              <h1>1900 545 436</h1>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}

export default KetQua;
