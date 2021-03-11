import React from 'react'
import { Col } from 'reactstrap';
import './style.scss'

function ListRap({heThongRap,currentHeThong,hangdleChangeHeThong}){
    return(
        <Col xs="12" xl="1" className="cumRap__container--btnRap">
            {heThongRap.map((item)=>{
                const {logo,maHeThongRap,tenHeThongRap,biDanh} = item;
                return(
                    <button key={biDanh} className={maHeThongRap===currentHeThong ? "active" :""}
                        onClick={()=>{
                            hangdleChangeHeThong(maHeThongRap)
                        }}
                    >
                        <img src={logo} alt={tenHeThongRap}/>
                    </button>
                )
            })}
            
        </Col>
    )
}

export default ListRap