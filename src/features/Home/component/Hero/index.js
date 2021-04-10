import gozila from "assets/background/thang4.jpg";
import hary from "assets/background/attack.jpg";
import bogia from "assets/background/soma.png";
import oitroi from "assets/background/yourname.jpg";
//import { FiChevronLeft } from "react-icons/fi";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [active, setActive] = useState(0);
  const data = [gozila, hary, bogia, oitroi];
  const handleNextBackground = async () => {
    await setActive((current) => {
      let next = current + 1;
      if (next >= data.length) {
        next = 0;
      }
      return next;
    });
  };
  const handleOnClick = async (index) => {
    await setActive(index);
  };
  const handlePreviosBackground = async () => {
    await setActive((current) => {
      let prev = current - 1;
      if (prev < 0) {
        prev = data.length - 1;
      }
      return prev;
    });
  };
  return (
    <main className="Hero">
      {data.map((item, index) => (
        <section
          key={item}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${item})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: " top center",
            backgroundSize: "cover",
          }}
          className={active === index ? "carousel active" : `carousel`}
        >
          <article>
            <h3>If you have a date, we are the best choice</h3>
            <h1>let your date be inique and special</h1>
            <Link to="/movies">Movies</Link>
          </article>
          <button className="prev-btn" onClick={handlePreviosBackground}>
            <FaChevronLeft size="2rem" />
          </button>
          <button className="next-btn" onClick={handleNextBackground}>
            <FaChevronRight size="2rem" />
          </button>
          <div className="dots">
            {data.map((_, index) => (
              <span
                key={index}
                className={index === active ? "active" : ""}
                onClick={() => {
                  handleOnClick(index);
                }}
              ></span>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default Hero;

// import HeroCard from '../HeroCard';
//   import './style.scss'
//   //import HeroCard from './component/HeroCard';
//   import React, { useCallback, useMemo } from "react";
// import Slider from "react-slick";
// import { carousel, line } from 'constant/Images';
// import { Button, Container, Row } from 'reactstrap';
// import { convertToSelectValue } from 'utils/common';
// import { OPEN_MODEL } from 'constant/ListActionType';
// import { useDispatch } from 'react-redux';

// const dispatch = useDispatch();

// var settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };

// return (
//   <div className="hero">

//     <Slider {...settings} className="slickCarousel">
//       <div className="hero__item">
//       <img src={carousel.diNguyenBiAn} alt="image" className="img-fluid " />
//             <div className="backgroundLinear">
//               <Button onClick={()=>{
//                           const obj={link:"https://www.youtube.com/embed/HOGfrOK9a84",title:"Độ tộc"}
//                           dispatch({type:OPEN_MODEL,payload:obj})
//                       }}>
//                 <i className="fas fa-play"></i>
//               </Button>
//             </div>
//       </div>
//       <div className="hero__item">
//       <img src={carousel.luaDeuGapLuaDao} alt="image" className="img-fluid " />
//             <div className="backgroundLinear">
//               <Button onClick={()=>{
//                           const obj={link:"https://www.youtube.com/embed/3AtDnEC4zak",title:"we dont talk anymor"}
//                           dispatch({type:OPEN_MODEL,payload:obj})
//                       }}>
//                 <i className="fas fa-play"></i>
//               </Button>
//             </div>

//       </div>

//       <div className="hero__item">
//       <img src={carousel.thoSanQuaiVat} alt="image" className="img-fluid " />
//             <div className="backgroundLinear">
//               <Button onClick={()=>{
//                           const obj={link:"https://www.youtube.com/embed/mKU6fVhJLyw",title:"một đêm trắng"}
//                           dispatch({type:OPEN_MODEL,payload:obj})
//                       }}>
//                 <i className="fas fa-play"></i>
//               </Button>
//             </div>
//       </div>
//     </Slider>

//   <HeroCard />
//   </div>
// );
