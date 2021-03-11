import React from 'react'
import './style.scss'

function Header({user,ketqua=false}) {
  const {hoTen} = user;
  return (
    <header className="bookTicket__header">
      <div style={{display:'flex'}}>
        <h4 className={ketqua ? '' : 'active'}>
          <span>01</span>
          Chọn ghế
        </h4>
        {ketqua && (
          <h4 className={ketqua ? 'active ml-3' : ''}>
            <span>02</span>
            Thanh toán
          </h4>
        )}
      </div>
      <div>
        <p>{hoTen}</p>
      </div>
    </header>
  );
}

export default Header;