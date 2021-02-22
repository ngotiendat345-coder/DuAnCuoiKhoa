import { webLogo } from 'constant/Images';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import './style.scss'

function ThongTinRap({thongTinPhim}){
    const {hinhAnh,tenCumRap,diaChi}=thongTinPhim
    const [count,setCount]=useState(300)
    const handleThoiGian=async()=>{
        await swal({
            title: "Hết giờ!",
            text: "Hãy chọn vé trong khoảng thời gian cho phép!",
            icon: "error",
            button: "Đã rõ!",
          });
        setCount(300)
    }
    useEffect(()=>{
        
        let loop = setInterval(()=>{
            let newCount = count-1;
            setCount(newCount);
        },1000)
        if(count===0){
            handleThoiGian()
            clearInterval(loop)
        }
        return ()=>{
            clearInterval(loop)
        }
    },[count])
    return(
        <>
            <div className="thongTinRap">
            <article className="thongTinRap__detail">
                <div>
                    <img src={hinhAnh} alt={tenCumRap}/>
                </div>
                <div>
                    <h4>{tenCumRap}</h4>
                    <p>{diaChi}</p>
                </div>
            </article>
            <div className="thongTinRap__thoiGian">
                <small>thời gian giữ ghế</small>
                <h3>0{Math.trunc(count/60)}:{(count%60) >10? Math.floor(count%60) : `0${Math.floor(count%60)}`}</h3>
                </div>
            </div>
            <button className="btnScreen">Screen</button>
        </>

    )
}

export default ThongTinRap;