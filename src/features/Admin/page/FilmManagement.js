import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilmControl from "../component/FilmControl";
import ListMovies from "../component/ListMovies";
import {
  deletePhimAction,
  getDanhSachPhimAction,
  getListPhanTrangAction,
} from "redux/action/FilmAdminAction";
import Loading from "component/Loading";
import SearchList from "../component/SearchList";
import { useHistory } from "react-router";
import { AppContext } from "context/context";

function FilmManagement() {
  const [contentSearch, setContentSearch] = useState({
    maNhom: "GP01",
    tenPhim: "",
    soTrang: 1,
    soPhanTuTrenTrang: 8,
  });
  const { showModal } = useContext(AppContext);

  const {
    dataListMovie,
    loadingListMovie,
    loadingListPhanTrang,
    dataListPhanTrang,
    errorListMovie,
    errorListPhanTrang,
    dataDeletePhim,
  } = useSelector((state) => state.FilmAdminReducer);
  //console.log(contentSearch);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleEdit = (editID) => {
    const url = `/admin/film/${editID}`;
    history.push(url);
  };
  const handleDelete = async (maPhim, isList) => {
    //console.log(isList);
    dispatch(deletePhimAction(maPhim, showModal));
    if (isList) {
      dispatch(getDanhSachPhimAction());
    }
  };

  const handleSearch = ({ maNhom, tenPhim, soTrang, soPhanTuTrenTrang }) => {
    setContentSearch({
      ...contentSearch,
      maNhom,
      tenPhim,
      soTrang,
      soPhanTuTrenTrang,
    });
  };
  useEffect(() => {
    dispatch(getDanhSachPhimAction(contentSearch.maNhom));
  }, [contentSearch.maNhom]);
  useEffect(() => {
    const { maNhom, tenPhim, soTrang, soPhanTuTrenTrang } = contentSearch;
    const validMaNhom = maNhom.trim().toUpperCase();
    // const validTuNgay = encodeURIComponent(tuNgay);
    // const validDenNgay = encodeURIComponent(denNgay);
    const validTenPhim = encodeURIComponent(tenPhim);
    dispatch(
      getListPhanTrangAction(
        validMaNhom,
        validTenPhim,
        soTrang,
        soPhanTuTrenTrang
      )
    );
  }, [contentSearch, dataDeletePhim]);
  if (errorListMovie || errorListPhanTrang) {
    return (
      <div>
        {errorListMovie} {errorListPhanTrang}
      </div>
    );
  }
  return (
    <React.Fragment>
      {loadingListMovie && <Loading />}
      {!loadingListMovie && dataListMovie && (
        <React.Fragment>
          <FilmControl
            handleSearch={handleSearch}
            dataListMovie={dataListMovie}
            setContentSearch={setContentSearch}
            contentSearch={contentSearch}
            showModal={showModal}
          />
          {dataListPhanTrang && (
            <SearchList
              data={dataListPhanTrang}
              loadingListPhanTrang={loadingListPhanTrang}
              contentSearch={contentSearch}
              handleSearch={handleSearch}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          )}

          {/* <ListMovies
            data={dataListMovie}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          /> */}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default FilmManagement;
