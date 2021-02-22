import filmAPI from "api/filmAPI"
import {GET_CHITIET_API, CHANGE_MA_HE_THONG, GET_DATA_CUMRAP, GET_LISTMOVIE_REQUEST, GET_LISTMOVIE_SUCCESS ,GET_DATA_API,GET_DATA_CHITIET_PHIM} from "constant/ListActionType"

export const getListMovie=()=>{
    return async(dispatch)=>{
      dispatch({type:GET_LISTMOVIE_REQUEST})
        try{
            const response = await filmAPI.getAll()
            const newArray = Array.from({length:5},(_,index)=>{
              let start = index*10;
              return response.slice(start,start+8);
            })
            const sapChieuArray = Array.from({length:5},(_,index)=>{
              let start = index*10 +40;
              return response.slice(start,start+8);
            })
            dispatch({
                    type:GET_LISTMOVIE_SUCCESS,
                    payload:{
                      dangChieu:newArray,
                      sapChieu:sapChieuArray
                    }   
                })
          }
          catch(err){
            console.log(err)
          }
    }
}
export const changeHeThong=(maHeThong)=>{
    return {
      type:CHANGE_MA_HE_THONG,
      payload:maHeThong
    }
}
export const getFullHeThongRap=(maHeThong)=>{
  return async(dispatch)=>{
    dispatch({type:GET_DATA_API})
      try{
        const response1 = await filmAPI.getHeThongRap();
        const response3 = await filmAPI.getThongTinLichChieu(maHeThong);
        dispatch({
          type: GET_DATA_CUMRAP,
          payload: {
            dsCumRap: response1,
            heThongRap: response3
          }
        })
       // console.log(response3)
      }
      catch(err){
        console.log(err)
      }
        
  }
}
export const getDataChiTietPhim=(maPhim)=>{
  return async(dispatch)=>{
    dispatch({type:GET_CHITIET_API})
    try{
      const response = await filmAPI.getChiTietPhim(maPhim);
      const response2 = await filmAPI.getHeThongRap();
      const {lichChieu} = response;
      console.log(response);
      dispatch({
        type: GET_DATA_CHITIET_PHIM,
        payload: {
          data: response,
          lichChieu: lichChieu,
          dsCumRap:response2
        }
      })
    }
    catch(err){
      console.log(err)
    }
  }
}