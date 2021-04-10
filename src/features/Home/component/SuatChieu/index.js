import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { FaVoteYea } from "react-icons/fa";
import ChiTietSuatChieu from "../ChiTietSuatChieu";

SuatChieu.prototype = {
  lichChieu: PropTypes.object.isRequired,
  maPhim: PropTypes.number.isRequired,
  hinhAnh: PropTypes.string.isRequired,
  tenPhim: PropTypes.string.isRequired,
  indexSuatChieu: PropTypes.number.isRequired,
};
function SuatChieu({ lichChieu, maPhim, hinhAnh, tenPhim, indexSuatChieu }) {
  const suatChieuRef = useRef(null);
  const lichChieuRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  //console.log(lichChieu);
  const increaseHeight = () => {
    const suatChieuHeight = suatChieuRef.current.getBoundingClientRect().height;
    const lichChieuHeight = lichChieuRef.current.getBoundingClientRect().height;
    //console.log(suatChieuHeight, lichChieuHeight);
    if (suatChieuHeight === 0) {
      suatChieuRef.current.style.height = `${lichChieuHeight + 16}px`;
    } else {
      suatChieuRef.current.style.height = `0px`;
    }
    setToggle(!toggle);
  };
  const renderButtonSuatChieu = () => {
    //console.log(lichChieu);
    const height =
      Object.keys(lichChieu).length >= 3
        ? 301
        : 95 * Object.keys(lichChieu).length + 16;
    console.log(height);
    if (indexSuatChieu === 0) {
      return (
        <React.Fragment>
          <button
            className="btn btnVote"
            onClick={increaseHeight}
            style={!toggle ? { color: "#da8252" } : { color: "black" }}
          >
            <FaVoteYea />
          </button>
          <div
            className="suatChieu"
            ref={suatChieuRef}
            style={indexSuatChieu === 0 ? { height: `${height}px` } : ""}
          >
            <div ref={lichChieuRef}>
              <ChiTietSuatChieu lichChieu={lichChieu} />
            </div>
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <button
          className="btn btnVote"
          onClick={increaseHeight}
          style={toggle ? { color: "#da8252" } : { color: "black" }}
        >
          <FaVoteYea />
        </button>
        <div
          className="suatChieu"
          ref={suatChieuRef}
          style={indexSuatChieu !== 0 ? { height: "0px" } : ""}
        >
          <div ref={lichChieuRef}>
            <ChiTietSuatChieu lichChieu={lichChieu} />
          </div>
        </div>
      </React.Fragment>
    );
  };

  // console.log(Object.keys(lichChieu));
  return (
    <React.Fragment>
      <li key={maPhim}>
        <img src={hinhAnh} />
        <div className="content">
          <h4>
            <span>C13</span> {tenPhim}
          </h4>
          <p>100 phút - TIX 8.7 - IMDb 7.4</p>
        </div>
        {renderButtonSuatChieu()}
      </li>
    </React.Fragment>
  );
}

export default SuatChieu;

{
  /* */
}
