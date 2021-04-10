const {
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
} = require("constant/CumRapActionType");

const initState = {
  danhSachHeThong: null,
  danhSachCumgRap: null,
  loadingHeThong: true,
  loadingCumRap: true,
  error: null,
  currentHeThong: null,
  activeRap: null,
  currentCumRap: null,
  loadingDetailHeThong: true,
  dataDetailHeThong: null,
  errorDetailHeThong: null,
};

const HeThongRapReducer = (state = initState, action) => {
  switch (action.type) {
    /**
     * FETCH chi tiết hệ thống rạp ,ngày xem,cụm
     */
    case GET_DETAIL_HETHONG_REQUEST:
      return {
        ...state,
        loadingDetailHeThong: true,
      };
    case GET_DETAIL_HETHONG_SUCCESS:
      return {
        ...state,
        dataDetailHeThong: action.payload,
        loadingDetailHeThong: false,
        errorDetailHeThong: null,
      };
    case GET_DETAIL_HETHONG_ERROR:
      return {
        ...state,
        errorDetailHeThong: action.payload,
        loadingDetailHeThong: false,
      };
    // case CHANGE_CURRENT_DETAIL_HETHONG:
    //   return {
    //     ...state,
    //     currentDetailHeThong: action.payload,
    //   };
    /**
     * FETCH tên hệ thống danh sách , xác định active hệ thống,ACTIVE cụm rạp,danh sách cụm rạp
     */
    case FETCH_HE_THONG:
      return {
        ...state,
        loadingHeThong: true,
        loadingCumRap: true,
      };
    case FETCH_DANHSACH_HETHONG:
      const hethong = action.payload[0].maHeThongRap;
      return {
        ...state,
        loadingHeThong: false,
        danhSachHeThong: action.payload,
        currentHeThong: hethong,
      };
    case FETCH_CHITIET_HETHONG:
      //console.log(cumrap);
      const target = action.payload[state.currentHeThong];
      const activeRap = target[0].maCumRap;
      return {
        ...state,
        loadingCumRap: false,
        danhSachCumgRap: action.payload,
        activeRap: activeRap,
        currentCumRap: target,
      };
    case FETCH_HETHONG_ERROR:
      return {
        ...state,
        loadingHeThong: false,
        error: action.message,
      };
    /**
     * THAY ĐỔI HỆ THỐNG
     */
    case CHANGE_HETHONG:
      return {
        ...state,
        currentHeThong: action.payload,
      };
    /**
     * THAY ĐỔI CỤM RẠP ĐANG ACTIVE
     */
    case CHANGE_ACTIVE_RAP:
      return {
        ...state,
        activeRap: action.payload,
      };
    /**
     * khi mà hệ thống bị thay đổi thì useeeffect theo
     */
    case CHANGE_DS_CUMRAP:
      const dsCumRap = state.danhSachCumgRap[state.currentHeThong];
      const active = dsCumRap[0].maCumRap;
      return {
        ...state,
        activeRap: active,
        currentCumRap: dsCumRap,
      };
    default:
      return state;
  }
};
export default HeThongRapReducer;
// import {
//   GET_DATA_CUMRAP,
//   CHANGE_MA_HE_THONG,
//   GET_DATA_API,
//   GET_DATA_CHITIET_PHIM,
//   CHANGE_RAP,
//   UPDATE_LIST_PHIM,
// } from "constant/ListActionType";

// const initState = {
//   currentHeThong: null,
//   currentRap: null,
//   heThongRap: [],
//   danhSachCumRap: {},
//   danhSachPhim:[],
//   loading: true,
// };

// const CumRapReducer = (state = initState, action) => {
//   switch (action.type) {
//     case GET_DATA_API:
//       return { ...state, loading: true };
//     case GET_DATA_CUMRAP:
//       const { danhSachCumRap, heThongRap, currentHeThong } = action.payload;
//       const {maCumRap} = danhSachCumRap.lstCumRap[0]
//       //console.log(action.payload)
//       return {
//         ...state,
//         heThongRap: heThongRap,
//         danhSachCumRap: danhSachCumRap,
//         currentHeThong: currentHeThong,
//         currentRap:maCumRap,
//         loading: false,
//       };
//     case CHANGE_MA_HE_THONG:
//       return { ...state, currentHeThong: action.payload };
//     case UPDATE_LIST_PHIM:
//       const target = state.danhSachCumRap.lstCumRap.find((item)=>item.maCumRap===state.currentRap);
//      // console.log(target)
//       return { ...state, danhSachPhim:target.danhSachPhim }
//     case CHANGE_RAP:
//         return { ...state, currentRap: action.payload };
//     default:
//       return state;
//   }
// };

// export default CumRapReducer;
