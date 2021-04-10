import {
  REQUEST_BOOKING,
  REQUEST_DAT_VE_FAILURE,
  REQUEST_DAT_VE_SUCCESS,
  REQUEST_DAT_VE,
  REQUEST_BOOKING_SUCCESS,
  REQUEST_BOOKING_FAILURE,
  CHON_GHE,
  CHON_COMBO,
  THANH_TOAN,
  HUY_GHE,
} from "constant/BookingActionType";

const initState = {
  loadingBooking: true,
  loadingDatVe: true,
  dataBooking: null,
  errorBooking: null,
  dataDatve: null,
  errorDatve: null,
  gheDaDat: [],
  comboChoose: null,
};

const BookingReducer = (state = initState, action) => {
  switch (action.type) {
    case THANH_TOAN:
      return {
        ...state,
        gheDaDat: [],
        comboChoose: null,
        dataDatve: null,
        errorDatve: null,
      };
    case CHON_GHE:
      const cloneGheDatDat = [...state.gheDaDat];
      cloneGheDatDat.push(action.payload);
      return {
        ...state,
        gheDaDat: cloneGheDatDat,
      };
    case HUY_GHE:
      const index = state.gheDaDat.filter(
        (item) => item.maGhe !== action.payload.maGhe
      );

      return {
        ...state,
        gheDaDat: index,
      };
    case CHON_COMBO:
      return {
        ...state,
        comboChoose: action.payload,
      };
    case REQUEST_BOOKING:
      return {
        ...state,
        loadingBooking: true,
      };
    case REQUEST_BOOKING_SUCCESS:
      return {
        ...state,
        loadingBooking: false,
        dataBooking: action.payload,
      };
    case REQUEST_BOOKING_FAILURE:
      return {
        ...state,
        loadingBooking: false,
        errorBooking: action.payload,
      };
    case REQUEST_DAT_VE:
      return {
        ...state,
        loadingDatVe: true,
      };
    case REQUEST_DAT_VE_SUCCESS:
      return {
        ...state,
        loadingDatVe: false,
        dataDatve: action.payload,
      };
    case REQUEST_DAT_VE_FAILURE:
      return {
        ...state,
        loadingDatVe: false,
        errorDatve: action.payload,
      };
    default:
      return state;
  }
};

export default BookingReducer;
// case REQUEST_API_BOOKING:
//     return { ...state, loading: true };
//   case REQUEST_BOOKING_SUCCESS:
//     const { danhSachGhe, thongTinPhim } = action.payload;
//     return {
//       ...state,
//       danhSachGhe: danhSachGhe,
//       thongTinPhim: thongTinPhim,
//       loading: false,
//     };
//   case REQUEST_BOOKING_FAILURE:
//     //  console.log(action.payload)
//     return { ...state, error: true, checkOut: false };
//   case SET_CHECKOUT:
//     return { ...state, checkOut: false };
//   case REQUEST_DAT_VE:
//     return { ...state, loading: false, checkOut: true };
