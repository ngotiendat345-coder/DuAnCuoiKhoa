import { REQUEST_BOOKING_FAILURE,REQUEST_BOOKING_SUCCESS,REQUEST_DAT_VE ,REQUEST_API_BOOKING, IS_CHECKOUT, SET_CHECKOUT} from "constant/BookingActionType";

const initState={
    error:false,
    danhSachGhe:[],
    thongTinPhim:{},
    checkOut:false,
    loading:true,
}

const BookingReducer=(state=initState,action)=>{
    switch(action.type){
        case REQUEST_API_BOOKING:
            return {...state,loading:true}
        case REQUEST_BOOKING_SUCCESS:
            const {danhSachGhe,thongTinPhim}=action.payload;
            return {...state,danhSachGhe:danhSachGhe,thongTinPhim:thongTinPhim,loading:false};
        case REQUEST_BOOKING_FAILURE:
          //  console.log(action.payload)
            return {...state,error:true,checkOut:false};
        case SET_CHECKOUT:
            return {...state,checkOut:false};
        case REQUEST_DAT_VE:
            return {...state,loading:false,checkOut:true};
        default:return state;
    }
}

export default BookingReducer;