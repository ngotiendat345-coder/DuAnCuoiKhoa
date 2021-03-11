import React from "react";

function CheckOutLeft({ thongTinPhim }) {
  const { hinhAnh, tenPhim ,ngayChieu} = thongTinPhim;
  //tenPhimconsole.log(props)
  return (
    <div
      className="checkOut__left"
      style={{
        background: `linear-gradient(to top, rgba(0,0,0,0.3),rgba(0,0,0,0.7)),url(${hinhAnh})`,
        backgroundSize: "cover",
        backgroundPosition:'center center'
      }}
    >
      <div className="checkOut__left--detail">
        <span> {ngayChieu}</span>
        <h4>
          <span>C16</span> {tenPhim}
        </h4>
        <p>120 phút - TIX - IMDb 0 - 2D/Digital</p>
      </div>
    </div>
  );
}

export default CheckOutLeft;
