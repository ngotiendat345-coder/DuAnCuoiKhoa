import {
  CHANGE_RAP_DETAIL,
  GET_CHITIET_API,
  GET_API_ERROR,
  GET_DATA_CHITIET_PHIM,
  UPDATE_DETAIL_RAP,
} from "constant/ListActionType";


const initState = {
  heThongRapChieu: [],
  currentHeThong: null,
  detailHeThongRap: null,
  cumRapChieu: [],
  listNgayChieu: [],
  logo: "",
  data: {},
  loading: false,
  error:false,
};

const DetailReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DATA_CHITIET_PHIM:
      const { data, heThongRapChieu } = action.payload;
      const tempCurrentHeThong = heThongRapChieu[0].maHeThongRap;
      console.log(data, heThongRapChieu);
      return {
        ...state,
        data: data,
        heThongRapChieu: heThongRapChieu,
        loading: false,
        currentHeThong: tempCurrentHeThong,
      };
    case GET_CHITIET_API:
      return { ...state, loading: true };
    case CHANGE_RAP_DETAIL:
      //console.log('zz2')
      return { ...state, currentHeThong: action.payload };
    case UPDATE_DETAIL_RAP:
      const { cumRapChieu, listNgayChieu, logo } = action.payload;

      return {
        ...state,
        cumRapChieu: cumRapChieu,
        listNgayChieu: listNgayChieu,
        logo,
      };
    case GET_API_ERROR:
      return{...state,error:true,loading:false};
    default:
      return state;
  }
};

export default DetailReducer;
