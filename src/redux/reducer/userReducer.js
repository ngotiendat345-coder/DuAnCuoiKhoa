const { DANG_NHAP, DANG_KY ,FAILURE_REQUEST,CLEAR_ERROR, REQUEST_API, REQUEST_DETAIL,UPDATE_USER,UPDATE_DETAIL,DANG_XUAT} = require("constant/UserActionType");

const initState={
    token:"",
    userInfo:null,
    error:"",
    detailInfo:{},
    loading:true,
}

const UserReducer = (state=initState,action)=>{
    switch(action.type){
        case DANG_NHAP:

            const {taiKhoan,hoTen,email,soDT,accessToken}=action.payload;
            localStorage.setItem("userInfo", JSON.stringify({taiKhoan,hoTen,email,soDT}));
            localStorage.setItem("accessToken", JSON.stringify(accessToken));

            return {...state,token:accessToken,userInfo:action.payload,error:""};
        case DANG_XUAT:
            return initState;
        case REQUEST_API:
            return {...state,loading:true};
        case REQUEST_DETAIL:
            return {...state,loading:false,detailInfo:action.payload}
        case FAILURE_REQUEST:
            return {...state,loading:false};
        case UPDATE_USER:
            //console.log(action.payload);
            return state;
        case UPDATE_DETAIL:
            return {...state,detailInfo:action.payload}
        default:return state;
    }
}
export default UserReducer;