import {
  fetchChiTietPhim,
  fetchChiTietRap,
  fetchCumrap,
  fetchDanhSachHeThong,
} from "api/filmAPI";

const {
  REQUEST_CUMRAP,
  FETCH_HE_THONG,
  FETCH_DANHSACH_HETHONG,
  FETCH_CHITIET_HETHONG,
  FETCH_HETHONG_ERROR,
  CHANGE_HETHONG,
  CHANGE_ACTIVE_RAP,
  CHANGE_DS_CUMRAP,
  GET_DETAIL_HETHONG_REQUEST,
  GET_DETAIL_HETHONG_SUCCESS,
  GET_DETAIL_HETHONG_ERROR,
  CHANGE_CURRENT_DETAIL_HETHONG,
} = require("constant/CumRapActionType");
function loadingDetailHeThongRequest() {
  return {
    type: GET_DETAIL_HETHONG_REQUEST,
  };
}
export function changeCurrentDetailHeThong(maCumRap) {
  return {
    type: CHANGE_CURRENT_DETAIL_HETHONG,
    payload: maCumRap,
  };
}
function loadingDetaiHeThongSuccess(data) {
  return {
    type: GET_DETAIL_HETHONG_SUCCESS,
    payload: data,
  };
}
function loadingDetailHeThongError(message) {
  return {
    type: GET_DETAIL_HETHONG_ERROR,
    payload: message,
  };
}
function fetchHeThong() {
  return {
    type: FETCH_HE_THONG,
  };
}
function fetchDSHeThongAction(data) {
  return {
    type: FETCH_DANHSACH_HETHONG,
    payload: data,
  };
}
function fetchDanhSachCumRap(data) {
  return {
    type: FETCH_CHITIET_HETHONG,
    payload: data,
  };
}

function fetchHeThongError(message) {
  return {
    type: FETCH_HETHONG_ERROR,
    message,
  };
}
export function changeHeThong(heThong) {
  return {
    type: CHANGE_HETHONG,
    payload: heThong,
  };
}
export function changeDanhSachCumRap() {
  return {
    type: CHANGE_DS_CUMRAP,
  };
}
export function changeActiveRap(rap) {
  return {
    type: CHANGE_ACTIVE_RAP,
    payload: rap,
  };
}
export function getInitialHeThong() {
  return (dispatch, getState) => {
    dispatch(fetchHeThong());
    fetchDanhSachHeThong()
      .then((res) => {
        dispatch(fetchDSHeThongAction(res));
        return Promise.all(res.map((idx) => fetchCumrap(idx.maHeThongRap)));
      })
      .then((res) => {
        const newData = res.reduce((form, item) => {
          const key = Object.keys(item);
          form[key] = item[key];
          return form;
        }, {});
        dispatch(fetchDanhSachCumRap(newData));
      })
      .catch(({ message }) => dispatch(fetchHeThongError(message)));
  };
}
export function getDetailHeThong(heThong) {
  //console.log("zzz");
  return (dispatch) => {
    dispatch(loadingDetailHeThongRequest());
    fetchChiTietRap(heThong)
      .then((res) => dispatch(loadingDetaiHeThongSuccess(res)))
      .catch(({ message }) => dispatch(loadingDetailHeThongError(message)));
  };
}
// fetchChiTietPhim(maPhim, heThong)
//   .then((res) => dispatch(loadingDetaiHeThongSuccess(res)))
//   .catch(({ message }) => dispatch(loadingDetailHeThongError(message)));
