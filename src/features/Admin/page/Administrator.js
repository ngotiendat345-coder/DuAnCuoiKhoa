import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ListIcon from "../component/ListIcon";
import AdminInfo from "../component/AdminInfo";
import ListUser from "../component/ListUser";
import { useDispatch, useSelector } from "react-redux";
import { getDanhSachUserAction } from "redux/action/UserAdminAction";
import {
  deletePhimAction,
  getDanhSachPhimAction,
} from "redux/action/FilmAdminAction";
import { useHistory } from "react-router";
import { AppContext } from "context/context";
import ListMovies from "../component/ListMovies";
import Loading from "component/Loading";

function Administrator() {
  const [page, setPage] = useState(0);
  const user = JSON.parse(localStorage.getItem("UserAdmin"));
  const history = useHistory();
  const { showModal } = useContext(AppContext);
  const dispatch = useDispatch();
  const { loadingDSUser, errorDSUser, dataDSUser } = useSelector(
    (state) => state.UserAdminReducer
  );
  const { dataListMovie, loadingListMovie, errorListMovie } = useSelector(
    (state) => state.FilmAdminReducer
  );
  //console.log(dataListMovie);
  const handleEdit = (maPhim) => {
    const url = `/admin/film/${maPhim}`;
    history.push(url);
  };
  const handlePage = (index) => {
    if (!dataListMovie) return;
    const maxPage = Math.ceil(dataListMovie.length / 8);
    let target = index;
    if (index < 0) {
      target = maxPage - 1;
    }
    if (index >= maxPage) {
      target = 0;
    }
    setPage(target);
  };
  const handleDelete = (maPhim) => {
    dispatch(deletePhimAction(maPhim, showModal));
    dispatch(getDanhSachPhimAction("GP01"));
  };
  useEffect(() => {
    dispatch(getDanhSachUserAction());
    dispatch(getDanhSachPhimAction("GP01"));
  }, []);
  return (
    <React.Fragment>
      <ListIcon />
      <section className="adminSection">
        <section className="adminSection-center listInfo">
          <AdminInfo user={user} />
          <ListUser loadingDSUser={loadingDSUser} dataDSUser={dataDSUser} />
        </section>
      </section>
      {loadingListMovie && <Loading />}
      {!loadingListMovie && dataListMovie && (
        <ListMovies
          dataListMovie={dataListMovie}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handlePage={handlePage}
          page={page}
        />
      )}
    </React.Fragment>
  );
}

export default Administrator;
