import React, { useEffect, useState } from "react";
import screen from "assets/booking/screen.png";

function ThongTinRap({ thongTinPhim }) {
  const { hinhAnh, tenCumRap, diaChi, tenPhim } = thongTinPhim;
  const [count, setCount] = useState(300);
  useEffect(() => {
    let loop = setInterval(() => {
      //let newCount = count - 1;

      setCount((count) => {
        if (count === 0) {
          window.location.reload();
        }
        return count === 0 ? 0 : count - 1;
      });
    }, 1000);

    return () => {
      clearInterval(loop);
    };
  }, []);
  return (
    <>
      <div className="thongTinRap">
        <article className="thongTinRap__detail">
          <div>
            <img src={hinhAnh} alt={tenCumRap} />
          </div>
          <div>
            <h4>{tenCumRap}</h4>
            <p>{diaChi}</p>
          </div>
        </article>
        <div className="thongTinRap__thoiGian">
          <h3>
            0{Math.trunc(count / 60)}:
            {count % 60 > 10
              ? Math.floor(count % 60)
              : `0${Math.floor(count % 60)}`}
          </h3>
        </div>
      </div>
      <p style={{ textAlign: "center", margin: "0.5rem 0" }}>Vui lòng chọn</p>
      <div className="screenWrap">
        <img src={screen} alt="sreen" />
        <p>{tenPhim}</p>
      </div>
    </>
  );
}

export default ThongTinRap;
