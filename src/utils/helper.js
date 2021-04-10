import cgv from "assets/rap/cgv.png";
import cinestar from "assets/rap/cinestar.png";
import galaxy from "assets/rap/galaxycine.png";
import mega from "assets/rap/mega.png";
import lotte from "assets/rap/lotte.png";
import bhdstar from "assets/rap/bhd.png";

export const weekday = new Array(7);
weekday[0] = "Chủ Nhật";
weekday[1] = "Thứ 2";
weekday[2] = "Thứ 3";
weekday[3] = "Thứ 4";
weekday[4] = "Thứ 5";
weekday[5] = "Thứ 6";
weekday[6] = "Thứ 7";
export const month = new Array(12);
month[0] = "tháng 1";
month[1] = "tháng 2";
month[2] = "tháng 3";
month[3] = "tháng 4";
month[4] = "tháng 5";
month[5] = "tháng 6";
month[6] = "tháng 7";
month[7] = "tháng 8";
month[8] = "tháng 9";
month[9] = "tháng 10";
month[10] = "tháng 11";
month[11] = "tháng 12";
export const handleImage = (maHeThong) => {
  switch (maHeThong) {
    case "BHDStar":
      return bhdstar;
    case "Galaxy":
      return galaxy;
    case "CGV":
      return cgv;
    case "LotteCinima":
      return lotte;
    case "MegaGS":
      return mega;
    case "CineStar":
      return cinestar;
  }
};
export const handleNgayTiepTheo = () => {
  let value = 1;
  let tempDate = new Date();
  let date = tempDate.getDate();
  let day = tempDate.getDay();
  let thang = tempDate.getMonth();
  let nam = tempDate.getFullYear();
  const handleValue = () => {
    value++;
  };
  return function () {
    //console.log(value);
    if (value === 1) {
      handleValue();
      return [nam, thang, date, day];
    }
    if (value !== 1) {
      let newTemp = new Date(nam, thang, date + (value - 1));
      let newDay = newTemp.getDay();
      let newThang = newTemp.getMonth();
      let newDate = newTemp.getDate();
      let newYear = newTemp.getFullYear();
      handleValue();
      return [newYear, newThang, newDate, newDay];
    }
  };
};
export const convertToInNeed = (data) => {
  //console.log("data", data);
  return Object.keys(data).reduce((form, item) => {
    //console.log("item", item);
    const newData = new Date(item);
    const ngay = newData.getDate();
    const thu = newData.getDay();
    const thang = newData.getMonth();
    const name = newData.getFullYear();
    const gio = newData.getHours();
    const phut = newData.getMinutes();
    const thuNgayThangNam = `${name}/${thang}/${ngay}/${thu}`;
    const gioPhut = `${gio < 10 ? `0${gio}` : gio} : ${
      phut < 10 ? `0${phut}` : phut
    }`;
    if (Object.keys(form).includes(thuNgayThangNam)) {
      form[thuNgayThangNam].gioPhut.push(gioPhut);
      return form;
    }
    form[thuNgayThangNam] = { ...data[item], gioPhut: [gioPhut] };
    return form;
  }, {});
};
