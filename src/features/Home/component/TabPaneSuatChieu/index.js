import React, { useEffect, useRef, useState } from "react";
import { tangGio } from "utils/common";
import "./style.scss";
import { Link } from "react-router-dom";

function TabPaneSuatChieu({ item, logo, activeTab }) {
  const { tenCumRap, maCumRap, lichChieu } = item;
  const suatChieuRef = useRef(null);
  const tempAnimation = useRef(null);
  //console.log(item);
  const [isClick, setIsClick] = useState(true);
  
  useEffect(() => {
    if (lichChieu.length >= 1) {
      let tempAnimationHeight = tempAnimation.current.getBoundingClientRect()
        .height;
      if (isClick) {
        suatChieuRef.current.style.height = `${tempAnimationHeight + 16}px`;
      } else {
        suatChieuRef.current.style.height = `0px`;
      }
      console.log(tempAnimationHeight);
    }
  }, [isClick, activeTab]);
  return (
    <div className="tabSuatChieu">
      {lichChieu.length >= 1 && (
        <>
          <article
            className="detailSuatChieu"
            onClick={() => {
              setIsClick(!isClick);
            }}
          >
            <div className="detailSuatChieu__img">
              <img src={logo} alt={tenCumRap} />
            </div>
            <div className="detailSuatChieu__content">
              <h4>{tenCumRap}</h4>
              <span>120 phút - TIX 0 - IMDb 0</span>
            </div>
            <div
              className="timeSuatChieu "
              ref={suatChieuRef}
              style={{ height: "0px" }}
            >
              <div className="tempAnimation" ref={tempAnimation}>
                <h4> 2D Digital</h4>
                {lichChieu.map((item, index) => {
                  const { maLichChieu, ngayChieuGioChieu } = item;
                  const value = ngayChieuGioChieu.slice(11, 16);
                  return (
                    <Link to={`/home/booking/${maLichChieu}`} key={maLichChieu}>
                      <span className="textTime">{value}</span>
                      <span className="textPlusTime">
                        ~{tangGio(value, 120)}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </article>
        </>
      )}
    </div>
  );
}
export default TabPaneSuatChieu;

//
//     //console.log(item)
//     const {logo,ngayXem,active} = props;
//     const newNgayXem = ngayXem.filter((item)=>item.ngayChieu===active);
//     const tenCumRap=filterTenCumRap(newNgayXem)
//     //console.log(tenCumRap,active)

// {isClick && (
//     <div className="timeSuatChieu ">
//       <h4> 2D Digital</h4>

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           flexWrap: "wrap",
//         }}
//       >
//         {newNgayXem.map((value) => {
//           const {
//             maLichChieu,
//             gioChieu,
//             thoiLuong,
//             ngayChieuGioChieu,
//           } = value;
//           const a = moment(ngayChieuGioChieu);
//           const b = a
//             .add(thoiLuong / 60, "hours")
//             .format("hh:mm A");
//           //console.log(b)
//           return (
//             <div key={maLichChieu}>
//               <Link
//                 className="m-2 btn"
//                 key={maLichChieu}
//                 to={`/home/booking/${maLichChieu}`}
//               >
//                 {gioChieu}~{b}
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   )}
