import Loading from "component/Loading";
import { CHANGE_RAP_DETAIL } from "constant/ListActionType";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row } from "reactstrap";
import TabNgayXem from "../TabNgayXem";
import "./style.scss";
function TabLichChieu() {
  const { currentHeThong, heThongRapChieu } = useSelector(
    (state) => state.DetailReducer
  );
  const dispatch = useDispatch();
  console.log(currentHeThong, heThongRapChieu);

  return (
    <article className="tabLichChieu__container">
      <Container>
        <Row>
          <div className="col-md-12 col-lg-3 tabLichChieu__container--listDetailRap">
            {heThongRapChieu.map((item, index) => {
              const { maHeThongRap, logo, tenHeThongRap } = item;
              return (
                <div
                  className={
                    currentHeThong === maHeThongRap
                      ? "detailRap active"
                      : "detailRap"
                  }
                  key={maHeThongRap}
                  onClick={() => {
                    //console.log("zz");
                    dispatch({
                      type: CHANGE_RAP_DETAIL,
                      payload: maHeThongRap,
                    });
                  }}
                >
                  <div>
                    <img src={logo} alt={tenHeThongRap} />
                  </div>
                  <div>
                    <h4>{tenHeThongRap}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-9 col-md-12 tabLichChieu__container--suatChieu">
            <TabNgayXem />
          </div>
        </Row>
      </Container>
    </article>
  );
}

export default TabLichChieu;
