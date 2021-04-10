import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { convertToInNeed } from "utils/helper";
import HeThongNgayThang from "../HeThongNgayThang";
import HeThongGioChieu from "../HeThongGioChieu";
ChiTietHeThong.prototype = {
  lichChieu: PropTypes.object.isRequired,
  currentHeThong: PropTypes.string.isRequired,
};
function ChiTietHeThong({ lichChieu, currentHeThong }) {
  const { data, keyData } = lichChieu;
  const [activeNgayThang, setActiveNgayThang] = useState(keyData[0]);

  const handleChangeNgayThang = (index) => {
    setActiveNgayThang(index);
  };
  useEffect(() => {
    setActiveNgayThang(keyData[0]);
  }, [currentHeThong, lichChieu]);

  // const content = data[activeNgayThang];
  // console.log(content);
  return (
    <article style={{ overflow: "hidden" }}>
      <HeThongNgayThang
        namThangNgayThuList={keyData}
        handleChangeNgayThang={handleChangeNgayThang}
        activeNgayThang={activeNgayThang}
      />
      <ul className="btnWrapperContent">
        <HeThongGioChieu
          content={data}
          currentHeThong={currentHeThong}
          activeNgayThang={activeNgayThang}
        />
      </ul>
    </article>
  );
}

export default ChiTietHeThong;
