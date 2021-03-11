import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import moment from "moment";
import swal from "sweetalert";
import { line } from "constant/Images";

function ChiTietLichChieu({ data }) {
    const outline = useRef(null);
  const { hinhAnh, ngayKhoiChieu, danhGia, tenPhim } = data;
  const newMoment = moment(ngayKhoiChieu).format("DD-MM-YYYY");
  const tempDanhGia = danhGia > 10 ? 10 : danhGia;
  
  function handleDraw(){
    let length = outline.current.getTotalLength();
    outline.current.style.strokeDasharray = length;
    outline.current.style.strokeDashoffset = length;
    let draw = (tempDanhGia/10)*length;
    outline.current.style.strokeDashoffset = length - draw;
  }
  useEffect(()=>{
    handleDraw();
  },[])
  return (
    <article className="lichChieu__container">
      <div className="imgContainer">
        <img src={hinhAnh} alt={tenPhim} />
      </div>
      <div className="detailLichChieu">
        <div className="col-lg-7 col-md-12">
          <span className="ngayPhatHanh">{newMoment}</span>
          <h3 className="text-capitalize">
            <span>C16</span>
            {tenPhim}
          </h3>
          <p>128 phút - 0 IMDb - 2D/Digital</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              swal("Xin hãy chọn lịch chiếu ở bên dưới!");
            }}
          >
            Mua vé
          </button>
        </div>
        <div className="col-lg-5 circleCol">
          <div className="circle">
          <h4>{tempDanhGia}</h4>
            <div className="player-container">
            <svg
                className="track-outline"
                width={150}
                height={150}
                viewBox="0 0 453 453"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="226.5"
                  cy="226.5"
                  r="216.5"
                  stroke="white"
                  strokeWidth={20}
                />
              </svg>
              <svg
                className="moving-outline"
                width={150}
                height={150}
                viewBox="0 0 453 453"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="226.5"
                  cy="226.5"
                  r="216.5"
                  stroke="#018EBA"
                  strokeWidth={20}
                  ref={outline}
                />
              </svg>
            </div>
          </div>
          <div className="listStar">
          
            {Array.from({ length: Math.ceil(tempDanhGia / 2) }, (_, index) => {
              let tempIndex = index + 1;
              return (
                <img
                  src={tempIndex <= tempDanhGia / 2 ? line.star : line.starHalf}
                  alt="star"
                  key={index}
                />
              );
            })}
          </div>
          <p className="text-center text-light mt-2">114 người đánh giá</p>
        </div>
      </div>
    </article>
  );
}

export default ChiTietLichChieu;
