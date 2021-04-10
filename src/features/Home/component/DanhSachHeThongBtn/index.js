import React from "react";
import PropTypes from "prop-types";
import { handleImage } from "utils/helper";

DanhSachHeThongBtn.prototype = {
  data: PropTypes.array.isRequired,
  currentHeThong: PropTypes.string.isRequired,
  handleChangeCurrentHeThong: PropTypes.func.isRequired,
};
function DanhSachHeThongBtn({
  data,
  currentHeThong,
  handleChangeCurrentHeThong,
}) {
  return (
    <div>
      <ul className="heThongWrapper">
        {data.map((item) => (
          <li
            key={item}
            className={currentHeThong === item ? "active" : ""}
            onClick={() => {
              handleChangeCurrentHeThong(item);
            }}
          >
            <div className="i">
              <img src={handleImage(item)} alt={item} />
            </div>
            <h4>{item}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(DanhSachHeThongBtn);
