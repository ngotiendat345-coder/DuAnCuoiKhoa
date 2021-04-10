import React, { useContext, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AppContext } from "context/context";
import { chonGhe, huyGhe } from "redux/action/BookingAction";
import { useDispatch } from "react-redux";
function Ghe({ ghe, index }) {
  const dispatch = useDispatch();
  const [choose, setChoose] = useState(false);
  const { maGhe, tenGhe, loaiGhe, daDat, giaVe } = ghe;
  const { showModal } = useContext(AppContext);
  const renderGhe = () => {
    if (daDat) {
      return (
        <button className="btnIcon" disabled={true}>
          <AiOutlineCloseCircle />
        </button>
      );
    }
    if (choose) {
      return (
        <button
          className="btnIcon gheDaChon"
          onClick={() => {
            setChoose(false);
            dispatch(huyGhe({ maGhe, giaVe, tenGhe }));
          }}
        >
          <FaCircle />
          <small>{tenGhe}</small>
        </button>
      );
    }
    if (loaiGhe === "Vip") {
      return (
        <button
          className="btnIcon vip"
          onClick={() => {
            setChoose(true);
            dispatch(chonGhe({ maGhe, giaVe, tenGhe }));
          }}
        >
          <FaCircle />
        </button>
      );
    }
    return (
      <button
        className="btnIcon"
        onClick={() => {
          setChoose(true);
          dispatch(chonGhe({ maGhe, giaVe, tenGhe }));
          //console.log(index);
          if ((index - 1) % 16 === 0 || (index + 4) % 16 === 0) {
            showModal("Bạn không được để trống ghế đầu hàng", "normal");
          }
        }}
      >
        <FaCircle />
      </button>
    );
  };
  return renderGhe();
}

export default Ghe;
