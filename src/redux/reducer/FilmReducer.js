import {
  GET_LISTMOVIE_REQUEST,
  GET_LISTMOVIE_SUCCESS,
  GET_LISTMOVIE_ERROR,
  GET_SAPCHIEU_REQUEST,
  CHANGE_SAPCHIEU,
  REMOVE_FILM_ERROR,
} from "constant/ListActionType";

const initState = {
  loading: true,
  danhSachPhim: null,
  danhSachSapChieu: null,
  isSapChieu: false,
  error: null,
};

const FilmReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LISTMOVIE_REQUEST:
      return { ...state, loading: true };
    case GET_SAPCHIEU_REQUEST:
      //console.log(action.payload);
      return {
        ...state,
        danhSachSapChieu: action.payload,
        isSapChieu: true,
        loading: false,
      };
    case REMOVE_FILM_ERROR:
      //console.log(action.payload);
      if (state.isSapChieu) {
        return {
          ...state,
          danhSachSapChieu: state.danhSachSapChieu.filter(
            (item) => item.maPhim !== action.payload
          ),
          loading: false,
        };
      }
      return {
        ...state,
        danhSachPhim: state.danhSachPhim.filter(
          (item) => item.maPhim !== action.payload
        ),
        loading: false,
      };
    case GET_LISTMOVIE_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        danhSachPhim: action.payload,
        loading: false,
        isSapChieu: false,
      };
    case GET_LISTMOVIE_ERROR:
      return {
        ...state,
        error: action.message,
        loading: false,
      };
    case CHANGE_SAPCHIEU:
      return {
        ...state,
        isSapChieu: action.payload,
      };
    default:
      return state;
  }
};

export default FilmReducer;
