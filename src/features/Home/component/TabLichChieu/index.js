import Loading from 'component/Loading';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import TabNgayXem from '../TabNgayXem';
import './style.scss'
function TabLichChieu(){
    const [index,setIndex] = useState(0)
    const {listCumRap,lichChieu,dsCumRap} = useSelector(state=>state.DetailReducer);
   // console.log(lichChieu)
   
    return(
        <article className="tabLichChieu__container" >
            <Container>
            <Row>
            <div className="col-md-12 col-lg-3 tabLichChieu__container--listDetailRap">
                {listCumRap.map((item,thatIndex)=>{
                    const target = dsCumRap.find((curr)=>curr.tenHeThongRap===item)
                    const {maHeThongRap,logo,tenHeThongRap}=target;
                    return(
                        <div className={index === thatIndex ? "detailRap active" : "detailRap"} 
                        key={maHeThongRap}
                            onClick={()=>{
                                setIndex(thatIndex);
                            }}
                        >
                            <div>
                                <img src={logo} alt={tenHeThongRap} />
                            </div>
                            <div>
                                <h4>
                                    {tenHeThongRap}
                            </h4>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="col-lg-9 col-md-12 tabLichChieu__container--suatChieu">
                    <TabNgayXem cumRap={listCumRap[index]} lichChieu={lichChieu}/>
            </div>
            </Row>
            </Container>
        </article>

    )
}

export default TabLichChieu;