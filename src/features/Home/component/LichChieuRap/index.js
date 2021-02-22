import React, { useState } from 'react'
import { Button, Col } from 'reactstrap';
import SuatChieu from '../SuatChieu';

import './style.scss'
function LichChieuRap({lstCumRap,current}){
    const {danhSachPhim} = lstCumRap[current]
    
    return(
        <Col xs="12" md="7" className="cumRap__container--suatChieu">
            {danhSachPhim.map((item)=>{
                return(
                        <SuatChieu key={item.maPhim} {...item}/>
                )
            })}
        </Col>
    )
}

export default LichChieuRap;