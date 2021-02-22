import React from 'react'
import './style.scss'

function Header({user}) {
  const {hoTen} = user;
  return (
          <header className="bookTicket__header">
            <div>
              <h4><span>01</span>
                            chọn ghế & thanh toán
                  </h4>
            </div>
            <div>
              <p>
                {hoTen}
               </p>
            </div>
          </header>
  )
}

export default Header;