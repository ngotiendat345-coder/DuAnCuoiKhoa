import React from 'react'
import { Col } from 'reactstrap';
import './style.scss'

function ListRap({dsCumRap,maHeThong,hangdleChangeHeThong}){
    return(
        <Col xs="12" xl="1" className="cumRap__container--btnRap">
            {dsCumRap.map((item)=>{
                const {logo,maHeThongRap,tenHeThongRap,biDanh} = item;
                return(
                    <button key={biDanh} className={maHeThong===maHeThongRap ? "active" :""}
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