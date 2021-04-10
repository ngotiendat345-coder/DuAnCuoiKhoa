import React from "react";
import PropTypes from "prop-types";

ListBtnWrapper.prototype = {
  handleDangChieu: PropTypes.func.isRequired,
  handleSapChieu: PropTypes.func.isRequired,
  isSapChieu: PropTypes.bool.isRequired,
};
function ListBtnWrapper({ handleDangChieu, handleSapChieu, isSapChieu }) {
  return (
    <div className="SearchBtnWrapper">
      <button className={!isSapChieu ? "active" : ""} onClick={handleDangChieu}>
        Now showing
      </button>
      <button onClick={handleSapChieu} className={isSapChieu ? "active" : ""}>
        Coming soon
      </button>
    </div>
  );
}

export default ListBtnWrapper;
