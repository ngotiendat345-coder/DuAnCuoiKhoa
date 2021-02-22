import userAPI from 'api/userAPI';
import { FAILURE_REQUEST,CLEAR_ERROR ,DANG_NHAP,REQUEST_DETAIL,REQUEST_API,UPDATE_USER,UPDATE_DETAIL} from 'constant/UserActionType';
import swal from 'sweetalert';


export const dangNhapAction=(user,history)=>{
    return async(dispatch)=>{
        try{
            const response = await userAPI.dangNhap(user)
            console.log(response)
            dispatch({type:DANG_NHAP,payload:response})
            await swal({
                title: "Thành công!",
                text: "Bạn đã thành công đăng nhập!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
            history.replace('/')
        }
        catch(err){
            console.log(err)
            await swal({
                title: "Có lỗi!",
                text: "Sai tên đăng nhập hoặc mật khẩu!",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
              });
        }
    }
}

export const dangKyAction=(user,history)=>{
    return async(dispatch)=>{
        try{
            const response = await userAPI.dangKy(user)
            console.log(response)
            const {taiKhoan,matKhau}=response
            
            await swal({
                title: "Thành công!",
                text: "Bạn đã thành công đăng ký!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
            dispatch(dangNhapAction({taiKhoan,matKhau},history))

        }
        catch(err){
            await swal({
                title: "Có lỗi!",
                text: "Đã có lỗi xảy ra , mời bạn đăng ký lại!",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
              });
        }
    }
}

export const getThongTinAccount=(taiKhoan,history)=>{
    return async(dispatch)=>{
        dispatch({type:REQUEST_API})
        try{
            const response = await userAPI.thongTinTaiKhoan(taiKhoan)
            console.log(response)
            dispatch({type:REQUEST_DETAIL,payload:response});
        }
        catch(err){
            dispatch({type:FAILURE_REQUEST})
            await swal({
                title: "Có lỗi!",
                text: "Đã có lỗi xảy ra , mời bạn kiểm tra lại!",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
              });
              history.replace('/')
        }

    }
}

export const updateUserAction=(user)=>{
    return async(dispatch)=>{
        dispatch({type:UPDATE_DETAIL,payload:user})
        const response = await userAPI.chinhSuaTaiKhoan(user)
        //console.log(response)
        dispatch({type:UPDATE_USER,payload:user});
        await swal({
            title: "Thành Công!",
            text: "Bạn đã thành công chỉnh sửa!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
}}