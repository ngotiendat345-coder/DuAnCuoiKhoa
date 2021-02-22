import Loading from 'component/Loading'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'reactstrap'
import { changeHeThong, getFullHeThongRap } from 'redux/action/FilmAction'
import LichChieuRap from '../LichChieuRap'
import ListRap from '../ListRap'
import ThongTinRap from '../ThongTinRap'
import './style.scss'
function CumRap(){
    const [current,setCurrent] = useState(0)
    
    const {maHeThong,dsCumRap,heThongRap,loading}=useSelector(state=>state.CumRapReducer);
    const {logo,lstCumRap} = heThongRap[0] || {};
    const dispatch = useDispatch()
    
    function hangdleChangeHeThong(maHeThong){
        const action=changeHeThong(maHeThong)
        dispatch(action)
    }

    function handleChangeCurrent(index){
        setCurrent(index)
    }
    useEffect(()=>{
        dispatch(getFullHeThongRap(maHeThong))
   },[maHeThong])
   
   if(loading){
    return <Loading/>
}

    return(
        <section className="cumRap">
            <div className="cumRap__container">
                <Container fluid={true}>
                <Row>
                    <ListRap dsCumRap={dsCumRap} maHeThong={maHeThong} hangdleChangeHeThong={hangdleChangeHeThong}/>
                    <ThongTinRap lstCumRap={lstCumRap} logo={logo} current={current} handleChangeCurrent={handleChangeCurrent}/>
                    <LichChieuRap lstCumRap={lstCumRap} current={current}/>
                </Row>
                </Container>
            </div>
        </section>
    )
}

export default CumRap;