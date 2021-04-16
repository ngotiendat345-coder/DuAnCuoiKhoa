import {
  deletePhim,
  getDanhSachPhimPhanTrang,
  getListFilmAdmin,
  postPhim,
  updatePhim,
  updatePhimWithoutImage,
} from "api/adminAPI";
import {
  GET_LISTMOVIE_ADMIN_ERROR,
  GET_LISTMOVIE_ADMIN_REQUEST,
  GET_LISTMOVIE_ADMIN_SUCCESS,
  POST_PHIM_ADMIN_ERROR,
  POST_PHIM_ADMIN_REQUEST,
  POST_PHIM_ADMIN_SUCCESS,
  UPDATE_PHIM_ADMIN_ERROR,
  UPDATE_PHIM_ADMIN_REQUEST,
  UPDATE_PHIM_ADMIN_SUCCESS,
  DELETE_PHIM_ADMIN_REQUEST,
  GET_LIST_PHANTRANG_ADMIN_REQUEST,
  GET_LIST_PHANTRANG_ADMIN_SUCCESS,
  GET_LIST_PHANTRANG_ADMIN_ERROR,
  DELETE_PHIM_ADMIN_SUCCESS,
  DELETE_PHIM_ADMIN_ERROR,
} from "constant/AdminActionType";

const getListFilmAdminRequest = () => {
  return {
    type: GET_LISTMOVIE_ADMIN_REQUEST,
  };
};
const getListFilmAdminSuccess = (data) => {
  return {
    type: GET_LISTMOVIE_ADMIN_SUCCESS,
    payload: data,
  };
};
const getListFilmError = (message) => {
  return {
    type: GET_LISTMOVIE_ADMIN_ERROR,
    payload: message,
  };
};

export const getDanhSachPhimAction = (maNhom) => {
  return (dispatch) => {
    dispatch(getListFilmAdminRequest(maNhom));
    getListFilmAdmin(maNhom)
      .then((res) => {
        console.log(res);
        dispatch(getListFilmAdminSuccess(res));
      })
      .catch(({ message }) => dispatch(getListFilmError(message)));
  };
};

const postPhimRequest = () => {
  return {
    type: POST_PHIM_ADMIN_REQUEST,
  };
};
const postPhimSuccess = (data) => {
  return {
    type: POST_PHIM_ADMIN_SUCCESS,
    payload: data,
  };
};
const postPhimError = (message) => {
  return {
    type: POST_PHIM_ADMIN_ERROR,
    payload: message,
  };
};

export const postPhimAction = (data, showModal) => {
  return (dispatch) => {
    dispatch(postPhimRequest());
    postPhim(data)
      .then((res) => {
        //console.log(res);
        showModal("Upload movie success", "success");
        dispatch(postPhimSuccess(res));
      })
      .catch(({ response }) => {
        //console.log(message, response);
        showModal(response.data, "error");
        dispatch(postPhimError(response.data));
      });
  };
};

const updatePhimRequest = () => {
  return {
    type: UPDATE_PHIM_ADMIN_REQUEST,
  };
};

const updatePhimSuccess = (data) => {
  return {
    type: UPDATE_PHIM_ADMIN_SUCCESS,
    payload: data,
  };
};

const updatePhimError = (message) => {
  return {
    type: UPDATE_PHIM_ADMIN_ERROR,
    payload: message,
  };
};
export const updatePhimWithouImageAction = (data, showModal) => {
  return (dispatch) => {
    console.log(data);
    dispatch(updatePhimRequest());
    updatePhimWithoutImage(data)
      .then((res) => {
        // console.log(res);
        showModal("Update movie success", "success");
        dispatch(updatePhimSuccess(res));
      })
      .catch(({ message, response }) => {
        //console.log(message, response);
        showModal("Update movie failed", "error");
        dispatch(updatePhimError(message));
      });
  };
};
export const updatePhimAction = (data, showModal) => {
  return (dispatch) => {
    dispatch(updatePhimRequest());
    updatePhim(data)
      .then((res) => {
        //console.log(res);
        showModal("Update movie success", "success");
        dispatch(updatePhimSuccess(res));
      })
      .catch(({ message, response }) => {
        //console.log(message, response);
        showModal("Update movie failed", "error");
        dispatch(updatePhimError(message));
      });
  };
};

const deletePhimRequest = () => {
  return {
    type: DELETE_PHIM_ADMIN_REQUEST,
  };
};
const deletePhimSuccess = (data) => {
  return {
    type: DELETE_PHIM_ADMIN_SUCCESS,
    payload: data,
  };
};
const deletePhimError = (message) => {
  return {
    type: DELETE_PHIM_ADMIN_ERROR,
    payload: message,
  };
};

export const deletePhimAction = (maPhim, showModal) => {
  return (dispatch) => {
    dispatch(deletePhimRequest());
    deletePhim(maPhim)
      .then((res) => {
        showModal("Xóa thành công", "success");
        dispatch(deletePhimSuccess(res));
      })
      .catch(({ response, message }) => {
        showModal(response.data, "error");
        dispatch(deletePhimError(message));
      });
  };
};

const getListPhanTrang = () => {
  return {
    type: GET_LIST_PHANTRANG_ADMIN_REQUEST,
  };
};
const getListPhanTrangSuccess = (data) => {
  return {
    type: GET_LIST_PHANTRANG_ADMIN_SUCCESS,
    payload: data,
  };
};
const getListPhanTrangError = (message) => {
  return {
    type: GET_LIST_PHANTRANG_ADMIN_ERROR,
    payload: message,
  };
};

export const getListPhanTrangAction = (
  maNhom,
  tenPhim,
  soTrang,
  soPhanTuTrenTrang
) => {
  return (dispatch) => {
    dispatch(getListPhanTrang());
    getDanhSachPhimPhanTrang(maNhom, tenPhim, soTrang, soPhanTuTrenTrang)
      .then((res) => {
        console.log(res);
        dispatch(getListPhanTrangSuccess(res));
      })
      .catch(({ message, response }) => {
        console.log(response);
        dispatch(getListPhanTrangError(message));
      });
  };
};
