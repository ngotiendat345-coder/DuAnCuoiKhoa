import axiosClient from "./axiosClient";
export function dangNhap(user) {
  console.log(user);
  const url = "QuanLyNguoiDung/DangNhap";
  return axiosClient.post(url, user);
}
export function dangKy(user) {
  const url = "QuanLyNguoiDung/DangKy";
  const newUser = {
    ...user,
    maNhom: "GP05",
    maLoaiNguoiDung: "khachHang",
  };
  return axiosClient.post(url, newUser);
}
export function thongTinTaiKhoan(taiKhoan) {
  const url = "QuanLyNguoiDung/ThongTinTaiKhoan";
  const tartget = { taiKhoan: taiKhoan };
  //const token = JSON.parse(localStorage.getItem("accessToken"));

  return axiosClient.post(url, tartget);
}
export function chinhSuaTaiKhoan(user) {
  const url = "QuanLyNguoiDung/CapNhatThongTinNguoiDung";
  const newUser = {
    ...user,
    maNhom: "GP10",
    maLoaiNguoiDung: "khachHang",
  };

  return axiosClient.put(url, newUser);
}
