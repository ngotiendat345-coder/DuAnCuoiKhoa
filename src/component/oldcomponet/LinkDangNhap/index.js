import { useDispatch } from 'react-redux';
import React, { useState,useEffect } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { DANG_XUAT } from 'constant/UserActionType';
import { getThongTinAccount } from 'redux/action/UserAction';

function LinkDangNhap(){
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const {taiKhoan,hoTen} = user || false;
    const dispatch = useDispatch();

    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    

    useEffect(()=>{
        if(taiKhoan){
            dispatch(getThongTinAccount(taiKhoan))
        }
    },[])
    return(
        <>
            {taiKhoan? <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="btn-dropdown">
                    <DropdownToggle caret>
                        <span><i className="fas fa-user-circle"></i></span>
                        <span>{hoTen}</span>
                    </DropdownToggle>
                    <DropdownMenu>
                       <Link to="/home/thongTin" className="buttonLink"> <DropdownItem>Thông tin</DropdownItem></Link>
                        <DropdownItem onClick={()=>{
                           localStorage.removeItem("userInfo");
                           localStorage.removeItem("accessToken");
                           dispatch({type:DANG_XUAT})
                        }}>Đăng xuất</DropdownItem>
                    </DropdownMenu>
                    </ButtonDropdown> :<Link className="btn-link" to="/login">
                                        <span><i className="fas fa-user-circle"></i></span>
                                        <span>Đăng nhập</span>
                                    </Link>}
        </>
    )
}  

export default LinkDangNhap;