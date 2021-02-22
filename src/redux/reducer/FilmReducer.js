import { GET_LISTMOVIE_REQUEST, GET_LISTMOVIE_SUCCESS,CLOSE_MODEL, OPEN_MODEL } from "constant/ListActionType";

const initState={
    loading:true,
    listMovie:[],
    sapChieu:[],
    modal:false,
    modalType:{link:"",title:""}
}

const FilmReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_LISTMOVIE_REQUEST:
            return {...state,loading:true};
        case GET_LISTMOVIE_SUCCESS:
            return {...state,listMovie:action.payload.dangChieu,sapChieu:action.payload.sapChieu,loading:false}
        case CLOSE_MODEL:
            return {...state,modal:false}
        case OPEN_MODEL:
            return {...state,modal:true,modalType:action.payload}
        default:return state;
    }
}

export default FilmReducer;