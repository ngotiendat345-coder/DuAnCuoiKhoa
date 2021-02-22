import { GET_CHITIET_API,GET_DATA_CHITIET_PHIM} from "constant/ListActionType";
import { filterCumRapTrungLap ,getFullyDataLichChieu} from "utils/common";

const initState={
    listCumRap:[],
    lichChieu:[],
    dsCumRap:[],
    data:{},
    loading:false,
}

const DetailReducer=(state=initState,action)=>{
    switch (action.type) {
        case GET_DATA_CHITIET_PHIM:
            //console.log(action.payload)
            const {data,lichChieu,dsCumRap}= action.payload;
            const newLichChieu = getFullyDataLichChieu(lichChieu);
            const newListCumRap = filterCumRapTrungLap(newLichChieu);
            //console.log(newLichChieu,newListCumRap);
            return {...state,listCumRap:newListCumRap,lichChieu:newLichChieu,data:data,loading:false,dsCumRap:dsCumRap};
        case GET_CHITIET_API:
            return {...state,loading:true}
        
        default:
            return state;
    }
}

export default DetailReducer;