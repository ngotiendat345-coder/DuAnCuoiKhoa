import axiosClient from "./axiosClient";

const bookingAPI = {
    layDanhSachPhongVe:(maLichChieu)=>{
        const url = `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
        return axiosClient.get(url);
    },
    datVe:(object)=>{
        const url ="QuanLyDatVe/DatVe";
        const token = JSON.parse(localStorage.getItem("accessToken"));
        let config ;
        if(token){
         config = {
           headers: {
             Authorization: "Bearer " + token,
           }}
           console.log(config)
        }
        return axiosClient.post(url,object,config)
    }
}

export default bookingAPI;