import React from 'react'
import Slider from "react-slick";
import './style.scss'
import {mobileCarousel} from 'constant/Images'
function UngDung(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <section className="ungDung" id="Ung_Dung">
        <div className="ungDung__container">
            <div className="ungDung__container--left col-lg-6 col-12">
                <h1>
                    Ứng dụng tiện lợi dành cho người yêu điện ảnh
                </h1>
                <br/>
                <p>
                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.
                </p>
                <br/>
                <button className="btn btn-danger">
                    App miễn phí - Tải về ngay
                </button>
                <span>TIX có hai phiên bản 
                        <a href="#">
                        iOS
                    </a> & 
                    <a href="#">
                        Android
                    </a>

                </span>
            </div>
            <div className="ungDung__container--right col-lg-6 col-12">
                    <div className="ungDungCarousel">
                    <Slider {...settings}>
                            <div>
                               
                                <img src={mobileCarousel.slide1} alt="slide1"/>
                            </div>
                            <div>
                                <img src={mobileCarousel.slide2} alt="slide2"/>
                            </div>
                            <div>
                                <img src={mobileCarousel.slide3} alt="slide3"/>
                            </div>
                            <div>
                                <img src={mobileCarousel.slide4} alt="slide4"/>
                            </div>
                            <div>
                                <img src={mobileCarousel.slide5} alt="slide5"/>
                            </div>
                            <div>
                                <img src={mobileCarousel.slide6} alt="slide6"/>
                            </div>
                            <div>
                                <img src={mobileCarousel.slide7} alt="slide7"/>
                            </div>
                            <div>
                                <img src={mobileCarousel.slide8} alt="slide8"/>
                            </div>
                            <div>
                                <img src={mobileCarousel.slide9} alt="slide9"/>
                            </div>
                            <div>
                                <img src={mobileCarousel.slide10} alt="slide10"/>
                            </div>
                </Slider>
                    </div>
            </div>
        </div>
       
    </section>
    )
}

export default UngDung;