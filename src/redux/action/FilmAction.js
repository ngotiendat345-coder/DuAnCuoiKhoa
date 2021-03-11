import filmAPI from "api/filmAPI";
import {
  GET_CHITIET_API,
  CHANGE_MA_HE_THONG,
  GET_DATA_CUMRAP,
  GET_LISTMOVIE_REQUEST,
  GET_LISTMOVIE_SUCCESS,
  GET_DATA_API,
  GET_DATA_CHITIET_PHIM,
  GET_API_ERROR,
} from "constant/ListActionType";

export const getListMovie = () => {
  return async (dispatch) => {
    dispatch({ type: GET_LISTMOVIE_REQUEST });
    try {
      const response = await filmAPI.getAll();
      const newArray = Array.from(
        { length: Math.ceil(response.length / 8) },
        (_, index) => {
          let start = index * 8;
          return response.slice(start, start + 8);
        }
      );
      const responseSapChieu = await filmAPI.getSapChieu();

      const sapChieuArray = Array.from(
        { length: Math.ceil(responseSapChieu.length / 8) },
        (_, index) => {
          let start = index * 8;
          return responseSapChieu.slice(start, start + 8);
        }
      );
      console.log(newArray, sapChieuArray);
      dispatch({
        type: GET_LISTMOVIE_SUCCESS,
        payload: {
          dangChieu: newArray,
          sapChieu: sapChieuArray,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const changeHeThong = (maHeThong) => {
  return {
    type: CHANGE_MA_HE_THONG,
    payload: maHeThong,
  };
};
export const getFullHeThongRap = (currentHeThong) => {
  return async (dispatch) => {
    dispatch({ type: GET_DATA_API });
    try {
      const responseHeThongRap = await filmAPI.getHeThongRap();
      const index = !currentHeThong ? 0 : currentHeThong;
      let maHeThongRap = !index
        ? responseHeThongRap[index].maHeThongRap
        : currentHeThong;

      const response3 = await filmAPI.getThongTinLichChieu(maHeThongRap);
      console.log(response3, responseHeThongRap);
      dispatch({
        type: GET_DATA_CUMRAP,
        payload: {
          heThongRap: responseHeThongRap,
          danhSachCumRap: response3[0],
          currentHeThong: maHeThongRap,
        },
      });
      // console.log(response3)
    } catch (err) {
      console.log(err);
    }
  };
};
export const getDataChiTietPhim = (maPhim) => {
  return async (dispatch) => {
    dispatch({ type: GET_CHITIET_API });
    try {
      const response = await filmAPI.getRapChieu(maPhim);
      const { heThongRapChieu } = response;
      console.log(response)
      if(heThongRapChieu.length <1){
        dispatch({type:GET_API_ERROR});
      }
      
      else{
        dispatch({
          type: GET_DATA_CHITIET_PHIM,
          payload: { data: response, heThongRapChieu },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
