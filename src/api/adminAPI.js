import axiosClient from "./axiosClient";

export const getListFilmAdmin = (maNhom) => {
  console.log(maNhom);
  // console.log(type);
  let url = `QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`;
  return axiosClient.get(url);
};

export const getDanhSachPhimPhanTrang = (
  maNhom,
  tenPhim,
  soTrang,
  soPhanTuTrenTrang
) => {
  let url = `QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${maNhom}${
    tenPhim ? `&tenPhim=${tenPhim}` : ""
  }&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`;
  return axiosClient.get(url);
};

export const getThongTinPhim = (maPhim) => {
  let url = `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
  return axiosClient.get(url);
};
export const postPhim = (data) => {
  let url = "QuanLyPhim/ThemPhimUploadHinh";
  return axiosClient.post(url, data);
};

export const updatePhim = (data) => {
  let url = "QuanLyPhim/CapNhatPhimUpload";
  return axiosClient.post(url, data);
};
export const updatePhimWithoutImage = (data) => {
  let url = "QuanLyPhim/CapNhatPhim";
  return axiosClient.post(url, data);
};
export const deletePhim = (maPhim) => {
  let url = `QuanLyPhim/XoaPhim?MaPhim=${maPhim}`;
  return axiosClient.delete(url);
};

/**
 * uSER management
 */

export const timKiemNguoiDungPhanTrang = (tuKhoa, soTrang) => {
  let url = `QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01${
    tuKhoa ? `&tuKhoa=${tuKhoa}` : ""
  }&soTrang=${soTrang}&soPhanTuTrenTrang=10`;
  return axiosClient.get(url);
};

export const thongTinNguoiDung = (data) => {
  let url = "QuanLyNguoiDung/ThongTinTaiKhoan";
  return axiosClient.post(url, data);
};

export const themNguoiDung = (data) => {
  let url = "QuanLyNguoiDung/ThemNguoiDung";
  return axiosClient.post(url, data);
};

export const capNhatNguoiDung = (data) => {
  let url = "QuanLyNguoiDung/CapNhatThongTinNguoiDung";
  return axiosClient.put(url, data);
};

export const deleteNguoiDung = (taiKhoan) => {
  let url = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
  return axiosClient.delete(url);
};

export const layDanhSachLoaiNguoiDung = () => {
  let url = "QuanLyNguoiDung/LayDanhSachLoaiNguoiDung";
  return axiosClient.get(url);
};
export const getDanhSachUserAdmin = () => {
  let url = "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP10";
  return axiosClient.get(url);
};
// export const getThongTinTaiKhoan = (data) => {
//   let url = "QuanLyNguoiDung/ThongTinTaiKhoan";
//   return axiosClient.post(url,data);
// };
