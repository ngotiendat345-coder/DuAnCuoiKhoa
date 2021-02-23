import { Button } from 'reactstrap';
import React from 'react'
import './style.scss'

function TotalGhe({handleDatGhe,danhSachGhe,datGhe}){
    //console.log(datGhe)
    //const {gheDaChon}=useSelector(state=>state.BookingReducer)
    return(
        <div className="btnContaier">
            <div className="mt-2">
            {danhSachGhe.map((item,index)=>{
                const {maGhe,giaVe,loaiGhe,daDat,tenGhe}=item;
                const target = datGhe.find((value)=>value.maGhe===maGhe)
                //const daThanhToan = gheDaChon.find((value)=>value.maGhe===maGhe)
                //if(daThanhToan)daThanhToan.daDat=true;
                let color = 'secondary';
                if(loaiGhe==='Vip')color='warning';
                if(daDat===true){
                    color='danger';
                };
                if(target)color='success'
                if((index+1)%16===0){
                    return <>
                            <Button color={color} className="m-1" key={index} disabled={daDat} onClick={()=>{
                            handleDatGhe({maGhe,giaVe,tenGhe})
                        }}>
                            </Button>
                            <br/>
                            </>
                }
                return(
                    <Button color={color} className="m-1" key={index} disabled={daDat}
                        onClick={()=>{
                            handleDatGhe({maGhe,giaVe,tenGhe})
                        }}
                    >

                    </Button>
                )
            })}
            </div>
        </div>
    )
}

export default TotalGhe;