import { convertToInNeed } from "utils/helper";
import axiosClient from "./axiosClient";
/**
 * HAM FLATEN DATA
 */
/**
 *
 * => MAPPING CumRAP
 */
const flattenHeThongRapChieu = (data, searchValue) => {
  //console.log("##flattendata", data);
  return Object.keys(data).reduce((total, item) => {
    // console.log(item);
    const val = data[item];
    // console.log(item);
    if (isObject(val) || Array.isArray(val)) {
      // console.log("zzz", val);
      const temp = val.reduce((form, item) => {
        // console.log(searchValue);
        const { [searchValue]: value, ...rest } = item;
        form[value] = rest;
        return form;
      }, {});

      total[item] = temp;
      // console.log(total[item], "total", total);
      return total;
    }
    total[item] = val;
    // console.log(total);
    return total;
  }, {});
};
/**
 *
 * mapping ngay xem
 */
function flattenNgayXem(data) {
  //console.log("zzzzzzz");
  return Object.keys(data).reduce((total, item) => {
    const val = data[item];
    // console.log(data);
    if (Array.isArray(val)) {
      const ngayChieuGioChieuList = val.reduce((total, item) => {
        const { ngayChieuGioChieu, ...rest } = item;
        const temp = new Date(ngayChieuGioChieu);
        const ngay = temp.getDate();
        const thu = temp.getDay();
        const thang = temp.getMonth();
        const name = temp.getFullYear();
        const gio = temp.getHours();
        const phut = temp.getMinutes();

        const thuNgayThang = `${thu}-${ngay}-${thang}-${name}`;
        const gioPhut = `${gio}-${phut}`;
        if (Object.keys(total).includes(thuNgayThang)) {
          total[thuNgayThang].gioPhut.push(gioPhut);
          return total;
        }

        total[thuNgayThang] = { ...rest, gioPhut: [gioPhut] };
        return total;
      }, {});
      return (total["lichChieu"] = ngayChieuGioChieuList);
    }
    total[item] = val;
    return total;
  }, {});
}
/**
 *
 * flatten danh sach phim
 */
function flattenLichChieu(temp2) {
  // console.log(temp2);
  return Object.keys(temp2).reduce((total, item) => {
    const val = temp2[item];
    if (Array.isArray(val)) {
      //console.log("????");

      const result = val.map((item) => {
        const target = flattenNgayXem(item);
        return target;
      });
      // console.log("result", result);
      total[item] = result;
      return total;
    }
    total[item] = val;
    return total;
  }, {});
}
function isObject(item) {
  return Object.prototype.toString.call(item) === "[object Object]";
}
/**
 *
 * HANDLE DATA
 */
export const fetchListFilm = (type = "top") => {
  console.log(type);
  let url = "QuanLyPhim/LayDanhSachPhim?maNhom=GP10";
  if (type === "new") {
    url = "QuanLyPhim/LayDanhSachPhim?maNhom=GP00";
  }
  return axiosClient.get(url);
};
export const fetchCumrap = (heThong) => {
  const url = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${heThong}`;
  return axiosClient.get(url).then((res) => {
    return { [heThong]: res };
  });
};
export const fetchDanhSachHeThong = () => {
  const url = "QuanLyRap/LayThongTinHeThongRap";
  return axiosClient.get(url);
};
export const fechChiTietHeThong = (heThong) => {
  const url = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${heThong}&maNhom=GP10`;
  return axiosClient.get(url).then((res) => {
    return { [heThong]: res };
  });
};
/**
 *
 * return cum rap flatten mapping ngaychieu gio chieu
 */
