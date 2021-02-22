import { REQUEST_BOOKING_FAILURE,REQUEST_BOOKING_SUCCESS,REQUEST_DAT_VE ,REQUEST_API_BOOKING} from "constant/BookingActionType";

const initState={
    error:false,
    danhSachGhe:[],
    thongTinPhim:{},
    loading:true
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
            return {...state,error:true};
        case REQUEST_DAT_VE:
            //console.log(action.payload)
            const newDatGhe=[...state.datGhe,action.payload];
            return {...state,datGhe:newDatGhe};
        default:return state;
    }
}

export default BookingReducer;