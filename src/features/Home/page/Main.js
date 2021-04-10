import Loading from "component/Loading";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CumRap from "../component/CumRap";
import { fetchDataFilm } from "redux/action/FilmAction";
import { getInitialHeThong } from "redux/action/CumRapAction";
import Hero from "../component/Hero";
import About from "../component/AboutUs";
import Movies from "../component/Movies";
import ScrollTop from "component/ScrollTop";

function Main() {
  const dispatch = useDispatch();
  // const { loading } = useSelector((state) => state.FilmReducer);
  // const { loadingHeThong } = useSelector((state) => state.HeThongRapReducer);
  // console.log(heThongRap)
  // console.log(listMovie)
  useEffect(() => {
    dispatch(fetchDataFilm());
    dispatch(getInitialHeThong());
  }, []);

  return (
    <>
      {/* <ScrollTop /> */}
      <Hero />
      <About />
      <Movies />
      <CumRap />
    </>
  );
}

export default Main;
