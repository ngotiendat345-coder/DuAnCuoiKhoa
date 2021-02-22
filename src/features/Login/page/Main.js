import React, { useState } from 'react'
import LoginModal from '../component/LoginModal'
import RegisterModal from '../component/RegisterModal'
import './style.scss'

function Main(){
    const [dangNhap,setDangNhap] = useState(true)
    function changeDangNhap(){
        setDangNhap(!dangNhap);
    }
    return (
        <section className="SignIn">
            <RegisterModal changeDangNhap={changeDangNhap} willing={dangNhap}/>
            <LoginModal changeDangNhap={changeDangNhap} willing={dangNhap}/>
        </section>
    )
}

export default Main;