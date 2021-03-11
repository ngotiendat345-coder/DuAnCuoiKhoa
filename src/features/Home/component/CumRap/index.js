import Loading from "component/Loading";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import { changeHeThong, getFullHeThongRap } from "redux/action/FilmAction";
import LichChieuRap from "../LichChieuRap";
import ListRap from "../ListRap";
import ThongTinRap from "../ThongTinRap";
import "./style.scss";
function CumRap() {
  //const [current,setCurrent] = useState(0)

  const {
    danhSachCumRap,
    heThongRap,
    currentHeThong,
    currentRap,
    loading,
  } = useSelector((state) => state.CumRapReducer);
  //console.log(danhSachCumRap,heThongRap,currentHeThong)
  const dispatch = useDispatch();

  function hangdleChangeHeThong(currentHeThong) {
    const action = changeHeThong(currentHeThong);
    dispatch(action);
  }

  useEffect(() => {
    dispatch(getFullHeThongRap(currentHeThong));
  }, [currentHeThong]);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="cumRap" id="Cum_Rap">
      <div className="cumRap__container">
        <Container fluid={true}>
          <Row>
            <ListRap
              heThongRap={heThongRap}
              currentHeThong={currentHeThong}
              hangdleChangeHeThong={hangdleChangeHeThong}
            />
            <ThongTinRap danhSachCumRap={danhSachCumRap} current={currentRap} />
            <LichChieuRap />
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default CumRap;
