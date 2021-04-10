import React from "react";
import PropTypes from "prop-types";
SearchBtn.propTypes = {
  maHeThongRap: PropTypes.string.isRequired,
  currentHeThong: PropTypes.string.isRequired,
  biDanh: PropTypes.string.isRequired,
  maHeThongRap: PropTypes.string.isRequired,
};
function SearchBtn({
  maHeThongRap,
  currentHeThong,
  biDanh,
  tenHeThongRap,
  handleChangHeThong,
}) {
  return (
    <button
      className={currentHeThong === maHeThongRap ? "active" : ""}
      key={biDanh}
      onClick={() => {
        handleChangHeThong(maHeThongRap);
      }}
    >
      {tenHeThongRap}
    </button>
  );
}

export default SearchBtn;
