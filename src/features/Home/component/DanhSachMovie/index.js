import React, { useState } from 'react'
import MovieCard from '../MovieCard'
import './style.scss'
import Slider from "react-slick";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,Container } from 'reactstrap';
import classnames from 'classnames';

function DanhSachMovie({listMovie,sapChieu}){
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
      }
    var settings = {
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
 
    return(
        <section className="danhSachMovie" id="Lich_Chieu">
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Đang Chiếu
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Sắp Chiêu
                 </NavLink>
                </NavItem>
            </Nav>
            <div className="danhSachMovie__container">
            <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Slider {...settings}>
                            {listMovie.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Container>
                                            <Row>
                                                {item.map((item) => {
                                                    return <MovieCard item={item} key={item.maPhim} />
                                                })}
                                            </Row>
                                        </Container>
                                    </div>
                                )
                            })}
                        </Slider>
                    </TabPane>
                    <TabPane tabId="2">
                    <Slider {...settings}>
                            {sapChieu.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Container>
                                            <Row>
                                                {item.map((item) => {
                                                    return <MovieCard item={item} key={item.maPhim} />
                                                })}
                                            </Row>
                                        </Container>
                                    </div>
                                )
                            })}
                        </Slider>
                    </TabPane>
                </TabContent>
            </div>
        </section>
    )
}

export default DanhSachMovie;