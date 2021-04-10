import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { handleImage } from "utils/helper";

DanhSachRap.prototype = {
  activeCumRap: PropTypes.string.isRequired,
  currentHeThong: PropTypes.string.isRequired,
  currentCumRap: PropTypes.array.isRequired,
  handleChangeIndex: PropTypes.func.isRequired,
};

function DanhSachRap({
  currentCumRap,
  currentHeThong,
  activeCumRap,
  handleChangeIndex,
}) {
  // let filter = !data
  //   ? currentCumRap
  //   : currentCumRap.filter((item) => {
  //       if (Object.keys(data).includes(item.maCumRap)) {
  //         return item;
  //       }
  //     });
  // console.log(currentCumRap, filter);
  return (
    <React.Fragment>
      {currentCumRap && (
        <React.Fragment>
          {currentCumRap.map((item) => (
            <li
              key={item.maCumRap}
              className={item.maCumRap === activeCumRap ? "active" : ""}
              onClick={() => {
                handleChangeIndex(item.maCumRap);
              }}
            >
              <div className="key">
                <img src={handleImage(currentHeThong)} />
              </div>
              <div className="ProjectWrapper__left--content">
                <h4>{item.tenCumRap}</h4>
                <p>{item.diaChi}</p>
              </div>
            </li>
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default React.memo(DanhSachRap);
