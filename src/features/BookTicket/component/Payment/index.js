
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './style.scss'

function Payment({thongTinPhim,user,datGhe,handleDatVe,error}){
    const {diaChi,tenPhim,tenRap,ngayChieu,tenCumRap,gioChieu}=thongTinPhim;
    const dispatch = useDispatch();
    const history = useHistory()
    const {email,soDT}=user
    const tongTien = datGhe.reduce((total,value)=>{
       // const {giaVe}=total || 0;
        return total + value.giaVe
    },0)
    const isBooking =datGhe.length>=1 ? true :false;
    console.log(datGhe)
    return(
        <article className="datve_thanhToan">
            <div className="container-fluid datve_thanhToan__container">
                <div className="col-12">
                <div className="col-12 datve_thanhToan__item1">
                    <h1>{tongTien} đ</h1>
                </div>
                <div className="col-12 datve_thanhToan__item">
                    <h3><span>MQ</span> {tenPhim}</h3>
                    <p>
                        {tenCumRap}
                    </p>
                    <span>Ngày {ngayChieu} - {gioChieu} -{tenRap}</span>
                </div>
                <div className="col-12 datve_thanhToan__item datve_thanhToan__item4">
                    <h4>Ghế :{ datGhe.map((item)=>{
                            return <span key={item.maGhe}>{item.tenGhe},</span>
                        })}</h4>
                    <p>{tongTien} đ</p>
                </div>
                <div className="col-12 datve_thanhToan__item">
                    <small>E-Mail</small>
                    <p>{email}</p>
                </div>
                <div className="col-12 datve_thanhToan__item">
                    <small>Phone</small>
                    <p>{soDT}</p>
                </div>
                </div>
                <div className="notice col-12">
                <p >Vé đã mua không thể đổi hoặc hoàn tiền</p>
                <p>Mã vé sẽ được gửi qua tin nhắn <span>ZMS</span> (tin nhắn Zalo) và<span> Email </span> đã nhập.</p>
                    <button className={isBooking ? "btn btn-danger" :"btn btn-secondary"} disabled={!isBooking }
                        onClick={()=>{
                            swal({
                                title: "Bạn đồng ý thanh toán?",
                                text: "Khi đặt vé , hãy chắc chắn bạn đủ khả năng thanh toán",
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                              })
                              .then((willDelete) => {
                                if (willDelete) {
                                    
                                  swal("Đang đặt vé! Xin hãy đợi một lát!", {
                                    icon: "warning",
                                  });
                                  handleDatVe(datGhe);
                                  
                                  
                                } else {
                                  swal("Bạn chưa đặt vé");
                                }
                              });
                           
                            
                        }}
                    >
                        Đặt vé
                    </button>
                </div>
            </div>
        </article>

    )
}

export default Payment