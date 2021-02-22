import React, { useEffect, useState } from 'react'
import { Col, Row ,Button} from 'reactstrap';
import './style.scss'
import CardSelect from '../CardSelect';
import { filterCumRapTrungLap,getFullyDataLichChieu,filterNgayXem } from 'utils/common';
import { useDispatch, useSelector } from 'react-redux';
import { getDataChiTietPhim } from 'redux/action/FilmAction';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';


function HeroCard({listFilm}){
 const dispatch = useDispatch();
 const history = useHistory()
  const {listCumRap,lichChieu,loading} = useSelector(state=>state.DetailReducer)
  //console.log(lichChieu,listCumRap)
  const [ngayXem,setNgayXem] = useState(false);
  const [rap,setRap]=useState([])
  const [gioChieu,setGioChieu] = useState(false)
  const [isSubmit,setIsSubmit] = useState(false)
 
   function getFilm(film){
   // console.log(film)
    dispatch(getDataChiTietPhim(film.value))
    // const response = await filmAPI.getChiTietPhim(film.value);
    // const newFilm =getFullyDataLichChieu(response.lichChieu)
    // setFilm(newFilm);
  
    // const cumRap= filterCumRapTrungLap(newFilm).map((item)=>{
    //   return {value:item,label:item};
    // })
    // console.log(cumRap)
    // setCumRap(cumRap)
    
  }
  function getSubmit(value){
    console.log(value)
    setIsSubmit(value)
  }
  function getNgayXem(rap){
    const newNgayXem = lichChieu.filter((item)=>item.tenHeThongRap===rap.value)
    const temp = filterNgayXem(newNgayXem).map((item)=>{
      return {value:item,label:item};
    });
    setRap(rap.value)
    setNgayXem(temp)
    //console.log(temp)
  }
  function getGioChieu(ngayChieu){
    const newGioChieu = lichChieu.filter((item)=>item.tenHeThongRap===rap).filter((item)=>item.ngayChieu===ngayChieu.value).map((item)=>{
      const {gioChieu}=item;
      return {...item,label:gioChieu,value:gioChieu};
    })
    console.log(newGioChieu)
    setGioChieu(newGioChieu)
  }

  return (
<div className="hero__card">
    <Row>
      
        <Col md="3" className="hero__card--select">
              <CardSelect 
                  
                  options={listFilm}
                  name="ListSelect"
                  placeholder="Phim"
                  action={getFilm}
                  />
          
        </Col>
        <Col md="3" className="hero__card--select">
            <CardSelect
                options={listCumRap.map((item)=>{
                  return{value:item,label:item}
                })}
                name="RapSelect"
                placeholder={loading ? "Loading..." : "Rap"}
                loading={loading}
                previousName="Phim"
                action={getNgayXem}
                
                />
        </Col>
        <Col md="2" className="hero__card--select">
            <CardSelect
                options={ngayXem}
                name="NgayChieuSelect"
                placeholder="Ngày Chiếu"
                action={getGioChieu}
                previousName="Rạp"
                />
        </Col>
        <Col md="2" className="hero__card--select">
            <CardSelect
                options={gioChieu}
                name="GioChieuSelect"
                placeholder="Giờ Chiếu"
                previousName="Ngày Chiếu"
                action={getSubmit}
                />
        </Col>
        <Col md="2"> 
            <Button color={isSubmit?"danger":"secondary"} type="submit" disabled={!isSubmit} 
              onClick={(e)=>{
                e.preventDefault();
                const userInfo = localStorage.getItem('userInfo')?true:false;
                if(userInfo){
                  const {maLichChieu}=isSubmit;
                  const url =`/home/booking/${maLichChieu}`;
                  history.push(url);
                }
                else{
                  swal({
                    title: "Bạn chưa đăng nhập?",
                    text: "Chỉ khi đăng nhập bạn mới được mua vé!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Bạn sẽ được di chuyển đến trang đăng nhập!");
                      history.push('/login');
                    } else {
                      swal("Bạn không muốn mua vé!");
                    }
                  });
              }}
            }
            >
                MUA VÉ NGAY
            </Button>
        </Col>
    </Row>
</div>
);

}

export default HeroCard;
 /*
        <Col md="2" className="hero__card--select">
            <Controller
                as={ControlSelect}
                options={rap}
                name="NgayXemSelect"
                control={control}
                getFilm={getNgayXem}
                placeholder="Ngày Xem"
                />
        </Col>
        <Col md="2" className="hero__card--select">
        <Controller
                as={ControlSelect}
                options={ngayXem}
                name="SuatChieuSelect"
                control={control}
                placeholder="Suất Chiếu"
                getFilm={getSubmit}
                />
        </Col> */
