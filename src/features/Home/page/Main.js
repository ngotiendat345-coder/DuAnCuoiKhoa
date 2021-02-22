import Loading from 'component/Loading';
import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { getListMovie } from 'redux/action/FilmAction';
import DanhSachMovie from '../component/DanhSachMovie';
import Hero from '../component/Hero';
import Line from '../component/Line';
import FixIfram from 'component/FixIfram';
import CumRap from '../component/CumRap';
import Header from 'component/Header';
import UngDung from '../component/UngDung';
import Footer from 'component/Footer';

function Main(){
    const {loading,listMovie,sapChieu} = useSelector(state=>state.FilmReducer)
   const dispatch = useDispatch()
    //console.log(heThongRap)
    //console.log(dsCumRap)
    useEffect(()=>{
        dispatch(getListMovie())
    },[])
    
    if(loading){
        return <Loading/>
    }
   
    return(
        <>

            <Header/>
             <Hero listMovie={listMovie}/> 
            <DanhSachMovie listMovie={listMovie} sapChieu={sapChieu}/>  
            <Line/>
            <CumRap/>
            <Line/>
            <UngDung/>
            <Footer/>
            <FixIfram/> 
        </>
    )
}

export default Main;