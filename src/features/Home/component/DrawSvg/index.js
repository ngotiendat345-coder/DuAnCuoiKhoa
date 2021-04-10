import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

DrawSvg.prototype = {
  tempDanhGia: PropTypes.number.isRequired,
};
function DrawSvg({ tempDanhGia }) {
  const outline = useRef(null);
  function handleDraw() {
    let length = outline.current.getTotalLength();
    outline.current.style.strokeDasharray = length;
    outline.current.style.strokeDashoffset = length;
    let draw = (tempDanhGia / 10) * length;
    outline.current.style.strokeDashoffset = length - draw;
  }
  useEffect(() => {
    handleDraw();
  }, []);
  return (
    <div className="player-container">
      <svg
        className="track-outline"
        width={150}
        height={150}
        viewBox="0 0 453 453"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="226.5"
          cy="226.5"
          r="216.5"
          stroke="white"
          strokeWidth={20}
        />
      </svg>
      <svg
        className="moving-outline"
        width={150}
        height={150}
        viewBox="0 0 453 453"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="226.5"
          cy="226.5"
          r="216.5"
          stroke="#7ed321"
          strokeWidth={20}
          ref={outline}
        />
      </svg>
    </div>
  );
}

export default DrawSvg;
