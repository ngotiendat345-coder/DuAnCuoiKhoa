import { GET_DATA_CUMRAP, CHANGE_MA_HE_THONG,GET_DATA_API,GET_DATA_CHITIET_PHIM} from "constant/ListActionType";

const initState = {
    maHeThong:'BHDStar',
    dsCumRap:[],
    heThongRap:{},
    loading:true,
}

const CumRapReducer=(state=initState,action)=>{
    switch (action.type) {
        case GET_DATA_API:
            return {...state,loading:true}
        case GET_DATA_CUMRAP:
            const {dsCumRap,heThongRap}=action.payload;
            return {...state,dsCumRap:dsCumRap,heThongRap:heThongRap,loading:false}
        case CHANGE_MA_HE_THONG:
            return{...state,maHeThong:action.payload};
    
        default:
            return state;
    }
}

export default CumRapReducer;