import {
  GET_DATA_CUMRAP,
  CHANGE_MA_HE_THONG,
  GET_DATA_API,
  GET_DATA_CHITIET_PHIM,
  CHANGE_RAP,
  UPDATE_LIST_PHIM,
} from "constant/ListActionType";

const initState = {
  currentHeThong: null,
  currentRap: null,
  heThongRap: [],
  danhSachCumRap: {},
  danhSachPhim:[],
  loading: true,
};

const CumRapReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DATA_API:
      return { ...state, loading: true };
    case GET_DATA_CUMRAP:
      const { danhSachCumRap, heThongRap, currentHeThong } = action.payload;
      const {maCumRap} = danhSachCumRap.lstCumRap[0]
      //console.log(action.payload)
      return {
        ...state,
        heThongRap: heThongRap,
        danhSachCumRap: danhSachCumRap,
        currentHeThong: currentHeThong,
        currentRap:maCumRap,
        loading: false,
      };
    case CHANGE_MA_HE_THONG:
      return { ...state, currentHeThong: action.payload };
    case UPDATE_LIST_PHIM:
      const target = state.danhSachCumRap.lstCumRap.find((item)=>item.maCumRap===state.currentRap);
     // console.log(target)
      return { ...state, danhSachPhim:target.danhSachPhim }
    case CHANGE_RAP:
        return { ...state, currentRap: action.payload };
    default:
      return state;
  }
};

export default CumRapReducer;
