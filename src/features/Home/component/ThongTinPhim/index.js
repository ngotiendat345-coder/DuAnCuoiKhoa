import React from "react";
import star from "assets/star1.png";
import halfstar from "assets/halfstar.png";
import DrawSvg from "../DrawSvg";
import { weekday, month } from "utils/helper";
function ThongTinPhim({ data }) {
  const { hinhAnh, ngayKhoiChieu, danhGia, tenPhim, moTa } = data;
  const tempDanhGia = danhGia > 10 ? 10 : danhGia;
  const d = new Date(ngayKhoiChieu);
  //  weekday
  return (
    <article className="lichChieu__container">
      <div className="imgContainer">
        <img src={hinhAnh} alt={tenPhim} />
      </div>
      <div className="detailLichChieu">
        <div className="col-lg-7 col-md-12">
          <span className="ngayPhatHanh">
            {weekday[d.getDay()]} ngày {d.getDate()} {month[d.getMonth()]} năm
            {d.getFullYear()}
          </span>
          <h3 className="text-capitalize">
            <span>C16</span>
            {tenPhim}
          </h3>
          <span>128 phút - 0 IMDb - 2D/Digital</span>
          <p className="moTa">{moTa}</p>
        </div>
        {/* <div className="col-lg-5 circleCol">
          <div className="circle">
            <h4>{tempDanhGia}</h4>
            <DrawSvg tempDanhGia={tempDanhGia} />
          </div>
          <div className="listStar">
            {Array.from({ length: Math.ceil(tempDanhGia / 2) }, (_, index) => {
              let tempIndex = index + 1;
              return (
                <img
                  src={tempIndex <= tempDanhGia / 2 ? star : halfstar}
                  alt="star"
                  key={index}
                />
              );
            })}
          </div>
          <p className="text-center text-light mt-2">114 người đánh giá</p>
        </div> */}
      </div>
    </article>
  );
}

export default ThongTinPhim;
