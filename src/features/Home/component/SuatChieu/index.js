import React, { useEffect, useRef, useState } from "react";
import { getUnique, tangGio } from "utils/common";
import { Link } from "react-router-dom";

function SuatChieu({ hinhAnh, maPhim, tenPhim, lstLichChieuTheoPhim }) {
  const suatChieuRef = useRef(null);
  const tempAnimation = useRef(null);
  const [isClick, setIsClick] = useState(true);
  const ngayXem = getUnique(lstLichChieuTheoPhim, "ngayChieuGioChieu");
  const lichChieu = getUnique(
    lstLichChieuTheoPhim,
    "ngayChieuGioChieu",
    ngayXem[0]
  );
  function handleAnimation() {
    
      let tempAnimationHeight = tempAnimation.current.getBoundingClientRect().height;
      console.log(tempAnimationHeight);
    if (isClick) {
      suatChieuRef.current.style.height = `${tempAnimationHeight + 16}px`;
    } else {
      suatChieuRef.current.style.height = `0px`;
    }
  }
  useEffect(() => {
    handleAnimation();
    console.log(isClick);
  }, [isClick]);
  return (
    <>
      <article
        className="detailSuatChieu"
        onClick={() => {
          setIsClick(!isClick);
        }}
      >
        <div className="detailSuatChieu__img">
          <img src={hinhAnh} alt={tenPhim} />
        </div>
        <div className="detailSuatChieu__content">
          <h4>
            <span className="doTuoi">C16</span>
            {tenPhim}
          </h4>
          <span>120 phút - TIX 0 - IMDb 0</span>
        </div>
        <div
          className="timeSuatChieu "
          ref={suatChieuRef}
          style={{ height: "168px" }}
        >
          <div className="tempAnimation" ref={tempAnimation}>
          <h4> 2D Digital</h4>
          {lichChieu.map((value, index) => {
            //const { maLichChieu, gioChieu } = value

            return (
              <Link to={`/chiTiet/${maPhim}`} key={value}>
                <span className="textTime">{value}</span>
                <span className="textPlusTime">~{tangGio(value, 120)}</span>
              </Link>
            );
          })}
          </div>
        </div>
      </article>
    </>
  );
}

export default SuatChieu;
