import Loading from 'component/Loading';
import { loginImages } from 'constant/Images';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDataChiTietPhim } from 'redux/action/FilmAction';
import ChiTietLichChieu from '../component/ChiTietLichChieu';
import ChiTietThongTin from '../component/ChiTietThongTin';
import './style.scss';

function ChiTiet(){
    const dispatch = useDispatch();
    const {loading} = useSelector(state=>state.DetailReducer)
    const {maPhim} = useParams();
    // const {chiTietPhim,chiTietHeThongRap}= useSelector(state=>state.CumRapReducer);
    // console.log(chiTietHeThongRap,chiTietPhim)
    
    const background = loginImages.backapp;
    useEffect(()=>{
        dispatch(getDataChiTietPhim(maPhim))
    },[])
    if(loading){
        return <Loading/>
    }
    return(
        <section className="chiTietPhim" style={{background:` linear-gradient(to bottom,#0a2029b3,#0a2029b3),url(${background})`}}>
            <div className="chiTietPhim__container">
            <ChiTietLichChieu/>
            <ChiTietThongTin/>
            </div>
        </section>
    )
}

export default ChiTiet;