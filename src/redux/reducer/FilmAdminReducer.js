import {
  DELETE_PHIM_ADMIN_ERROR,
  DELETE_PHIM_ADMIN_REQUEST,
  DELETE_PHIM_ADMIN_SUCCESS,
  GET_LISTMOVIE_ADMIN_ERROR,
  GET_LISTMOVIE_ADMIN_REQUEST,
  GET_LISTMOVIE_ADMIN_SUCCESS,
  GET_LIST_PHANTRANG_ADMIN_ERROR,
  GET_LIST_PHANTRANG_ADMIN_REQUEST,
  GET_LIST_PHANTRANG_ADMIN_SUCCESS,
  UPDATE_PHIM_ADMIN_ERROR,
  UPDATE_PHIM_ADMIN_REQUEST,
  UPDATE_PHIM_ADMIN_SUCCESS,
} from "constant/AdminActionType";

const initState = {
  loadingPostPhim: true,
  loadingListPhanTrang: true,
  loadingUpdatePhim: true,
  loadingListMovie: true,
  loadingDeletePhim: true,
  dataDeletePhim: null,
  dataPostPhim: null,
  dataListPhanTrang: null,
  dataUpdatePhim: null,
  dataListMovie: null,
  errorDeletePhim: null,
  errorPostPhim: null,
  errorListPhanTrang: null,
  errorUpdatePhim: null,
  errorListMovie: null,
};

const FilmAdminReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LISTMOVIE_ADMIN_REQUEST:
      return {
        ...state,
        loadingListMovie: true,
      };
    case GET_LISTMOVIE_ADMIN_SUCCESS:
      return {
        ...state,
        loadingListMovie: false,
        dataListMovie: action.payload,
      };
    case GET_LISTMOVIE_ADMIN_ERROR:
      return {
        ...state,
        loadingListMovie: false,
        errorListMovie: action.payload,
      };
    case GET_LIST_PHANTRANG_ADMIN_REQUEST:
      return {
        ...state,
        loadingListPhanTrang: true,
      };
    case GET_LIST_PHANTRANG_ADMIN_SUCCESS:
      return {
        ...state,
        loadingListPhanTrang: false,
        dataListPhanTrang: action.payload,
      };
    case GET_LIST_PHANTRANG_ADMIN_ERROR:
      return {
        ...state,
        loadingListPhanTrang: false,
        dataListPhanTrang: action.payload,
      };
    case UPDATE_PHIM_ADMIN_REQUEST:
      return {
        ...state,
        loadingUpdatePhim: true,
      };
    case UPDATE_PHIM_ADMIN_SUCCESS:
      return {
        ...state,
        loadingUpdatePhim: false,
        dataUpdatePhim: action.payload,
      };
    case UPDATE_PHIM_ADMIN_ERROR:
      return {
        ...state,
        loadingUpdatePhim: false,
        errorUpdatePhim: action.payload,
      };
    case DELETE_PHIM_ADMIN_REQUEST:
      return {
        ...state,
        dataDeletePhim: null,
        errorDeletePhim: null,
        loadingDeletePhim: true,
      };
    case DELETE_PHIM_ADMIN_SUCCESS:
      return {
        ...state,
        loadingDeletePhim: false,
        dataDeletePhim: action.payload,
      };
    case DELETE_PHIM_ADMIN_ERROR:
      return {
        ...state,
        loadingDeletePhim: false,
        errorDeletePhim: action.payload,
      };
    default:
      return state;
  }
};

export default FilmAdminReducer;
