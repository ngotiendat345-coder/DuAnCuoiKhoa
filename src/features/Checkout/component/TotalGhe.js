import React from "react";
import PropTypes from "prop-types";
import Ghe from "./Ghe";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
TotalGhe.prototype = {
  gheDaDat: PropTypes.array.isRequired,
  danhSachGhe: PropTypes.array.isRequired,
};
function TotalGhe({ gheDaDat, danhSachGhe }) {
  const maxGheOnRow = 16;
  const renderDanhSachGhe = () => {
    let array = [];
    for (let i in danhSachGhe) {
      array.push(
        <Ghe ghe={danhSachGhe[i]} key={danhSachGhe[i].maGhe} index={i} />
      );
    }
    return array;
  };
  const renderDanhSachGheTheoHang = () => {
    let danhSach = renderDanhSachGhe();
    let array = [];
    for (let i = 0; i < Math.ceil(danhSachGhe.length / maxGheOnRow); i++) {
      let next = i * maxGheOnRow;
      array.push(
        <div key={String.fromCharCode(i + 65)} className="totalghe_row">
          <span className="">{String.fromCharCode(i + 65)}</span>
          {danhSach.slice(next, next + maxGheOnRow)}
        </div>
      );
    }
    return array;
  };
  return (
    <div className="datghe">
      <div className="totalghe">
        {renderDanhSachGheTheoHang()}
        <footer
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div className="gheThuong">
            <button className="btnIcon">
              <FaCircle />
            </button>
            <p>Ghế Thường</p>
          </div>
          <div className="gheVIP">
            <button className="btnIcon vip">
              <FaCircle />
            </button>
            <p>Ghế VIP</p>
          </div>
          <div className="gheVIP">
            <button className="btnIcon">
              {" "}
              <AiOutlineCloseCircle />
            </button>
            <p>Ghế có người chọn</p>
          </div>
          <div className="gheVIP">
            <button className="btnIcon gheDaChon">
              {" "}
              <FaCircle />
            </button>
            <p>Ghế bạn chọn</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default TotalGhe;
