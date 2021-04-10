import {
  DANGKY_REQUEST,
  DANGKY_REQUEST_ERROR,
  DANGKY_REQUEST_SUCCESS,
  DANGNHAP_REQUEST,
  DANGNHAP_REQUEST_ERROR,
  DANGNHAP_REQUEST_SUCCESS,
} from "constant/UserActionType";

const initState = {
  loadingDangNhap: true,
  loadingDangKy: true,
  dataDangNhap: null,
  dataDangKy: null,
  errorDangNhap: null,
  errorDangKy: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case DANGNHAP_REQUEST:
      return {
        ...state,
        loadingDangNhap: true,
      };
    case DANGNHAP_REQUEST_SUCCESS:
      console.log("action", action.payload);
      return {
        ...state,
        loadingDangNhap: false,
        dataDangNhap: action.payload,
      };
    case DANGNHAP_REQUEST_ERROR:
      return {
        ...state,
        loadingDangNhap: false,
        errorDangNhap: action.payload,
      };
    case DANGKY_REQUEST:
      return {
        ...state,
        loadingDangKy: true,
      };
    case DANGKY_REQUEST_SUCCESS:
      return {
        ...state,
        loadingDangKy: false,
        dataDangKy: action.payload,
      };
    case DANGKY_REQUEST_ERROR:
      return {
        ...state,
        loadingDangKy: false,
        errorDangKy: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
