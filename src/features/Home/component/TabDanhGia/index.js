import { line } from 'constant/Images';
import React, { useRef, useState } from 'react'
import { Container,Col } from 'reactstrap';
import Comment from '../Comment';
import './style.scss'

function TabDanhGia(){
    const [active,setActive]=useState(3);
    const [comment,setComment]=useState([{text:'yeu em la duyen phan',star:4}])
    const textValue = useRef(null);

    const handleComment=()=>{
        const value=textValue.current.value;
        //console.log(value)
        const commentText = {text:value,star:active};
        const newComment = [...comment,commentText]
        setComment(newComment);
        textValue.current.value="";
    }
    return(
        <Container className="tabDanhGia" fluid={true}>
            <Col sm="12">
                <div className="iconContainer">
                    <span>
                        <i className="fas fa-user"></i>
                    </span>
                </div>
                <div className="imgContainer">
                    {Array.from({length:5},((_,index)=>{
                        return(
                            <button key={index} className={index<active ? "active" :""}
                                onClick={()=>{
                                    const newActive=index+1;
                                    setActive(newActive)
                                }}
                            >
                                <img src={line.star} alt="star"/>
                            </button>
                        )
                    }))}
                </div>
                
                <textarea rows="4" placeholder="Bạn nghĩ gì về phim này" ref={textValue}></textarea>
                <div>
                    <button className="btn btn-danger mb-3" onClick={handleComment}>
                        Đăng
                    </button>
                </div>
                {comment.map((item,index)=>{
                    return <Comment {...item} key={index}/>
                })}
            </Col>
        </Container>
    )
}

export default TabDanhGia;