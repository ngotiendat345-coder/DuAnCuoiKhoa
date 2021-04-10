import bookingAPI, { datVe, layDanhSachPhongVe } from "api/bookingAPI";
import {
  CHON_COMBO,
  CHON_GHE,
  HUY_GHE,
  REQUEST_BOOKING,
  REQUEST_BOOKING_FAILURE,
  REQUEST_BOOKING_SUCCESS,
  REQUEST_DAT_VE,
  REQUEST_DAT_VE_FAILURE,
  REQUEST_DAT_VE_SUCCESS,
  THANH_TOAN,
} from "constant/BookingActionType";
export const thanhToan = () => {
  return {
    type: THANH_TOAN,
  };
};
export const chonGhe = (ghe) => {
  return {
    type: CHON_GHE,
    payload: ghe,
  };
};
export const huyGhe = (ghe) => {
  return {
    type: HUY_GHE,
    payload: ghe,
  };
};
export const chonCombo = (combo) => {
  return {
    type: CHON_COMBO,
    payload: combo,
  };
};
const requestBooking = () => {
  return {
    type: REQUEST_BOOKING,
  };
};
const requestBookingFailure = (message) => {
  return {
    type: REQUEST_BOOKING_FAILURE,
    payload: message,
  };
};
const requestBookingSuccess = (data) => {
  return {
    type: REQUEST_BOOKING_SUCCESS,
    payload: data,
  };
};
const requestDatVe = () => {
  return {
    type: REQUEST_DAT_VE,
  };
};
const requestDatVeSuccess = (data) => {
  return {
    type: REQUEST_DAT_VE_SUCCESS,
    payload: data,
  };
};
const requestDatVeError = (message) => {
  return {
    type: REQUEST_DAT_VE_FAILURE,
    payload: message,
  };
};
export const getDanhSachPhongVe = (maLichChieu) => {
  return (dispatch) => {
    dispatch(requestBooking());
    layDanhSachPhongVe(maLichChieu)
      .then((res) => dispatch(requestBookingSuccess(res)))
      .catch(({ response }) => dispatch(requestBookingFailure(response.data)));
  };
};

export const postDatVeAction = (obj, showModal, history) => {
  return (dispatch) => {
    dispatch(requestDatVe());
    datVe(obj)
      .then((res) => {
        dispatch(requestDatVeSuccess(res));
        showModal("Đặt vé thành công !", "success");
        setTimeout(() => {
          history.replace({
            pathname: "/checkout/ketqua",
            state: { data: obj },
          });
        }, 1500);
      })
      .catch(({ response }) => {
        dispatch(requestDatVeError(response.data));
        showModal(response.data, "error");
        setTimeout(() => {
          history.replace("/checkout/combo");
        }, 1500);
      });
  };
};
// export const getDanhSachPhongVe = (maLichChieu) => {
//   return async (dispatch) => {
//     try {
//       const response = await bookingAPI.layDanhSachPhongVe(maLichChieu);
//       console.log(response);
//       dispatch({ type: REQUEST_BOOKING_SUCCESS, payload: response });
//     } catch (err) {
//       console.log(err);
//       dispatch({ type: REQUEST_BOOKING_FAILURE, payload: err });
//     }
//   };
// };

// export const requestDatVe = (obj) => {
//   return async (dispatch) => {
//     dispatch({ type: REQUEST_API_BOOKING });
//     try {
//       const response = await bookingAPI.datVe(obj);

//       const ghe = obj.danhSachVe;
//       console.log(ghe, response);

//       dispatch({ type: REQUEST_DAT_VE, payload: ghe });
//     } catch (err) {}
//   };
// };
