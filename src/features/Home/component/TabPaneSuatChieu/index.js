import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'reactstrap';
import { filterTenCumRap } from 'utils/common';
import moment from 'moment'
import './style.scss'
import { Link } from 'react-router-dom';
function TabPaneSuatChieu(props){
    const [isClick,setIsClick] = useState(true)
    //console.log(item)
    const {logo,ngayXem,active} = props;
    const newNgayXem = ngayXem.filter((item)=>item.ngayChieu===active);
    const tenCumRap=filterTenCumRap(newNgayXem)
    //console.log(tenCumRap,active)

    return(
        <div className="tabSuatChieu">
           
           {tenCumRap.map((current,index)=>{
                return(
                    <div key={index}>
                        <article className="detailSuatChieu" onClick={() => {
                            setIsClick(!isClick)
                        }}>
                            <div>
                                <img src={logo} alt={current} />
                            </div>
                            <div>
                                <h4>
                                    {current}
                                </h4>
                                <span>120 phút - TIX 0 - IMDb 0</span>
                            </div>

                            {isClick && <div className="timeSuatChieu ">
                            <h4> 2D Digital</h4>

                            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                {newNgayXem.map((value) => {
                                    const { maLichChieu, gioChieu, thoiLuong, ngayChieuGioChieu } = value
                                    const a = moment(ngayChieuGioChieu);
                                    const b = a.add(thoiLuong / 60, 'hours').format("hh:mm A");
                                    //console.log(b)
                                    return (
                                        <div key={maLichChieu}>
                                            <Link className="m-2 btn" key={maLichChieu} to={`/home/booking/${maLichChieu}`}>
                                                {gioChieu}~{b}
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>}
                        </article>
                    </div>
                )
            })}
        </div>
    )

}
export default TabPaneSuatChieu;

