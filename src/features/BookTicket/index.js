
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { Col, Container ,Row} from 'reactstrap'
import { getDanhSachPhongVe,requestDatVe } from 'redux/action/BookingAction'
import {getThongTinAccount} from 'redux/action/UserAction'
import Footer from './component/Footer'
import Header from './component/Header'
import Payment from './component/Payment'
import ThongTinRap from './component/ThongTinRap'
import TotalGhe from './component/TotalGhe'
import NotFound from 'component/NotFound'
import './style.scss'
import Loading from 'component/Loading'

function BookTicket(){
    const [datGhe,setDatGhe] = useState([])
    const {maLichChieu} = useParams();
    const dispatch = useDispatch()
    const history = useHistory()
    const {error,thongTinPhim,danhSachGhe,loading} = useSelector(state=>state.BookingReducer);
    const {detailInfo}=useSelector(state=>state.UserReducer)

    const handleDatVe=(danhsach)=>{
        const {taiKhoan} = detailInfo;
        const {maLichChieu}=thongTinPhim
        const object ={taiKhoanNguoiDung:taiKhoan,maLichChieu:maLichChieu,danhSachVe:danhsach};
        dispatch(requestDatVe(object))
        //window.location.reload();
        setDatGhe([])
        
    }
    const handleDatGhe=(ghe)=>{
        const isBooking =datGhe.find((value)=>value.maGhe===ghe.maGhe) ? true :false;
        if(!isBooking){
            const newGhe=[...datGhe,ghe];
            setDatGhe(newGhe)
            console.log(newGhe)
        }
       else{
          // const cloneDatGhe = [...datGhe];
            if(datGhe.length===1){
                setDatGhe([])
                return;
            }
            const newDatGhe = datGhe.filter((item)=>item.maGhe!==ghe.maGhe);
           // const newDatGhe = cloneDatGhe.splice(index,1)
            setDatGhe(newDatGhe) 
            //console.log(newDatGhe)
       }
       
    }
    useEffect(()=>{
        //const detailInfo = JSON.parse(localStorage.getItem('userInfo'));
        
        const {taiKhoan}= detailInfo ? detailInfo : false;
        if(!taiKhoan){
            history.replace('/login');
            return;
        }
       
        dispatch(getDanhSachPhongVe(maLichChieu))
    },[handleDatVe])
    if(loading){
        return <Loading />
    }
    if(error){
        return <NotFound/>
    }
    return (
        <section className="datVe">
            <Col md={12} xl={9} className="datVe__content">
                        <Header user={detailInfo}/>
                        <div style={{padding:'2rem 3rem'}}>
                            < ThongTinRap thongTinPhim={thongTinPhim}/>
                            <TotalGhe danhSachGhe={danhSachGhe} handleDatGhe={handleDatGhe} datGhe={datGhe}/>
                        </div>
                        <Footer />
                    </Col>
                    <Col md={6} xl={3} className="datVe__payment">
                            <Payment thongTinPhim={thongTinPhim} user={detailInfo} datGhe={datGhe} handleDatVe={handleDatVe}/>
                    </Col>
        </section>
    )
}

export default BookTicket