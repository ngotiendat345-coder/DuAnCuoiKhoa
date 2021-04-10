import axiosClient from "./axiosClient";
export const layDanhSachPhongVe = (maLichChieu) => {
  const url = `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
  return axiosClient.get(url);
};
export const datVe = (object) => {
  const url = "QuanLyDatVe/DatVe";

  return axiosClient.post(url, object);
};
