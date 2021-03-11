 
import { line } from 'constant/Images';
import { OPEN_MODEL } from 'constant/ListActionType';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import './style.scss'

function MovieCard({item}){
    const {danhGia,hinhAnh,tenPhim,maPhim,trailer}=item;
    const cloneDanhGia =danhGia >10 ? 10 :danhGia;
    //console.log(trailer)
    const dispatch = useDispatch()
    return(
        <Col lg="3" md="4" className="danhSachMovie__container--card">

            <div className="imgContainer ">
                <img src={hinhAnh} alt={tenPhim} className="img-fluid"/>
                <div className="imgContainerOverplay backgroundLinear">
                    <button
                        onClick={()=>{
                            const obj={title:tenPhim,link:trailer}
                            dispatch({type:OPEN_MODEL,payload:obj})
                        }}
                    ><i className="fas fa-play" /></button>
                </div>
            </div>
            <footer>
                <h3>
                    <span>C18</span>
                    {tenPhim}
             </h3>
             <p>110 phút</p>
                <div className="footerOverplay">
                    <Link className="btn btn-danger" to={`/chiTiet/${maPhim}`}>Mua vé</Link>
                </div>
            </footer>
            <div className="rate">
                <h4>{cloneDanhGia}</h4>
                <div className="star">
                        {Array.from({length:Math.ceil(cloneDanhGia/2)},(_,index)=>{
                            const testAStarOrHalf = Math.floor(cloneDanhGia/2);
                            return <img src={testAStarOrHalf >= index+1 ? line.star : line.starHalf} alt="star" key={index}/>
                        })}
                </div>
            </div>
        </Col>

    )
}

export default MovieCard;