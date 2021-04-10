import { doiTac, icon } from 'constant/Images';
import React from 'react'
import './style.scss'

function Footer(){
    //console.log(doiTac)
    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__top--tix col-6 col-md-4">
                        <h4>TIX</h4>
                        <div>
                            <ul>
                                <li>
                                    <a href="#">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Brand Guidelines
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="#">
                                        Thỏa thuận sử dụng
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Chính sách bảo mật
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__top--doiTac col-6 col-md-4">
                        <h4>ĐỐI TÁC</h4>
                        <div>
                        {doiTac.map((item,index)=>{
                            return (<img src={item} key={index} alt=""/>)
                        })}
                        </div>
                    </div>
                    <div className="footer__top--mobile col-6 col-md-2">
                        <h4>MOBILE APP</h4>
                        <div>
                            <img src={icon.apple} alt="facebook"/>
                            <img src={icon.android} alt="zalo"/>
                        </div>
                    </div>
                    <div className="footer__top--social col-6 col-md-2">
                        <h4>SOCIAL</h4>
                        <div>
                            <img src={icon.facebook_logo} alt="facebook"/>
                            <img src={icon.zalo_logo} alt="zalo"/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer__bottom">
                    <div className="footer__bottom--img1">
                       <img src={icon.zion} alt="zion"/>
                    </div>
                    <div className="footer__bottom--content">
                        <h4>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h4>
                        <p>
                            Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.<br />
          Giấy chứng nhận đăng ký kinh doanh số: 0101659783,<br />
          đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.<br />
          Số Điện Thoại (Hotline): 1900 545 436<br />
          Email: support@tix.vn<br />
                        </p>
                    </div>
                    <div className="footer__bottom--img2">
                        <img src={icon.bocongThuong} alt="bocongthuong"/>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;