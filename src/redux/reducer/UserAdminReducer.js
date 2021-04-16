const {
  GET_DANHSACH_USER_ERROR,
  GET_DANHSACH_USER_SUCCESS,
  GET_DANHSACH_USER_REQUEST,
  DELETE_NGUOIDUNG_ERROR,
  DELETE_NGUOIDUNG_SUCCESS,
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
  GET_THONGTIN_USER_REQUEST,
  GET_THONGTIN_USER_SUCCESS,
  GET_THONGTIN_USER_ERROR,
} = require("constant/UserAdminActionType");

const initState = {
  loadingListUser: true,
  loadingDSUser: true,
  loadingUpdateUser: true,
  loadingDeleteUser: true,
  loadingPostUser: true,
  loadingThongTinUser: true,
  dataThongTinUser: null,
  dataListUser: null,
  dataDSUser: null,
  dataUpdateUser: null,
  dataDeleteUser: null,
  dataPostUser: null,
  errorThongTinUser: null,
  errorListUser: null,
  errorDSUser: null,
  errorUpdateUser: null,
  errorPostUser: null,
  errorDeleteUser: null,
};

const UserAdminReducer = (state = initState, action) => {
  switch (action.type) {
    /**
     * GET THONG TIN USER
     */
    case GET_THONGTIN_USER_REQUEST:
      return {
        ...state,
        loadingThongTinUser: true,
      };
    case GET_THONGTIN_USER_SUCCESS:
      return {
        ...state,
        loadingThongTinUser: false,
        dataThongTinUser: action.payload,
      };
    case GET_THONGTIN_USER_ERROR:
      return {
        ...state,
        loadingThongTinUser: false,
        errorThongTinUser: action.payload,
      };
    /**get danh dsach userphantran */
    case GET_LISTUSER_PHANTRANG_REQUEST:
      return {
        ...state,
        loadingListUser: true,
      };
    case GET_LISTUSER_PHANTRANG_SUCCESS:
      return {
        ...state,
        loadingListUser: false,
        dataListUser: action.payload,
      };
    case GET_LISTUSER_PHANTRANG_ERROR:
      return {
        ...state,
        loadingListUser: false,
        errorListUser: action.payload,
      };
    /**update user */
    case UPDATE_THONGTIN_USER_REQUEST:
      return {
        ...state,
        loadingUpdateUser: true,
      };
    case UPDATE_THONGTIN_USER_SUCCESS:
      return {
        ...state,
        loadingUpdateUser: false,
        dataUpdateUser: action.payload,
      };
    case UPDATE_THONGTIN_USER_ERROR:
      return {
        ...state,
        loadingUpdateUser: false,
        errorUpdateUser: action.payload,
      };
    /**add user */
    case POST_THEM_NGUOIDUNG_REQUEST:
      return {
        ...state,
        loadingPostUser: true,
      };
    case POST_THEM_NGUOIDUNG_SUCCESS:
      return {
        ...state,
        loadingPostUser: false,
        dataPostUser: action.payload,
      };
    case POST_THEM_NGUOIDUNG_ERROR:
      return {
        ...state,
        loadingPostUser: false,
        errorPostUser: action.payload,
      };
    /**
     * delete user
     */
    case DELETE_NGUOIDUNG_REQUEST:
      return {
        ...state,
        loadingDeleteUser: true,
      };
    case DELETE_NGUOIDUNG_SUCCESS:
      return {
        ...state,
        loadingDeleteUser: false,
        dataDeleteUser: action.payload,
      };
    case DELETE_NGUOIDUNG_ERROR:
      return {
        ...state,
        loadingDeleteUser: false,
        errorDeleteUser: action.payload,
      };
    /**
     * get loai user
     */
    case GET_DANHSACH_USER_REQUEST:
      return {
        ...state,
        loadingDSUser: true,
      };
    case GET_DANHSACH_USER_SUCCESS:
      return {
        ...state,
        dataDSUser: action.payload,
        loadingDSUser: false,
      };
    case GET_DANHSACH_USER_ERROR:
      return {
        ...state,
        loadingDSUser: false,
        errorDSUser: action.payload,
      };
    default:
      return state;
  }
};

export default UserAdminReducer;
