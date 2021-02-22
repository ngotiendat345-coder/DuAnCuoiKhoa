import React from 'react'
import { line } from 'constant/Images';
import './style.scss'

function Comment({text,star}){
    return(
        <div className="DanhGiaComment">
            <div className="DanhGiaComment__detail">
                <span className="userLogo">
                    <i className="fas fa-user" />
                </span>
                <div className="userDetail">
                    <p>
                        Han Solo
                    <span>
                            a few seconds ago
                    </span>
                    </p>
                    <h4>
                        {text}
                    </h4>
                </div>
            </div>
            <div className="DanhGiaComment__img">
                <div>
                    {Array.from({length:star},((_,index)=>{
                        return <img src={line.star} alt="star" key={index}/>
                    }))}
                    
                </div>
            </div>
        </div>

    )
}

export default Comment;