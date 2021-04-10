//import "./style.scss";
import { fetchChiTietPhim } from "api/filmAPI";
import Loading from "component/Loading";
import React, { useEffect, useReducer, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ChiTietHeThong from "../component/ChiTietHeThong";
import DanhSachHeThongBtn from "../component/DanhSachHeThongBtn";
import ThongTinPhim from "../component/ThongTinPhim";
import { convertToInNeed } from "utils/helper";
import ScrollTop from "component/ScrollTop";
function DetailReducer(state, action) {
  if (action.type === "fetch") {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === "success") {
    const current = Object.keys(action.lichChieu)[0];
    const data = convertToInNeed(action.lichChieu[current]);
    const keyData = Object.keys(data);
    return {
      ...state,
      loading: false,
      lichChieu: action.lichChieu,
      thongTin: action.thongTin,
      currentHeThong: current,
      filter: {
        data,
        keyData,
      },
    };
  } else if (action.type === "error") {
    return {
      ...state,
      loading: false,
      error: action.message,
    };
  } else if (action.type === "changeHeThong") {
    const data = convertToInNeed(state.lichChieu[action.payload]);
    const keyData = Object.keys(data);
    return {
      ...state,
      currentHeThong: action.payload,
      filter: {
        data,
        keyData,
      },
    };
  } else {
    throw new Error("That action type doest exist");
  }
}

function ChiTiet() {
  const { id } = useParams();
  const [state, dispatch] = useReducer(DetailReducer, {
    loading: true,
    error: null,
    lichChieu: null,
    thongTin: null,
    currentHeThong: null,
    filter: null,
  });
  const { loading, error, lichChieu, thongTin, currentHeThong, filter } = state;
  useEffect(() => {
    dispatch({ type: "fetch" });
    fetchChiTietPhim(id)
      .then(({ lichChieu, thongTin }) =>
        dispatch({ type: "success", lichChieu, thongTin })
      )
      .catch(({ message }) => dispatch({ type: "error", message }));
  }, [id]);
  // useEffect(() => {
  //   if (lichChieu) {
  //     dispatch({ type: "fitlterHeThong" });
  //   }
  // }, [currentHeThong]);

  const handleChangeCurrentHeThong = (heThong) => {
    dispatch({ type: "changeHeThong", payload: heThong });
  };

  //console.log(lichChieu);
  if (error) {
    return (
      <React.Fragment>
        <h1>Phim này hiện chưa có lịch chiếu</h1>
        <Link to="/" className="btn">
          Trỏ về trang chủ
        </Link>
      </React.Fragment>
    );
  }
  return (
    <section className="chiTietPhim">
      <div className="chiTietPhim__container">
        <ScrollTop />
        {loading && <Loading text="Đang load dữ liệu" />}
        {!loading && <ThongTinPhim data={thongTin} />}
        <div className="chiTietPhim__content">
          {!loading && lichChieu && (
            <React.Fragment>
              <div className="TitleWrapper">
                <h2>
                  <span>/</span>Lịch chiếu
                </h2>
              </div>
              <article className="chiTietPhim__filter">
                <DanhSachHeThongBtn
                  data={Object.keys(lichChieu)}
                  currentHeThong={currentHeThong}
                  handleChangeCurrentHeThong={handleChangeCurrentHeThong}
                />
                {filter && (
                  <ChiTietHeThong
                    lichChieu={filter}
                    currentHeThong={currentHeThong}
                  />
                )}
              </article>
            </React.Fragment>
          )}
        </div>
      </div>
      {!loading && thongTin && (
        <div
          className="chiTietPhim__overplay"
          style={{
            backgroundImage: `linear-gradient(to bottom, #00000080 0%, #0a2029 60%),url(${thongTin.hinhAnh})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "top center",
            height: "100%",
          }}
        ></div>
      )}
    </section>
  );
}

export default ChiTiet;

// const dispatch = useDispatch();
// const { id } = useParams();
// const { loading, danhSachPhim, danhSachSapChieu } = useSelector(
//   (state) => state.FilmReducer
// );
// const { danhSachCumgRap, danhSachHeThong } = useSelector(
//   (state) => state.HeThongRapReducer
// );
// const { currentHeThongFetch, dataFetch, loadingFetch, errorFetch } = useFetch(
//   id
// );
// //console.log(dataFetch);

// const target =
//   (danhSachPhim
//     ? danhSachPhim.find((item) => item.maPhim === parseInt(id))
//     : null) ||
//   (danhSachSapChieu
//     ? danhSachSapChieu.find((item) => item.maPhim === parseInt(id))
//     : null);
// //console.log(id);

// useEffect(() => {
//   if (loading) {
//     dispatch(fetchDataFilm());
//     dispatch(fetchDataFilm("new"));
//     dispatch(getInitialHeThong());
//   }
// }, []);

// if (!target && !loading) {
//   return (
//     <section className="chiTietPhim">
//       <div className="chiTietPhim__container">
//         <h3>Không tìm thấy phim</h3>
//         <Link className="btn" to="/">
//           Trở về trang chủ
//         </Link>
//       </div>
//     </section>
//   );
// }

// return (
//   <section className="chiTietPhim">
//     <div className="chiTietPhim__container">
//       {loading && <Loading text="Đang load dữ liệu" />}
//       {!loading && <ThongTinPhim data={target} />}
//       <div className="lichChieu__container">
//         <div className="TitleWrapper">
//           <h2>
//             <span>/</span>Lịch chiếu
//           </h2>
//         </div>
//         {loadingFetch && <Loading text="Đang load lịch chiếu" />}
//         {!loadingFetch && dataFetch && (
//           <React.Fragment>
//             <ThongTinLichChieu
//               danhSachCumgRap={danhSachCumgRap}
//               currentHeThongFetch={currentHeThongFetch}
//               danhSachHeThong={danhSachHeThong}
//               dataFetch={dataFetch}
//             />
//           </React.Fragment>
//         )}
//       </div>
//     </div>
//   </section>
// );
// import Footer from "component/Footer";
// import Header from "component/Header";
// import Loading from "component/Loading";
// import { loginImages } from "constant/Images";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import { getDataChiTietPhim } from "redux/action/FilmAction";
// import ChiTietLichChieu from "../component/ChiTietLichChieu";
// import ChiTietThongTin from "../component/ChiTietThongTin";
// import filmAPI from "api/filmAPI";
/**
 * const dispatch = useDispatch();
  const { loading, currentHeThong, heThongRapChieu, data, error } = useSelector(
    (state) => state.DetailReducer
  );
  const { maPhim } = useParams();

  console.log(currentHeThong, heThongRapChieu);

  // const background = loginImages.backapp;
  useEffect(() => {
    dispatch(getDataChiTietPhim(maPhim));
  }, [maPhim]);
  if (error) {
    return (
      <>
        <Header />
        <section className="chiTietPhim">
          <div className="chiTietPhim__container text-center" >
              <h1 >Xin lỗi , phim này hiện đã ngừng chiếu</h1>
              <Link className="btn btn-success" to="/">Trở về trang chủ</Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <section className="chiTietPhim">
        <div className="chiTietPhim__container">
          <ChiTietLichChieu data={data} />
          <ChiTietThongTin />
        </div>
        <div className="chiTietPhim__overplay">
          <img src={data.hinhAnh} alt={data.tenPhim} />
        </div>
      </section>
      <Footer />
    </>
  );
 */
