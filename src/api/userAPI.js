import axiosClient from "./axiosClient";

const userAPI={
    dangNhap:(user)=>{
        const url = "QuanLyNguoiDung/DangNhap";
        return axiosClient.post(url,user);
    },
    dangKy:(user)=>{
        const url = "QuanLyNguoiDung/DangKy";
        const newUser={
            ...user,
            maNhom: "GP05",
            maLoaiNguoiDung: "khachHang",
        }
        return axiosClient.post(url,newUser);
    },
    thongTinTaiKhoan:(taiKhoan)=>{
        const url = "QuanLyNguoiDung/ThongTinTaiKhoan";
        const tartget={taiKhoan:taiKhoan}
        const token = JSON.parse(localStorage.getItem("accessToken"));
        let config ;
        if(token){
         config = {
           headers: {
             Authorization: "Bearer " + token,
           }}
           console.log(config)
        }
        return axiosClient.post(url,tartget,config)
    },
    chinhSuaTaiKhoan:(user)=>{
        const url ="QuanLyNguoiDung/CapNhatThongTinNguoiDung";
        const newUser={
            ...user,
            maNhom: "GP05",
            maLoaiNguoiDung: "khachHang",
        }
        const token = JSON.parse(localStorage.getItem("accessToken"));
        let config ;
        if(token){
         config = {
           headers: {
             Authorization: "Bearer " + token,
           }}
           console.log(config)
        }
        return axiosClient.put(url,newUser,config)
    }
}

export default userAPI;