
import HeroCard from '../HeroCard';
  import './style.scss'
  //import HeroCard from './component/HeroCard';
  import React, { useCallback, useMemo } from "react";
import Slider from "react-slick";
import { carousel, line } from 'constant/Images';
import { Button, Container, Row } from 'reactstrap';
import { convertToSelectValue } from 'utils/common';
import { OPEN_MODEL } from 'constant/ListActionType';
import { useDispatch } from 'react-redux';

function Hero({listMovie}) {
  const dispatch = useDispatch();
  const newData = useMemo(()=>{
   return convertToSelectValue(listMovie)
  },[])
  //console.log(newData)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <div className="hero">
      
      <Slider {...settings} className="slickCarousel">
        <div className="hero__item">
        <img src={carousel.diNguyenBiAn} alt="image" className="img-fluid " />
              <div className="backgroundLinear">
                <Button onClick={()=>{
                            const obj={link:"https://www.youtube.com/embed/HOGfrOK9a84",title:"Độ tộc"}
                            dispatch({type:OPEN_MODEL,payload:obj})
                        }}>
                  <i className="fas fa-play"></i>
                </Button>
              </div>
        </div>
        <div className="hero__item">
        <img src={carousel.luaDeuGapLuaDao} alt="image" className="img-fluid " />
              <div className="backgroundLinear">
                <Button onClick={()=>{
                            const obj={link:"https://www.youtube.com/embed/3AtDnEC4zak",title:"we dont talk anymor"}
                            dispatch({type:OPEN_MODEL,payload:obj})
                        }}>
                  <i className="fas fa-play"></i>
                </Button>
              </div>

        </div>
        
        <div className="hero__item">
        <img src={carousel.thoSanQuaiVat} alt="image" className="img-fluid " />
              <div className="backgroundLinear">
                <Button onClick={()=>{
                            const obj={link:"https://www.youtube.com/embed/mKU6fVhJLyw",title:"một đêm trắng"}
                            dispatch({type:OPEN_MODEL,payload:obj})
                        }}>
                  <i className="fas fa-play"></i>
                </Button>
              </div>
        </div>
      </Slider>
     
    <HeroCard listFilm={newData}/>
    </div>
  );
}

export default Hero;
 