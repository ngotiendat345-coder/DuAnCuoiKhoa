import moment from "moment";
export const weekday = new Array(7);
weekday[0] = "Chủ Nhật";
weekday[1] = "Thứ 2";
weekday[2] = "Thứ 3";
weekday[3] = "Thứ 4";
weekday[4] = "Thứ 5";
weekday[5] = "Thứ 6";
weekday[6] = "Thứ 7";

export const tangGio = (time, thoiGianThem) => {
  let hour = +time.slice(0, 2);
  let minutes = +time.slice(3);
  let hourThem = Math.trunc(thoiGianThem / 60);
  let minuteThem = (thoiGianThem / 60 - hourThem) * 60;
  let plus = 0;
  if((minutes + minuteThem) >= 60){
    minutes=(minutes + minuteThem)-60;
    plus=1;
  }
  else{
    minutes=(minutes + minuteThem);
  }

  hour = (hour + hourThem)>=24 ? (plus+hour + hourThem-24 ): (plus+hour + hourThem);
  return `${hour}:${minutes}`
};
export const getUnique = (array, type, searchValue = "") => {
  //console.log(array,type,searchValue);
  let newArray = array.map((item) => item[type]);
  if (type === "ngayChieuGioChieu") {
    if (searchValue) {
      newArray = array.reduce((total, item) => {
        if (item[type].indexOf(searchValue) !== -1) {
          return [...total, item[type].slice(11, 16)];
        }
        return total;
      }, []);
      //console.log(newArray);
    } else {
      newArray = array.map((item) => item[type].slice(0, 10));
      //console.log(newArray);
    }
    //console.log(newArray);
  }
  return [...new Set(newArray)];
};
export const filterCumRapTrungLap = (array) => {
  const test2 = array.reduce((t, v) => {
    const { tenHeThongRap, ...rest } = v;
    t[tenHeThongRap] = rest;
    return t;
  }, {});
  //fetch ten Cum rap
  const test3 = Object.keys(test2);
  return test3;
};
export const filterTenCumRap = (array) => {
  const test2 = array.reduce((t, v) => {
    const { tenCumRap, ...rest } = v;
    t[tenCumRap] = rest;
    return t;
  }, {});
  //fetch ten Cum rap
  const test3 = Object.keys(test2);
  return test3;
};
export const filterNgayXem = (array) => {
  const test2 = array.reduce((t, v) => {
    const { ngayChieu, ...rest } = v;
    t[ngayChieu] = rest;
    return t;
  }, {});
  //fetch ten Cum rap
  const test3 = Object.keys(test2);
  return test3;
};
export const getFullyDataLichChieu = (array) => {
  const test = array.map((item) => {
    const { ngayChieuGioChieu, thongTinRap, maLichChieu, thoiLuong } = item;
    const { tenCumRap, tenHeThongRap, maRap, tenRap } = thongTinRap;
    const newMoment = moment(item.ngayChieuGioChieu).format("YYYY-MM-DD");
    const gioChieu = moment(item.ngayChieuGioChieu).format("hh:mm A");
    return {
      ngayChieu: newMoment,
      tenCumRap,
      tenHeThongRap,
      maRap,
      tenRap,
      ngayChieuGioChieu,
      maLichChieu,
      gioChieu,
      thoiLuong,
    };
  });
  return test;
};
export const tachNgayChieuGioChieu = (array, current = 0) => {
  const newRap = array.map((item) => {
    const newMoment = moment(item.ngayChieuGioChieu).format("YYYY-MM-DD");
    const gioChieu = moment(item.ngayChieuGioChieu).format("hh:mm A");
    return {
      label: newMoment,
      value: item.maRap,
      maLichChieu: item.maLichChieu,
      ngayChieuGioChieu: item.ngayChieuGioChieu,
      ngayXem: newMoment,
      gioChieu: gioChieu,
    };
  });

  const map = newRap.reduce((t, v) => {
    const { ngayXem, ...rest } = v;
    t[ngayXem] = rest;
    return t;
  }, []);
  const newMap = Object.values(map);
  const target = newRap.filter((item) => {
    if (item.label === newMap[current].label) {
      return item;
    }
  });
  return target;
};
export const convertToSelectValue = (list) => {
  const newList = [...list];
  const newData = newList
    .reduce((total = [], item) => total.concat(item))
    .map((item) => {
      return { value: item.maPhim, label: item.tenPhim };
    })
    .slice(0, 40);
  return newData;
};
