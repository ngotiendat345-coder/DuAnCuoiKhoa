import LinkDangNhap from 'component/LinkDangNhap';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { webLogo } from '../../constant/Images';
import './Header.scss'
function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
   
    return (
      <header className="header">
            <Container fluid={true}>
                <Navbar expand="lg" className="navbar">
                    <NavbarBrand  className="col-4 header__logo">
                        <Link to="/"><img src={webLogo.logoWeb} alt="logo" /></Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} >
                        <i className="fas fa-bars"></i>
                    </NavbarToggler>
                    <Collapse isOpen={isOpen} navbar className="header__collapse col-8">
                        <Nav className="mr-auto" navbar>
                            <NavItem> 
                                <NavLink  className="nav-link" href="#Lich_Chieu" >Lịch chiếu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  className="nav-link" href="#Cum_Rap" >Cụm rạp</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  className="nav-link" disabled={true}>Tin tức</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  className="nav-link" href="#Ung_Dung">Ứng dụng</NavLink>
                            </NavItem>
                        </Nav>
                        <form className="d-flex header__collapse--form">
                            <LinkDangNhap />

                            <select className="form-select" >
                                <option >
                                    Hồ Chí Minh
                                </option>
                                <option value="1">Hà Nội</option>
                                <option value="2">Đà Nẵng</option>
                                <option value="3">Hải Phòng</option>
                                <option value="4">Biên Hòa</option>
                                <option value="5">Nha Trang</option>
                                <option value="6">Bình Dương</option>
                                <option value="7">Phan Thiết</option>
                                <option value="8">Hạ Long</option>
                                <option value="9">Cần Thơ</option>
                                <option value="10">Vũng Tàu</option>
                            </select>
                        </form>
                    </Collapse>
                </Navbar>
            </Container>
      </header>
    );
}

export default Header;