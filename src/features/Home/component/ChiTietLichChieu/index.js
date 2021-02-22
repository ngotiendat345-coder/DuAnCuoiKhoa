import React from 'react'
import { useSelector } from 'react-redux';
import './style.scss'
import moment from 'moment'
import swal from 'sweetalert'

function ChiTietLichChieu(){
    const {data}= useSelector(state=>state.DetailReducer);
    const {hinhAnh,ngayKhoiChieu,danhGia,tenPhim} = data
    const newMoment=moment(ngayKhoiChieu).format('DD-MM-YYYY');
    return(
        <article className="lichChieu__container">
               <div className="imgContainer">
                    <img src={hinhAnh} alt={tenPhim}/>
               </div>
                <div className="detailLichChieu">
                      <div className="col-lg-7 col-md-12">
                        <span className="ngayPhatHanh">
                               {newMoment}
                            </span>
                            <h3 className="text-capitalize">
                                {tenPhim} - The Con-Heartist
                            </h3>
                            <p>128 phút - 0 IMDb - 2D/Digital</p>
                            <button className="btn btn-danger" onClick={()=>{
                                swal("Xin hãy chọn lịch chiếu ở bên dưới!");
                            }}>
                                Mua vé
                            </button>
                      </div>
                      <div className="col-lg-5 circleCol">
                          <div className="circle">
                          <h1>{danhGia}</h1>
                          </div>
                          <p className="text-center text-light mt-3">114 người đánh giá</p>
                      </div>
                </div>
                </article>
    )
}

export default ChiTietLichChieu;