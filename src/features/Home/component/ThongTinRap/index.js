import React from 'react'
import { Link } from 'react-router-dom';
import './style.scss'
function ThongTinRap({lstCumRap,logo,current,handleChangeCurrent}){
    // const {logo,lstCumRap} = heThongRap[0];
  //  console.log(lstCumRap)
    return(
        <div className="col-xl-4 col-md-5 col-12 cumRap__container--listDetailRap">
            {lstCumRap.map((item,index)=>{
                const {tenCumRap,maCumRap,diaChi} = item;

                return(
                    <div className={current===index?"detailRap active" : "detailRap"} key={maCumRap}
                        onClick={()=>{
                            handleChangeCurrent(index)
                        }}
                    >
                        <div>
                            <img src={logo} alt={tenCumRap} />
                        </div>
                        <div>
                            <h4>
                                {tenCumRap}
                            </h4>
                            <span>
                                {diaChi}
                            </span>
                            <Link to={`/maRap/${maCumRap}`}>[chi tiết]</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ThongTinRap;