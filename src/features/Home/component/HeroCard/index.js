import React, { useEffect, useState } from "react";
import { Col, Row, Button, DropdownMenu, DropdownItem } from "reactstrap";
import "./style.scss";
import CardSelect from "../CardSelect";
import {
  filterCumRapTrungLap,
  getFullyDataLichChieu,
  filterNgayXem,
  getUnique,
} from "utils/common";
import { useDispatch, useSelector } from "react-redux";
import { getDataChiTietPhim } from "redux/action/FilmAction";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import DropdownHero from "../DropdownHero";
import filmAPI from "api/filmAPI";
function HeroCard() {
  const [phim, setPhim] = useState("Phim");
  const [rap, setRap] = useState("Rạp");
  const [ngayChieu, setNgayChieu] = useState("Ngày xem");
  const [gioXem, setGioXem] = useState("Suất chiếu");
  const [isBooking, setIsBooking] = useState(false);
  const [listCumRap, setListCumRap] = useState([]);
  const [listLichChieuPhim, setListLichChieuPhim] = useState([]);
  const [listNgayXem, setListNgayXem] = useState([]);
  const { listMovie } = useSelector((state) => state.FilmReducer);
  const history = useHistory();
  async function handleChooseMovie(item, id) {
    setPhim(item);
    setListCumRap([]);
    setListLichChieuPhim([]);
    setListNgayXem([]);
    setRap('Rạp');
    setNgayChieu('Ngày xem');
    setGioXem('Suất chiếu');
    setIsBooking(false);
    try {
      const response = await filmAPI.getRapChieu(id);
      const templistCumRap = response.heThongRapChieu.map(
        (item) => item.cumRapChieu
      );
      console.log(templistCumRap);
      setListCumRap(templistCumRap.flat());
    } catch (err) {
      console.log(err);
    }
  }
  function handleChooseRap(tenCumRap, maCumRap) {
    const target = listCumRap.filter((item) => item.maCumRap === maCumRap);
    const temp = getUnique(target[0].lichChieuPhim, "ngayChieuGioChieu");
    setRap(tenCumRap);
    setListLichChieuPhim(temp);
  }
  function handleChooseNgayXem(ngayXem) {
    const target = listCumRap.filter((item) => item.tenCumRap === rap);
    const temp = getUnique(
      target[0].lichChieuPhim,
      "ngayChieuGioChieu",
      ngayXem
    );
    setListNgayXem(temp);
    setNgayChieu(ngayXem);
    //console.log(temp)
  }
  function handleChooseSuatChieu(gioXem) {
    const target = listCumRap
      .filter((item) => item.tenCumRap === rap);
    const temp = target[0].lichChieuPhim.find((item) =>
    (item.ngayChieuGioChieu.indexOf(ngayChieu)!==-1)&&(item.ngayChieuGioChieu.indexOf(gioXem)!==-1)
  );
      //console.log(temp)
     setIsBooking(temp.maLichChieu);
      setGioXem(gioXem);
    //console.log(gioXem);
  }
  const getSuatChieu = () => {
    if (listNgayXem.length < 1) {
      return (
        <DropdownMenu>
          <DropdownItem>Chọn ngày xem</DropdownItem>
        </DropdownMenu>
      );
    }
    return (
      <DropdownMenu>
        {listNgayXem.map((item) => {
          //const { maCumRap, tenCumRap } = item;
          return (
            <DropdownItem
              key={item}
              onClick={() => {
                handleChooseSuatChieu(item);
              }}
            >
              {item}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    );
  };
  const getNgayXem = () => {
    if (listLichChieuPhim.length < 1) {
      return (
        <DropdownMenu>
          <DropdownItem>Chọn rạp</DropdownItem>
        </DropdownMenu>
      );
    }
    return (
      <DropdownMenu>
        {listLichChieuPhim.map((item) => {
          //const { maCumRap, tenCumRap } = item;
          return (
            <DropdownItem
              key={item}
              onClick={() => {
                handleChooseNgayXem(item);
              }}
            >
              {item}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    );
  };
  const getCumRap = () => {
    if (listCumRap.length < 1) {
      return (
        <DropdownMenu>
          <DropdownItem>Chọn phim</DropdownItem>
        </DropdownMenu>
      );
    }
    return (
      <DropdownMenu>
        {listCumRap.map((item) => {
          const { maCumRap, tenCumRap } = item;
          return (
            <DropdownItem
              key={maCumRap}
              onClick={() => {
                handleChooseRap(tenCumRap, maCumRap);
              }}
            >
              {tenCumRap}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    );
  };
  const getListFilm = () => {
    const listPhim = listMovie.length > 1 ? listMovie.flat() : [];
    if (listPhim.length < 1) {
      return (
        <DropdownMenu>
          <DropdownItem>Loading...</DropdownItem>
        </DropdownMenu>
      );
    }
    return (
      <DropdownMenu>
        {listPhim.map((item) => {
          const { maPhim, tenPhim } = item;
          return (
            <DropdownItem
              key={maPhim}
              onClick={() => {
                handleChooseMovie(tenPhim, maPhim);
              }}
            >
              {tenPhim}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    );
  };
  return (
    <div className="hero__card">
      <Row>
        <Col md="3" className="hero__card--dropdownBtn">
          <DropdownHero name={phim} dropDownItem={getListFilm} />
        </Col>
        <Col md="3" className="hero__card--dropdownBtn">
          <DropdownHero name={rap} dropDownItem={getCumRap} />
        </Col>
        <Col md="2" className="hero__card--dropdownBtn">
          <DropdownHero name={ngayChieu} dropDownItem={getNgayXem} />
        </Col>
        <Col md="2" className="hero__card--dropdownBtn">
          <DropdownHero name={gioXem} dropDownItem={getSuatChieu} />
        </Col>
        <Col md="2">
          <Button
            color={isBooking ? "danger" : "secondary"}
            type="submit"
            disabled={!isBooking}
            onClick={(e) => {
              e.preventDefault();
              const userInfo = localStorage.getItem("userInfo") ? true : false;
              if (userInfo) {
                const url = `/home/booking/${isBooking}`;
                history.push(url);
              } else {
                swal({
                  title: "Bạn chưa đăng nhập?",
                  text: "Chỉ khi đăng nhập bạn mới được mua vé!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                }).then((willDelete) => {
                  if (willDelete) {
                    swal("Bạn sẽ được di chuyển đến trang đăng nhập!");
                    history.push("/login");
                  } else {
                    swal("Bạn không muốn mua vé!");
                  }
                });
              }
            }}
          >
            MUA VÉ NGAY
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default HeroCard;
// const dispatch = useDispatch();
// const history = useHistory()
//  const {listCumRap,lichChieu,loading} = useSelector(state=>state.DetailReducer)
//  //console.log(lichChieu,listCumRap)
//  const [ngayXem,setNgayXem] = useState(false);
//  const [rap,setRap]=useState([])
//  const [gioChieu,setGioChieu] = useState(false)
//  const [isSubmit,setIsSubmit] = useState(false)

//   function getFilm(film){
//   // console.log(film)
//    dispatch(getDataChiTietPhim(film.value))
//    // const response = await filmAPI.getChiTietPhim(film.value);
//    // const newFilm =getFullyDataLichChieu(response.lichChieu)
//    // setFilm(newFilm);

//    // const cumRap= filterCumRapTrungLap(newFilm).map((item)=>{
//    //   return {value:item,label:item};
//    // })
//    // console.log(cumRap)
//    // setCumRap(cumRap)

//  }
//  function getSubmit(value){
//    console.log(value)
//    setIsSubmit(value)
//  }
//  function getNgayXem(rap){
//    const newNgayXem = lichChieu.filter((item)=>item.tenHeThongRap===rap.value)
//    const temp = filterNgayXem(newNgayXem).map((item)=>{
//      return {value:item,label:item};
//    });
//    setRap(rap.value)
//    setNgayXem(temp)
//    //console.log(temp)
//  }
//  function getGioChieu(ngayChieu){
//    const newGioChieu = lichChieu.filter((item)=>item.tenHeThongRap===rap).filter((item)=>item.ngayChieu===ngayChieu.value).map((item)=>{
//      const {gioChieu}=item;
//      return {...item,label:gioChieu,value:gioChieu};
//    })
//    console.log(newGioChieu)
//    setGioChieu(newGioChieu)
//  }

//  return (
// <div className="hero__card">
//    <Row>

//        <Col md="3" className="hero__card--select">
//              <CardSelect

//                  options={listFilm}
//                  name="ListSelect"
//                  placeholder="Phim"
//                  action={getFilm}
//                  />

//        </Col>
//        <Col md="3" className="hero__card--select">
//            <CardSelect
//                options={listCumRap.map((item)=>{
//                  return{value:item,label:item}
//                })}
//                name="RapSelect"
//                placeholder={loading ? "Loading..." : "Rap"}
//                loading={loading}
//                previousName="Phim"
//                action={getNgayXem}

//                />
//        </Col>
//        <Col md="2" className="hero__card--select">
//            <CardSelect
//                options={ngayXem}
//                name="NgayChieuSelect"
//                placeholder="Ngày Chiếu"
//                action={getGioChieu}
//                previousName="Rạp"
//                />
//        </Col>
//        <Col md="2" className="hero__card--select">
//            <CardSelect
//                options={gioChieu}
//                name="GioChieuSelect"
//                placeholder="Giờ Chiếu"
//                previousName="Ngày Chiếu"
//                action={getSubmit}
//                />
//        </Col>
//        <Col md="2">
//            <Button color={isSubmit?"danger":"secondary"} type="submit" disabled={!isSubmit}
//              onClick={(e)=>{
//                e.preventDefault();
//                const userInfo = localStorage.getItem('userInfo')?true:false;
//                if(userInfo){
//                  const {maLichChieu}=isSubmit;
//                  const url =`/home/booking/${maLichChieu}`;
//                  history.push(url);
//                }
//                else{
//                  swal({
//                    title: "Bạn chưa đăng nhập?",
//                    text: "Chỉ khi đăng nhập bạn mới được mua vé!",
//                    icon: "warning",
//                    buttons: true,
//                    dangerMode: true,
//                  })
//                  .then((willDelete) => {
//                    if (willDelete) {
//                      swal("Bạn sẽ được di chuyển đến trang đăng nhập!");
//                      history.push('/login');
//                    } else {
//                      swal("Bạn không muốn mua vé!");
//                    }
//                  });
//              }}
//            }
//            >
//                MUA VÉ NGAY
//            </Button>
//        </Col>
//    </Row>
// </div>
// );
