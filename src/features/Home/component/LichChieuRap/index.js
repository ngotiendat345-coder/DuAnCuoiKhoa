import { UPDATE_LIST_PHIM } from "constant/ListActionType";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col } from "reactstrap";
import SuatChieu from "../SuatChieu";

import "./style.scss";
function LichChieuRap() {
  const dispatch = useDispatch();
  const { danhSachPhim, currentRap } = useSelector(
    (state) => state.CumRapReducer
  );
  //console.log(danhSachPhim);
  useEffect(() => {
    dispatch({ type: UPDATE_LIST_PHIM });
  }, [currentRap]);
  //console.log(danhSachCumRap);
  return (
    <Col xs="12" md="7" className="cumRap__container--suatChieu">
      {danhSachPhim.map((item) => {
        return <SuatChieu key={item.maPhim} {...item} />;
      })}
    </Col>
  );
}

export default LichChieuRap;
