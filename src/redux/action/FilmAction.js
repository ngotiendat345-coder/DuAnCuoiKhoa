import filmAPI from "api/filmAPI";
import { fetchListFilm } from "api/filmAPI";
import {
  GET_LISTMOVIE_REQUEST,
  GET_LISTMOVIE_SUCCESS,
  GET_LISTMOVIE_ERROR,
  GET_SAPCHIEU_REQUEST,
  CHANGE_SAPCHIEU,
  REMOVE_FILM_ERROR,
} from "constant/ListActionType";

function fetchFilms() {
  return {
    type: GET_LISTMOVIE_REQUEST,
  };
}
export function changeSapChieu(value) {
  return {
    type: CHANGE_SAPCHIEU,
    payload: value,
  };
}
function fechSapChieuFilm(data) {
  console.log(data);
  return {
    type: GET_SAPCHIEU_REQUEST,
    payload: data,
  };
}
function fetchFilmSucces(data) {
  return {
    type: GET_LISTMOVIE_SUCCESS,
    payload: data,
  };
}
function fetchFilmError(message) {
  return {
    type: GET_LISTMOVIE_ERROR,
    error: message,
  };
}
export function removeFilmError(maPhim) {
  return (dispatch) => {
    dispatch(fetchFilms);
    dispatch({
      type: REMOVE_FILM_ERROR,
      payload: maPhim,
    });
  };
}
export const fetchDataFilm = (type = "top") => {
  //console.log(type);
  return (dispatch) => {
    dispatch(fetchFilms());
    fetchListFilm(type)
      .then((res) => {
        console.log(res);
        if (type === "top") {
          dispatch(fetchFilmSucces(res));
        } else {
          // console.log("???/");
          dispatch(fechSapChieuFilm(res));
        }
      })
      .catch(({ message }) => dispatch(fetchFilmError(message)));
  };
};
// export const getListMovie = () => {
//   return async (dispatch) => {
//     dispatch({ type: GET_LISTMOVIE_REQUEST });
//     try {
//       const response = await filmAPI.getAll();
//       const newArray = Array.from(
//         { length: Math.ceil(response.length / 8) },
//         (_, index) => {
//           let start = index * 8;
//           return response.slice(start, start + 8);
//         }
//       );
//       const responseSapChieu = await filmAPI.getSapChieu();

//       const sapChieuArray = Array.from(
//         { length: Math.ceil(responseSapChieu.length / 8) },
//         (_, index) => {
//           let start = index * 8;
//           return responseSapChieu.slice(start, start + 8);
//         }
//       );
//       console.log(newArray, sapChieuArray);
//       dispatch({
//         type: GET_LISTMOVIE_SUCCESS,
//         payload: {
//           dangChieu: newArray,
//           sapChieu: sapChieuArray,
//         },
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
// export const changeHeThong = (maHeThong) => {
//   return {
//     type: CHANGE_MA_HE_THONG,
//     payload: maHeThong,
//   };
// };
// export const getFullHeThongRap = (currentHeThong) => {
//   return async (dispatch) => {
//     dispatch({ type: GET_DATA_API });
//     try {
//       const responseHeThongRap = await filmAPI.getHeThongRap();
//       const index = !currentHeThong ? 0 : currentHeThong;
//       let maHeThongRap = !index
//         ? responseHeThongRap[index].maHeThongRap
//         : currentHeThong;

//       const response3 = await filmAPI.getThongTinLichChieu(maHeThongRap);
//       console.log(response3, responseHeThongRap);
//       dispatch({
//         type: GET_DATA_CUMRAP,
//         payload: {
//           heThongRap: responseHeThongRap,
//           danhSachCumRap: response3[0],
//           currentHeThong: maHeThongRap,
//         },
//       });
//       // console.log(response3)
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
// export const getDataChiTietPhim = (maPhim) => {
//   return async (dispatch) => {
//     dispatch({ type: GET_CHITIET_API });
//     try {
//       const response = await filmAPI.getRapChieu(maPhim);
//       const { heThongRapChieu } = response;
//       console.log(response)
//       if(heThongRapChieu.length <1){
//         dispatch({type:GET_API_ERROR});
//       }

//       else{
//         dispatch({
//           type: GET_DATA_CHITIET_PHIM,
//           payload: { data: response, heThongRapChieu },
//         });
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
