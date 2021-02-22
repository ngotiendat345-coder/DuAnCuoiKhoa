import React from 'react'

function Footer(){
    return(
        <footer style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
            <div className="gheThuong">
                <button className="btn btn-secondary text-center"></button>
                <p>Ghế Thường</p>
            </div>
            <div className="gheVIP">
                <button className="btn btn-warning text-center"></button>
                <p>Ghế VIP</p>
            </div>
            <div className="gheVIP">
                <button className="btn btn-danger text-center"></button>
                <p>Ghế đã có người chọn</p>
            </div>
        </footer>

    )
}

export default Footer;