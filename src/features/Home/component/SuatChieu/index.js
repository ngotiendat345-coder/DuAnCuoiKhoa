import React, { useRef, useState } from 'react'
import moment from 'moment'
import { Button } from 'reactstrap'
import { tachNgayChieuGioChieu } from 'utils/common'
import { Link } from 'react-router-dom'

function SuatChieu({hinhAnh,maPhim,tenPhim,lstLichChieuTheoPhim}){
    const [isClick,setIsClick] = useState(false)
    const newLichChieu = tachNgayChieuGioChieu(lstLichChieuTheoPhim)
    //console.log()
    return(
        <>
            <article className="detailSuatChieu" onClick={() => {
                setIsClick(!isClick)
            }}>
                <div>
                    <img src={hinhAnh} alt={tenPhim} />
                </div>
                <div>
                    <h4>
                        {tenPhim}
                    </h4>
                    <span>90 phút - TIX 0 - IMDb 0</span>
                </div>
            </article>
            {isClick && <div className="timeSuatChieu ">
                <h4> 2D Digital</h4>
                {newLichChieu.map((value) => {
                    const { maLichChieu, gioChieu } = value
                    return (
                        <Link to={`/chiTiet/${maPhim}`} className="btn btn-success m-2" key={maLichChieu}>
                            {gioChieu}
                        </Link>
                    )
                })}
            </div>}
        </>
    )
}

export default SuatChieu;