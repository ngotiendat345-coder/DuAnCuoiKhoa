import bookingAPI from "api/bookingAPI"
import { REQUEST_BOOKING_FAILURE, REQUEST_BOOKING_SUCCESS,REQUEST_API_BOOKING,REQUEST_DAT_VE, REQUEST_DAT_VE_FAILURE } from "constant/BookingActionType";
import swal from "sweetalert";

export const getDanhSachPhongVe=(maLichChieu)=>{
    return async(dispatch)=>{
        try{
            const response = await bookingAPI.layDanhSachPhongVe(maLichChieu);
            console.log(response)
            dispatch({type:REQUEST_BOOKING_SUCCESS,payload:response})
        }
        catch(err){
            console.log(err)
            dispatch({type:REQUEST_BOOKING_FAILURE,payload:err});
        }
    }
}

export const requestDatVe=(obj)=>{
    return async(dispatch)=>{
        dispatch({type:REQUEST_API_BOOKING})
        try{
            const response = await bookingAPI.datVe(obj);
            
            const ghe = obj.danhSachVe;
            console.log(ghe,response)
            
            dispatch({type:REQUEST_DAT_VE,payload:ghe})
        }
        catch(err){
            console.log(err)
             await swal("Thất bại!", "Đặt vé không thành công!", "error")
            dispatch({type:REQUEST_DAT_VE_FAILURE});
            
        }
    }
}