import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { getDanhSachPhongVe, requestDatVe } from "redux/action/BookingAction";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Payment from "./component/Payment";
import ThongTinRap from "./component/ThongTinRap";
import TotalGhe from "./component/TotalGhe";
import NotFound from "component/NotFound";
import "./style.scss";
import Loading from "component/Loading";
import CheckOutLeft from "./component/CheckOutLeft";
import CheckOutRight from "./component/CheckOutRight";
import swal from "sweetalert";

function BookTicket() {
  const [datGhe, setDatGhe] = useState([]);
  const { maLichChieu } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const {  thongTinPhim, danhSachGhe, loading, checkOut ,} = useSelector(
    (state) => state.BookingReducer
  );
  const { detailInfo } = useSelector((state) => state.UserReducer);

  const handleDatVe = (danhsach) => {
    const { taiKhoan } = detailInfo;
    const { maLichChieu } = thongTinPhim;
    const object = {
      taiKhoanNguoiDung: taiKhoan,
      maLichChieu: maLichChieu,
      danhSachVe: danhsach,
    };
    dispatch(requestDatVe(object));
    
  };
  const handleDatGhe = (ghe) => {
    const isBooking = datGhe.find((value) => value.maGhe === ghe.maGhe)
      ? true
      : false;
    if (!isBooking) {
      const newGhe = [...datGhe, ghe];
      setDatGhe(newGhe);
      console.log(newGhe);
    } else {
      if (datGhe.length === 1) {
        setDatGhe([]);
        return;
      }
      const newDatGhe = datGhe.filter((item) => item.maGhe !== ghe.maGhe);
      setDatGhe(newDatGhe);
    }
  };
  useEffect(() => {
    const { taiKhoan } = detailInfo ? detailInfo : false;
    if (!taiKhoan) {
      swal({
        title: "Chú ý!",
        text: "Bạn phải đăng nhập mới được!",
        icon: "error",
        button: "OK!",
      });
      setTimeout(()=>{
        history.replace("/");
      },2000)
      //return;
    }
    else{
      dispatch(getDanhSachPhongVe(maLichChieu));
    }
  }, []);
 
  if (loading) {
    return <Loading />;
  }
  if (checkOut) {
    return (
      <main>
        <Header user={detailInfo} ketqua={true} />
        <section className="checkOut">
          <CheckOutLeft thongTinPhim={thongTinPhim} />
          <CheckOutRight thongTinPhim={thongTinPhim} datGhe={datGhe}/>
        </section>
      </main>
    );
  }
  return (
    <section className="datVe">
      <Col md={12} xl={9} className="datVe__content">
        <Header user={detailInfo} />
        <div style={{ padding: "2rem 3rem" }}>
          <ThongTinRap thongTinPhim={thongTinPhim} />
          <TotalGhe
            danhSachGhe={danhSachGhe}
            handleDatGhe={handleDatGhe}
            datGhe={datGhe}
          />
        </div>
        <Footer />
      </Col>
      <Col md={6} xl={3} className="datVe__payment">
        <Payment
          thongTinPhim={thongTinPhim}
          user={detailInfo}
          datGhe={datGhe}
          handleDatVe={handleDatVe}
        />
      </Col>
    </section>
  );
}

export default BookTicket;
