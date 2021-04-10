import React, { useContext, useRef, useState } from "react";
import PropTypes from "prop-types";
import { handleImage } from "utils/helper";
import { Link, useHistory } from "react-router-dom";
import axiosClient from "api/axiosClient";
import { useDispatch } from "react-redux";
import { getDanhSachPhongVe } from "redux/action/BookingAction";
import { AppContext } from "context/context";

HeThongGioChieu.prototype = {
  content: PropTypes.object.isRequired,
  currentHeThong: PropTypes.string.isRequired,
  activeNgayThang: PropTypes.number.isRequired,
};
function HeThongGioChieu({ content, currentHeThong, activeNgayThang }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { showModal } = useContext(AppContext);
  const [active, setActive] = useState(true);
  const containerRef = useRef(null);
  const infoRef = useRef(null);

  const handleHeight = () => {
    const containerHeight = containerRef.current.getBoundingClientRect().height;
    const infoHeight = infoRef.current.getBoundingClientRect().height;
    //console.log(infoHeight);
    if (containerHeight !== 0) {
      containerRef.current.style.height = `0px`;
    } else {
      containerRef.current.style.height = `${infoHeight + 16}px`;
    }
    setActive(!active);
  };
  const data = content[activeNgayThang] ? content[activeNgayThang] : null;
  // console.log(data);
  return (
    <React.Fragment>
      {data && (
        <li className="movieInfo" onClick={handleHeight}>
          <div className="key">
            <img src={handleImage(currentHeThong)} alt={data.tenCumRap} />
          </div>
          <div className="wrapInfo">
            <h4>{data.tenCumRap}</h4>
            <span>
              {data.tenRap} - Giá vé: {data.giaVe}đ{" "}
            </span>
          </div>
          <div
            className="containerInFo"
            ref={containerRef}
            style={{ height: "63px" }}
          >
            <div className="movieInfoLichChieu" ref={infoRef}>
              <h4>2D Digital</h4>
              {data.gioPhut.map((item) => (
                <button
                  className="btn"
                  key={item}
                  onClick={() => {
                    const user = localStorage.getItem("UserAccount")
                      ? JSON.parse(localStorage.getItem("UserAccount"))
                      : null;
                    if (user) {
                      axiosClient.defaults.headers.common[
                        "Authorization"
                      ] = `Bearer ${user.accessToken}`;
                      dispatch(getDanhSachPhongVe(data.maLichChieu));
                      localStorage.setItem("maLichChieu", data.maLichChieu);
                      history.push("/checkout/combo");
                    } else {
                      showModal(
                        "Bạn phải đăng nhập thì mới đặt vé được",
                        "normal"
                      );
                    }
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </li>
      )}
    </React.Fragment>
  );
}

export default React.memo(HeThongGioChieu);
