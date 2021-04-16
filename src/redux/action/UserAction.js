import axiosClient from "api/axiosClient";
import userAPI, { dangKy, dangNhap } from "api/userAPI";
import {
  DANGKY_REQUEST,
  DANGKY_REQUEST_ERROR,
  DANGKY_REQUEST_SUCCESS,
  DANGNHAP_REQUEST,
  DANGNHAP_REQUEST_ERROR,
  DANGNHAP_REQUEST_SUCCESS,
} from "constant/UserActionType";

const dangNhapRequest = () => {
  return { type: DANGNHAP_REQUEST };
};

const dangNhapThanhCong = (data) => {
  return { type: DANGNHAP_REQUEST_SUCCESS, payload: data };
};
const dangNhapThatBai = (res) => {
  if (res && res.data) {
    return {
      type: DANGNHAP_REQUEST_ERROR,
      payload: res.data,
    };
  }
  return {
    type: DANGNHAP_REQUEST_ERROR,
    payload: res,
  };
};

const dangKyRequest = () => {
  return { type: DANGKY_REQUEST };
};

const dangKyThanhCong = (data) => {
  return {
    type: DANGKY_REQUEST_SUCCESS,
    payload: data,
  };
};

const dangKyThatBai = (res) => {
  if (res && res.data) {
    return {
      type: DANGKY_REQUEST_ERROR,
      payload: res.data,
    };
  }
  return {
    type: DANGKY_REQUEST_ERROR,
    payload: res,
  };
};

export const dangKyActionCreator = (user, showModal) => {
  return (dispatch) => {
    dispatch(dangKyRequest());
    dangKy(user)
      .then((res) => {
        dispatch(dangKyThanhCong(res));
        showModal("Đăng ký thành công", "success");
      })
      .catch(({ response }) => {
        dispatch(dangKyThatBai(response));
        showModal(response.data, "error");
      });
  };
};

export const dangNhapActionCreator = (user, history, pathname, showModal) => {
  console.log(user);
  return (dispatch) => {
    dispatch(dangNhapRequest());
    dangNhap(user)
      .then((res) => {
        // console.log(res);
        if (res.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("UserAdmin", JSON.stringify(res));
          axiosClient.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.accessToken}`;
        }
        if (res.maLoaiNguoiDung !== "QuanTri" && pathname === "/auth") {
          showModal("Không đủ quyền truy cập", "error");
          history.replace("/");
          return;
        }
        localStorage.setItem("UserAccount", JSON.stringify(res));
        axiosClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.accessToken}`;
        //console.log(res);
        dispatch(dangNhapThanhCong(res));
        history.replace(pathname);
      })
      .catch(({ response }) => {
        dispatch(dangNhapThatBai(response));
        showModal(response.data, "error");
      });
  };
};
