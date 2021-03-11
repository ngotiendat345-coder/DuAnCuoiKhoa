import Footer from "component/Footer";
import Header from "component/Header";
import Loading from "component/Loading";
import { loginImages } from "constant/Images";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDataChiTietPhim } from "redux/action/FilmAction";
import ChiTietLichChieu from "../component/ChiTietLichChieu";
import ChiTietThongTin from "../component/ChiTietThongTin";
import filmAPI from "api/filmAPI";
import "./style.scss";

function ChiTiet() {
  const dispatch = useDispatch();
  const { loading, currentHeThong, heThongRapChieu, data, error } = useSelector(
    (state) => state.DetailReducer
  );
  const { maPhim } = useParams();

  console.log(currentHeThong, heThongRapChieu);

  // const background = loginImages.backapp;
  useEffect(() => {
    dispatch(getDataChiTietPhim(maPhim));
  }, [maPhim]);
  if (error) {
    return (
      <>
        <Header />
        <section className="chiTietPhim">
          <div className="chiTietPhim__container text-center" >
              <h1 >Xin lỗi , phim này hiện đã ngừng chiếu</h1>
              <Link className="btn btn-success" to="/">Trở về trang chủ</Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <section className="chiTietPhim">
        <div className="chiTietPhim__container">
          <ChiTietLichChieu data={data} />
          <ChiTietThongTin />
        </div>
        <div className="chiTietPhim__overplay">
          <img src={data.hinhAnh} alt={data.tenPhim} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ChiTiet;
