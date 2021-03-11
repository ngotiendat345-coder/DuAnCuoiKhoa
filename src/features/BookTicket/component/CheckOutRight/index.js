import React from "react";
import {webLogo} from 'constant/Images'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function CheckOutRight({thongTinPhim,datGhe}) {
  //console.log(props)
  const {tenCumRap,tenPhim,gioChieu,diaChi,tenRap,ngayChieu}=thongTinPhim;
  const {logo} = useSelector(state=>state.DetailReducer);
  
  return (
    <div className="checkOut__right">
      <h2>Chúc bạn xem phim vui vẻ</h2>
      <article className="checkOut__right--card">
        <h4 className="title">
          <span>C16</span> {tenPhim}
        </h4>
        <div className="detail">
          <div>
            <p>{tenCumRap}</p>
            <span>
              {diaChi}
            </span>
          </div>
          <div>
            <img
              src={logo}
              alt="logo"
            />
          </div>
        </div>
        <div className="detailRap">
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
        </div>
        <div className="numberGhe">
          <h4>SỐ GHẾ</h4>
          <p>{datGhe.map((item)=>{
            return <span key={item.tenGhe}>{item.tenGhe}</span>
          })}</p>
        </div>
        <hr className="cardLine" />
        <div className="maVe">
          <img src={webLogo.download} />
          <div className="maVeDetail">
            <span>Mã vé</span>
            <h3 className="codeVe">1615477133740</h3>
            <h3 className="warning">
              *VÉ ĐÃ MUA
              <br />
              KHÔNG THỂ ĐỔI TRẢ
            </h3>
          </div>
        </div>
      </article>
      <Link to="/" className="btnHome">Về trang chủ</Link>
      <Link to="/home/thongTin" className="btnHome">Lịch sử đặt vé</Link>
      <p className="warning">
        Xin lưu ý, bạn không thể hủy hoặc thay đổi suất chiếu cho vé đã mua.
      </p>
      <div className="hotline">
        <div className="hotlineText">
          <h4>HOTLINE</h4>
          <small>Phí cuộc gọi 1000VND/phút</small>
        </div>
        <h1>1900 545 436</h1>
      </div>
    </div>
  );
}

export default CheckOutRight;
