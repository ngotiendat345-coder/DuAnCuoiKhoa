import {
  capNhatNguoiDung,
  deleteNguoiDung,
  getDanhSachUserAdmin,
  layDanhSachLoaiNguoiDung,
  themNguoiDung,
  thongTinNguoiDung,
  timKiemNguoiDungPhanTrang,
} from "api/adminAPI";

const {
  GET_LISTUSER_PHANTRANG_REQUEST,
  GET_LISTUSER_PHANTRANG_SUCCESS,
  GET_LISTUSER_PHANTRANG_ERROR,
  UPDATE_THONGTIN_USER_REQUEST,
  UPDATE_THONGTIN_USER_SUCCESS,
  UPDATE_THONGTIN_USER_ERROR,
  POST_THEM_NGUOIDUNG_REQUEST,
  POST_THEM_NGUOIDUNG_SUCCESS,
  POST_THEM_NGUOIDUNG_ERROR,
  DELETE_NGUOIDUNG_REQUEST,
  DELETE_NGUOIDUNG_SUCCESS,
  DELETE_NGUOIDUNG_ERROR,
  GET_DANHSACH_USER_REQUEST,
  GET_DANHSACH_USER_SUCCESS,
  GET_DANHSACH_USER_ERROR,
  GET_THONGTIN_USER_REQUEST,
  GET_THONGTIN_USER_SUCCESS,
  GET_THONGTIN_USER_ERROR,
} = require("constant/UserAdminActionType");

const getListUserPhanTrangRequest = () => {
  return {
    type: GET_LISTUSER_PHANTRANG_REQUEST,
  };
};

const getListUserPhanTrangSuccess = (data) => {
  return {
    type: GET_LISTUSER_PHANTRANG_SUCCESS,
    payload: data,
  };
};

const getListUserPhanTrangError = (message) => {
  return {
    type: GET_LISTUSER_PHANTRANG_ERROR,
    payload: message,
  };
};

export const getListUserPhanTrangAction = (query, sotrang) => {
  return (dispatch) => {
    dispatch(getListUserPhanTrangRequest());
    timKiemNguoiDungPhanTrang(query, sotrang)
      .then((res) => dispatch(getListUserPhanTrangSuccess(res)))
      .catch(({ message }) => dispatch(getListUserPhanTrangError(message)));
  };
};

const updateUserRequest = () => {
  return {
    type: UPDATE_THONGTIN_USER_REQUEST,
  };
};
const updateUserSuccess = (data) => {
  return {
    type: UPDATE_THONGTIN_USER_SUCCESS,
    payload: data,
  };
};

const updateUserError = (message) => {
  return {
    type: UPDATE_THONGTIN_USER_ERROR,
    payload: message,
  };
};

export const UpdateUserAction = (data, showModal) => {
  return (dispatch) => {
    dispatch(updateUserRequest());
    capNhatNguoiDung(data)
      .then((res) => {
        console.log(res);
        showModal("Cập nhật thành công", "success");
        dispatch(updateUserSuccess(res));
      })
      .catch(({ message, response }) => {
        showModal(response.data, "error");
        console.log(response);
        dispatch(updateUserError(response.data));
      });
  };
};

const postUserRequest = () => {
  return {
    type: POST_THEM_NGUOIDUNG_REQUEST,
  };
};

const postUserSuccess = (data) => {
  return {
    type: POST_THEM_NGUOIDUNG_SUCCESS,
    payload: data,
  };
};

const postUserError = (message) => {
  return {
    type: POST_THEM_NGUOIDUNG_ERROR,
    payload: message,
  };
};

export const postUserAction = (data, showModal) => {
  return (dispatch) => {
    dispatch(postUserRequest());
    themNguoiDung(data)
      .then((res) => {
        //console.log(res);
        showModal("Thêm thành công!", "success");
        dispatch(postUserSuccess(res));
      })
      .catch(({ message, response }) => {
        // console.log(response, message);
        showModal(response.data, "error");
        dispatch(postUserError(response.data));
      });
  };
};

const deleteUserRequest = () => {
  return {
    type: DELETE_NGUOIDUNG_REQUEST,
  };
};

const deleteUserSuccess = (data) => {
  return {
    type: DELETE_NGUOIDUNG_SUCCESS,
    payload: data,
  };
};

const deletUsereError = (message) => {
  return {
    type: DELETE_NGUOIDUNG_ERROR,
    payload: message,
  };
};

export const deleteUserAction = (taiKhoan, showModal) => {
  return (dispatch) => {
    dispatch(deleteUserRequest());
    deleteNguoiDung(taiKhoan)
      .then((res) => {
        showModal("Xóa thành công", "success");
        dispatch(deleteUserSuccess(res));
      })
      .catch(({ message, response }) => {
        showModal(response.data, "error");
        //console.log(response);
        dispatch(deletUsereError(response.data));
      });
  };
};

const getDanhSachUserRequest = () => {
  return {
    type: GET_DANHSACH_USER_REQUEST,
  };
};

const getDanhSachUserSuccess = (data) => {
  return {
    type: GET_DANHSACH_USER_SUCCESS,
    payload: data,
  };
};

const getDanhSachUserError = (message) => {
  return {
    type: GET_DANHSACH_USER_ERROR,
    payload: message,
  };
};

export const getDanhSachUserAction = () => {
  return (dispatch) => {
    dispatch(getDanhSachUserRequest());
    getDanhSachUserAdmin()
      .then((res) => dispatch(getDanhSachUserSuccess(res)))
      .catch(({ message, response }) => getDanhSachUserError(message));
  };
};

const getThongTinUserRequest = () => {
  return {
    type: GET_THONGTIN_USER_REQUEST,
  };
};
const getThongTinUserSuccess = (data) => {
  return {
    type: GET_THONGTIN_USER_SUCCESS,
    payload: data,
  };
};
const getThongTinUserError = (data) => {
  return {
    type: GET_THONGTIN_USER_ERROR,
    payload: data,
  };
};
export const getThongTinUserAction = (taiKhoan) => {
  return (dispatch) => {
    dispatch(getThongTinUserRequest());
    thongTinNguoiDung({ taiKhoan })
      .then((res) => {
        console.log(res);
        dispatch(getThongTinUserSuccess(res));
      })
      .catch(({ message }) => dispatch(getThongTinUserError(message)));
  };
};
