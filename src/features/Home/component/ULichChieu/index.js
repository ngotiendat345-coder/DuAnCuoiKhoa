import React from "react";
import PropTypes from "prop-types";
import SuatChieu from "../SuatChieu";

LichChieuComponet.prototype = {
  currentRap: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

function LichChieuComponet({ currentRap, data }) {
  let filter = Object.keys(data).includes(currentRap)
    ? data[currentRap].danhSachPhim
    : [];

  return (
    <React.Fragment>
      {filter.length < 1 && (
        <h4 style={{ textAlign: "center", paddingTop: "2rem" }}>
          Hiện tại không có suât chiếu
        </h4>
      )}
      {filter.length >= 1 && (
        <React.Fragment>
          {filter.map((item, index) => {
            const { maPhim, hinhAnh, tenPhim, ...lichChieu } = item;
            return (
              <SuatChieu
                key={maPhim}
                maPhim={maPhim}
                hinhAnh={hinhAnh}
                tenPhim={tenPhim}
                lichChieu={lichChieu}
                indexSuatChieu={index}
              />
            );
          })}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default React.memo(LichChieuComponet);
