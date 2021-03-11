import { CHANGE_RAP } from 'constant/ListActionType';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss'
function ThongTinRap({danhSachCumRap,current}){
    console.log(current);
    const dispatch = useDispatch();
    const {logo,lstCumRap} = danhSachCumRap;
    return(
        <div className="col-xl-4 col-md-5 col-12 cumRap__container--listDetailRap">
            {lstCumRap.map((item,index)=>{
                const {tenCumRap,maCumRap,diaChi} = item;

                return(
                    <div className={current===maCumRap?"detailRap active" : "detailRap"} key={maCumRap}
                        onClick={()=>{
                            dispatch({type:CHANGE_RAP,payload:maCumRap})
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