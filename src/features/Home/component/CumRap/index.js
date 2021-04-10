import Loading from "component/Loading";
import useFetch from "hooks/useFetch";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeHeThong,
  changeActiveRap,
  changeDanhSachCumRap,
  getDetailHeThong,
} from "redux/action/CumRapAction";
import DanhSachRap from "../DanhSachRap";
import SearchBtn from "../SearchBtn";
import LichChieuComponet from "../ULichChieu";
import PropTypes from "prop-types";
import "./style.scss";

// CumRap.prototype = {
//   id: PropTypes.string,
// };
function CumRap() {
  const dispatch = useDispatch();
  const {
    danhSachHeThong,
    danhSachCumgRap,
    loadingHeThong,
    loadingCumRap,
    currentHeThong,
    activeRap,
    currentCumRap,
    loadingDetailHeThong,
    dataDetailHeThong,
  } = useSelector((state) => state.HeThongRapReducer);

  const handleChangHeThong = (heThong) => {
    dispatch(changeHeThong(heThong));
  };
  const handleChangeIndex = (maRap) => {
    dispatch(changeActiveRap(maRap));
  };

  // const handleChangeCurrentDetailHethong = (maCumRap) => {
  //   dispatch(changeCurrentDetailHeThong(maCumRap));
  // };
  // const renderCumRap = () => {

  //   return (
  //     <React.Fragment>
  //       {errorDetailHeThong && <h4>{errorDetailHeThong}</h4>}
  //       {!loadingCumRap && dataDetailHeThong && (
  //         <DanhSachRap
  //           currentCumRap={currentCumRap}
  //           activeCumRap={currentDetailHeThong}
  //           currentHeThong={currentHeThong}
  //           handleChangeIndex={handleChangeCurrentDetailHethong}
  //           data={dataDetailHeThong}
  //         />
  //       )}
  //     </React.Fragment>
  //   );
  // };

  useEffect(() => {
    if (!loadingCumRap) {
      dispatch(changeDanhSachCumRap());
      dispatch(getDetailHeThong(currentHeThong));
    }
  }, [currentHeThong, loadingCumRap]);

  return (
    <section className="ProjectWrapper section">
      <div className="TitleWrapper">
        <h2>
          <span>/</span>
          our cinemas
        </h2>
      </div>
      {!loadingHeThong && danhSachHeThong && (
        <React.Fragment>
          <div className="SearchBtnWrapper">
            {danhSachHeThong.map((item) => (
              <SearchBtn
                {...item}
                key={item.biDanh}
                currentHeThong={currentHeThong}
                handleChangHeThong={handleChangHeThong}
              />
            ))}
          </div>
        </React.Fragment>
      )}
      <div className="ProjectWrapper__center">
        <div className="ProjectWrapper__left">
          <ul>
            {!loadingCumRap && currentCumRap && (
              <DanhSachRap
                currentCumRap={currentCumRap}
                activeCumRap={activeRap}
                currentHeThong={currentHeThong}
                handleChangeIndex={handleChangeIndex}
              />
            )}
          </ul>
        </div>
        <div className="ProjectWrapper__right">
          <ul>
            {loadingDetailHeThong && <Loading text={"Đang load dữ liệu"} />}
            {!loadingDetailHeThong && dataDetailHeThong && (
              <LichChieuComponet
                currentRap={activeRap}
                data={dataDetailHeThong}
              />
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CumRap;
// import { useDispatch, useSelector } from "react-redux";
// import { Container, Row } from "reactstrap";
// import { changeHeThong, getFullHeThongRap } from "redux/action/FilmAction";
// import LichChieuRap from "../LichChieuRap";
// import ListRap from "../ListRap";
// import ThongTinRap from "../ThongTinRap";
// import "./style.scss";
/* <div className="cumRap__container">
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
      </div> */

//const [current,setCurrent] = useState(0)

// const {
//   danhSachCumRap,
//   heThongRap,
//   currentHeThong,
//   currentRap,
//   loading,
// } = useSelector((state) => state.CumRapReducer);
// //console.log(danhSachCumRap,heThongRap,currentHeThong)
// const dispatch = useDispatch();

// function hangdleChangeHeThong(currentHeThong) {
//   const action = changeHeThong(currentHeThong);
//   dispatch(action);
// }

// useEffect(() => {
//   dispatch(getFullHeThongRap(currentHeThong));
// }, [currentHeThong]);