// const { handleSubmit, control } = useForm();
// const [data, setData] = useState( { value: 0, label: "Please Choose Film" });
// const [rapData,setRapData] = useState({ value: 0, label: "Please Choose Film" });
// const [ngayXemData,setNgayXemData] = useState(null);
//const [lichChieuData,setLichChieu] = useState({ value: 0, label: "Please Choose Film" });
// useEffect(()=>{
//     async function fetchProductList(){
//         try{
//           const response = await filmAPI.getAll()
//           const newData = response.map((item)=>{
//               return {value:item.maPhim,label:item.tenPhim}
//           }).slice(0,40);
//           setData(newData)
//           console.log(newData)
//         }
//         catch(err){
//           console.log(err)
//         }
//       }
//       async function fetchRapChieu(){
//         try{
//           const response = await filmAPI.getRapChieu(1329)
//           console.log(response)
//           const newRapData = response.heThongRapChieu.map((item)=>{
//             // const {cumRapChieu} = item;
//              const newCumRapChieu = item.cumRapChieu.map((value)=>{
//                  const {maCumRap,tenCumRap,lichChieuPhim}=value;
//                  return {value:maCumRap,label:tenCumRap,lichChieuPhim};
//              })
//               return newCumRapChieu
//           }).reduce((total=[],item)=>total.concat(item))
//          // const newLichChieu = response.heThongRapChieu
//          console.log(newRapData)
//         const target = newRapData.find((item)=>item.value==="bhd-star-cineplex-vincom-le-van-viet")
//        // console.log(target)
//         const newNgayGio = target.lichChieuPhim.map((item)=>{
//           const newMoment=moment(item.ngayChieuGioChieu).format('DD-MM-YYYY, HH:mm A');
//           return {value:item.maLichChieu,label:newMoment}
//         })
//         setNgayXemData(newNgayGio)
//         //console.log(target.lichChieuPhim)
//           setRapData(newRapData)
          

//         }
//         catch(err){
//           console.log(err)
//         }
//       }
//       fetchProductList()
//       fetchRapChieu()
// },[])
// return (
// <div className="hero">
//     <Row>
//         <Col>
//             <Controller
//                 as={Select}
//                 options={data}
//                 name="ReactSelect"
//                 control={control}
//                 />
//         </Col>
//         <Col>
//             <Controller
//                 as={Select}
//                 options={rapData}
//                 name="RapSelect"
//                 control={control}
//                 />
//         </Col>
//         <Col>
//             <Controller
//                 as={Select}
//                 options={ngayXemData}
//                 name="ngayXem"
//                 control={control}
//                 />
//         </Col>
//     </Row>
// </div>
// );


// return(
//   <div className="heroCard">
//    <Formik initialValues={{ListFilm:null,ListRap:null,ListNgayXem:'',ListGioXem:''}}>
//      {(formikProps)=>{
//        //const { values, errors, touched,isSubmitting } = formikProps
//       // console.log(values, errors, touched,isSubmitting )
//        return(
//          <Form>
//             <Field 
//             name="ListFilm" component={ListFilmSelect}
//             placeholder="Phim"
//             options={listFilm}
//             getFilm={getFilm}
//             />
//             <Field 
//             name="ListRap" component={ListFilmSelect}
//             placeholder="Rạp"
//             options={cumRap}
//             defaultValue="Chọn Phim"
//             getFilm={getRap}
//             />
//          </Form>
//        )
//      }}
//    </Formik>
//   </div>
// )


// try {
//   const response = await filmAPI.getRapChieu(film.value)
//   console.log(response)
//   const newRapData = response.heThongRapChieu.map((item) => {
//     // const {cumRapChieu} = item;
//     const newCumRapChieu = item.cumRapChieu.map((value) => {
//       const { maCumRap, tenCumRap, lichChieuPhim } = value;
//       return { value: maCumRap, label: tenCumRap, lichChieuPhim };
//     })
//     return newCumRapChieu
//   }).reduce((total = [], item) => total.concat(item))
//   // const newLichChieu = response.heThongRapChieu
//   setValue("RapSelect",newRapData)
// // console.log(newRapData)
// }catch(err){
//   console.log(err)
// }

// console.log(rap)
// const newRap = rap.lichChieuPhim.map((item)=>{
//   const newMoment=moment(item.ngayChieuGioChieu).format('YYYY-MM-DD');
//   return{label:newMoment,value:item.maRap,maLichChieu:item.maLichChieu,ngayChieuGioChieu:item.ngayChieuGioChieu,ngayXem:newMoment}
// })

// const map = newRap.reduce((t, v) => {
//   const { ngayXem, ...rest } = v;
//   t[ngayXem] = rest;
//   return t;
// }, []);
// setNgayXem(newRap)
// setRap(Object.values(map))