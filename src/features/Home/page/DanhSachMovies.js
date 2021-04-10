import Loading from "component/Loading";
import ScrollTop from "component/ScrollTop";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  changeSapChieu,
  fetchDataFilm,
  removeFilmError,
} from "redux/action/FilmAction";
import ListBtnWrapper from "../component/ListBtnWrapper";
import MovieList from "../component/MovieList";
import SearchSection from "../component/SearchSection";
import ChiTiet from "./ChiTiet";
import "./style.scss";

function DanhSachMovies() {
  const { danhSachPhim, loading, isSapChieu, danhSachSapChieu } = useSelector(
    (state) => state.FilmReducer
  );

  const dispatch = useDispatch();

  const handleDangChieu = () => {
    dispatch(changeSapChieu(false));
  };
  const handleSapChieu = () => {
    if (!danhSachSapChieu) {
      dispatch(fetchDataFilm("new"));
    } else {
      dispatch(changeSapChieu(true));
    }
  };
  function handleOnEror(maPhim) {
    dispatch(removeFilmError(maPhim));
  }
  useEffect(() => {
    if (!danhSachPhim) {
      dispatch(fetchDataFilm("top"));
    }
  }, []);
  return (
    <React.Fragment>
      <ScrollTop />
      <section className="MoviesWrapper section">
        <div className="TitleWrapper">
          <h2>
            <span>/</span>
            our projects
          </h2>
        </div>
        <ListBtnWrapper
          handleSapChieu={handleSapChieu}
          handleDangChieu={handleDangChieu}
          isSapChieu={isSapChieu}
        />
        <div className="section-center danhSachMovies">
          {loading && <Loading />}
          {!isSapChieu && !loading && (
            <MovieList danhSach={danhSachPhim} handleOnEror={handleOnEror} />
          )}

          {isSapChieu && !loading && (
            <MovieList
              danhSach={danhSachSapChieu}
              handleOnEror={handleOnEror}
            />
          )}
        </div>
      </section>
      {!loading && (
        <section className="MoviesWrapper section">
          <div className="TitleWrapper">
            <h2>
              <span>/</span>
              Algolia Search
            </h2>
          </div>
          {danhSachPhim && <SearchSection danhSach={danhSachPhim} />}
        </section>
      )}
    </React.Fragment>
  );
}

export default DanhSachMovies;
