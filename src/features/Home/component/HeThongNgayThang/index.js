import React from "react";
import PropTypes from "prop-types";
import {
  convertToInNeed,
  handleNgayTiepTheo,
  weekday,
  month,
} from "utils/helper";
HeThongNgayThang.prototype = {
  namThangNgayThuList: PropTypes.array.isRequired,
  handleChangeNgayThang: PropTypes.func.isRequired,
  activeNgayThang: PropTypes.string.isRequired,
};
function HeThongNgayThang({
  namThangNgayThuList,
  handleChangeNgayThang,
  activeNgayThang,
}) {
  const renderNgaThangNamHonBay = () => {
    return (
      <React.Fragment>
        {namThangNgayThuList.map((item, index) => {
          const [nam, thang, ngay, thu] = item.split("/");

          return (
            <button
              className={activeNgayThang === item ? "active" : ""}
              key={item}
              onClick={() => {
                handleChangeNgayThang(item);
              }}
            >
              <h4>{weekday[thu]}</h4>
              <span>
                {ngay < 10 ? `0${ngay}` : ngay}/{thang + 1}
              </span>
            </button>
          );
        })}
      </React.Fragment>
    );
  };
  const renderNgayThangNamNhoHonBay = () => {
    const date = handleNgayTiepTheo();
    return (
      <React.Fragment>
        {Array.from({ length: 7 }, (_, index) => {
          const value = namThangNgayThuList[index];
          let temp = value ? value.split("/") : date();
          const [nam, thang, ngay, thu] = temp;
          return (
            <button
              className={
                activeNgayThang === namThangNgayThuList[index] ? "active" : ""
              }
              key={index}
              disabled={index >= namThangNgayThuList.length ? true : false}
              onClick={() => {
                if (!namThangNgayThuList[index]) return;
                handleChangeNgayThang(namThangNgayThuList[index]);
              }}
            >
              <h4>{weekday[thu]}</h4>
              <span>
                {ngay < 10 ? `0${ngay}` : ngay}/{thang + 1}
              </span>
            </button>
          );
        })}
      </React.Fragment>
    );
  };
  return (
    <div className="btnWrapperContainer">
      {namThangNgayThuList.length > 7
        ? renderNgaThangNamHonBay()
        : renderNgayThangNamNhoHonBay()}
    </div>
  );
}

export default HeThongNgayThang;