export const fetchChiTietRap = (heThong) => {
  const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${heThong}&maNhom=GP10`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const temp = res[0];
      // const select = "cgv-aeon-binh-tan";
      const fattenHethong = flattenHeThongRapChieu(temp, "maCumRap");

      let target = {};
      for (let i in fattenHethong.lstCumRap) {
        const temp = flattenLichChieu(fattenHethong.lstCumRap[i]);
        target = { ...target, [i]: temp };
      }
      // console.log(target);
      return target;
    });
};

/**
 *
 * HANDLE DATA CHI TIET PHIM
 * @returns
 */
/**
 * return chitiet phim mapping chay chieu gio chieu
 */

export function fetchChiTietPhim(maPhim) {
  const url = `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
  return axiosClient.get(url).then((res) => {
    const { lichChieu, ...thongTin } = res;
    console.log(res);
    if (lichChieu.length < 1) {
      throw new Error("Phim này hiện không có lịch chiếu");
    }
    const temp1 = lichChieu.reduce((form, item) => {
      // const heTHongRap = flattenHeThongRapChieu(item, "maHeThongRap");
      const { thongTinRap, ngayChieuGioChieu, ...rest } = item;
      const { ["maHeThongRap"]: key, ...restThongTin } = thongTinRap;

      form[key] = {
        ...form[key],
        [ngayChieuGioChieu]: { ...rest, ...restThongTin },
      };
      return form;
    }, {});
    console.log(temp1);
    return { lichChieu: temp1, thongTin };
  });
}

// export function fetchChiTietPhim(maPhim) {
//   const url = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
//   return axiosClient(url).then((res) => {
//     const temp = flattenHeThongRapChieu(res, "maHeThongRap");
//     const temp2 = Object.keys(temp.heThongRapChieu).reduce((form, value) => {
//       const test = flattenHeThongRapChieu(
//         temp.heThongRapChieu[value],
//         "maCumRap"
//       );
//       let target = {};
//       for (let i in test.cumRapChieu) {
//         const temp3 = flattenHeThongRapChieu(
//           test.cumRapChieu[i],
//           "ngayChieuGioChieu"
//         );

//         target = { ...target, [i]: convertToInNeed(temp3.lichChieuPhim) };
//       }
//       console.log(target);
//       form[value] = target;
//       return form;
//     }, {});

//     return temp2;
//   });
// }
// export function fetchChiTietPhim(maPhim, heThong) {
//   const url = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
//   return axiosClient(url).then((res) => {
//     console.log(res);
//     const temp = flattenHeThongRapChieu(res, "maHeThongRap");
//     console.log("temp1", temp, "heThong", heThong);
//     if (!temp.heThongRapChieu[heThong]) {
//       throw new Error(`Xin lỗi rạp ${heThong} chưa phục vụ phim này`);
//     }
//     const temp2 = flattenHeThongRapChieu(
//       temp.heThongRapChieu[heThong],
//       "maCumRap"
//     );

//     let target = {};
//     for (let i in temp2.cumRapChieu) {
//       const temp3 = flattenHeThongRapChieu(
//         temp2.cumRapChieu[i],
//         "ngayChieuGioChieu"
//       );
//       target = { ...target, [i]: temp3 };
//     }
//     console.log(target);
//     return target;
//   });
// }

// import axiosClient from "./axiosClient";
// const filmAPI={
//     getAll:()=>{
//         const url = "QuanLyPhim/LayDanhSachPhim?maNhom=GP10";
//         return axiosClient.get(url);
//     },
//     getSapChieu:()=>{
//         const url = "QuanLyPhim/LayDanhSachPhim?maNhom=GP00";
//         return axiosClient.get(url);
//     },
//     getChiTietPhim:(maPhim)=>{
//         const url = `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
//         return axiosClient.get(url);
//     },
//     getRapChieu:(id)=>{
//         const url = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`;
//         return axiosClient.get(url);
//     },
//     getHeThongRap:()=>{
//         const url = "QuanLyRap/LayThongTinHeThongRap";
//         return axiosClient.get(url);
//     },
//     getThongTinCumRap:(cumRap)=>{
//         const url = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cumRap}`;
//         return axiosClient.get(url);
//     },
//     getThongTinLichChieu:(cumRap)=>{
//         const url = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${cumRap}&maNhom=GP10`;
//         return axiosClient.get(url);
//     }
// }

// export default filmAPI;
