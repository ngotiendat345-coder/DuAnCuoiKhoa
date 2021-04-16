import React, { useContext } from "react";
import PropTypes from "prop-types";
import Vector from "assets/Vector@2x.png";
import FilmForm from "../component/FilmForm";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  postPhimAction,
  updatePhimAction,
  updatePhimWithouImageAction,
} from "redux/action/FilmAdminAction";
import { AppContext } from "context/context";
import useFetch from "hooks/useFetch";
import { convertNgatThang } from "utils/helper";
import Loading from "component/Loading";
import { Link } from "react-router-dom";

AddEditFilm.propTypes = {};

function AddEditFilm() {
  const { showModal } = useContext(AppContext);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, data, error } = useFetch(id);
  // const {loadingUpdatePhim,loadingPostPhim} = useSelector((state)=>state.FilmAdminReducer);
  const initialValues = data
    ? {
        maNhom: data.maNhom,
        tenPhim: data.tenPhim,
        trailer: data.trailer,
        moTa: data.moTa,
        ngayKhoiChieu: convertNgatThang(data.ngayKhoiChieu),
        danhGia: data.danhGia,
        hinhAnh: data.hinhAnh,
      }
    : {
        maNhom: "",
        tenPhim: "",
        trailer: "",
        moTa: "",
        ngayKhoiChieu: "",
        danhGia: "",
      };
  // console.log(data);
  const handleOnSubmit = (formData) => {
    const {
      maNhom,
      tenPhim,
      trailer,
      moTa,
      ngayKhoiChieu,
      danhGia,
      file,
    } = formData;
    //console.log(file);
    if (!file && id) {
      // console.log("zzz");

      dispatch(
        updatePhimWithouImageAction(
          {
            ...data,
            tenPhim,
            trailer,
            moTa,
            maNhom,
            ngayKhoiChieu,
            danhGia,
          },
          showModal
        )
      );
      return;
    }
    let currentfile = file[0];
    let frm = new FormData();
    console.log(formData);
    frm.append("File", currentfile, currentfile.name);
    frm.append("maNhom", maNhom);
    frm.append("tenPhim", tenPhim);
    frm.append("trailer", trailer);
    frm.append("moTa", moTa);
    frm.append("ngayKhoiChieu", ngayKhoiChieu);
    frm.append("danhGia", danhGia);

    if (id) {
      frm.append("maPhim", data.maPhim);
      dispatch(updatePhimAction(frm, showModal));
    } else {
      dispatch(postPhimAction(frm, showModal));
    }
  };

  return (
    <main>
      <Link to="/admin/film">
        <button className="addMovieBtn">Film Management</button>
      </Link>
      <div className="addEditLogo">
        <img src={Vector} style={{ height: "2rem", width: "2rem" }} />
        {id ? <h1>Edit movie</h1> : <h1>Add movie</h1>}
      </div>
      {loading && <Loading text="Fetching data" />}
      {!loading && (
        <FilmForm
          initialValues={initialValues}
          handleOnSubmit={handleOnSubmit}
          isAdding={id ? false : true}
        />
      )}
    </main>
  );
}

export default AddEditFilm;
