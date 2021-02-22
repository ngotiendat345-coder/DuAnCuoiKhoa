import axiosClient from "./axiosClient";

const filmAPI={
    getAll:()=>{
        const url = "QuanLyPhim/LayDanhSachPhim?maNhom=GP01";
        return axiosClient.get(url);
    },
    getChiTietPhim:(maPhim)=>{
        const url = `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
        return axiosClient.get(url);
    },
    getRapChieu:(id)=>{
        const url = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`;
        return axiosClient.get(url);
    },
    getHeThongRap:()=>{
        const url = "QuanLyRap/LayThongTinHeThongRap";
        return axiosClient.get(url);
    },
    getThongTinCumRap:(cumRap)=>{
        const url = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cumRap}`;
        return axiosClient.get(url);
    },
    getThongTinLichChieu:(cumRap)=>{
        const url = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${cumRap}&maNhom=GP01`;
        return axiosClient.get(url);
    }
}

export default filmAPI;