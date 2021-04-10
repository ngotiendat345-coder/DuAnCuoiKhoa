import React, { useContext } from "react";
import PropTypes from "prop-types";
import { weekday, month } from "utils/helper";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import axiosClient from "api/axiosClient";
import { getDanhSachPhongVe } from "redux/action/BookingAction";
import { AppContext } from "context/context";
ChiTietSuatChieu.prototype = {
  lichChieu: PropTypes.object.isRequired,
};
function ChiTietSuatChieu({ lichChieu }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { showModal } = useContext(AppContext);
  return (
    <React.Fragment>
      {Object.keys(lichChieu)
        .slice(0, 3)
        .map((item) => {
          const [thu, ngay, thang, nam] = item.split("-");
          const { maLichChieu, gioPhut, tenRap } = lichChieu[item];
          const filterGioPhu = gioPhut.filter(
            (value, index, self) =>
              index === self.findIndex((item) => item === value)
          );
          const thuNgayThangNam = `${weekday[thu]} ngày ${ngay} ${month[thang]} tại ${tenRap}:`;
          return (
            <article key={maLichChieu}>
              <h4>{thuNgayThangNam}</h4>
              {filterGioPhu.map((curr, index) => {
                const [gio, phut] = curr.split("-");
                return (
                  <button
                    className={
                      index === 0 ? "btn btnGioPhut active" : "btn btnGioPhut"
                    }
                    onClick={() => {
                      const user = localStorage.getItem("UserAccount")
                        ? JSON.parse(localStorage.getItem("UserAccount"))
                        : null;
                      if (user) {
                        axiosClient.defaults.headers.common[
                          "Authorization"
                        ] = `Bearer ${user.accessToken}`;
                        dispatch(getDanhSachPhongVe(maLichChieu));
                        localStorage.setItem("maLichChieu", maLichChieu);
                        history.push("/checkout/combo");
                      } else {
                        showModal(
                          "Xin hãy hoàn thành đăng nhập trước.",
                          "normal"
                        );
                      }
                    }}
                    key={index}
                  >
                    {gio < 10 ? `0${gio}` : gio} -{" "}
                    {phut < 10 ? `0${phut}` : phut}
                  </button>
                );
              })}
            </article>
          );
        })}
    </React.Fragment>
  );
}

export default ChiTietSuatChieu;
