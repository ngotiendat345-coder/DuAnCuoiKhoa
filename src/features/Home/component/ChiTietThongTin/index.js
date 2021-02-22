import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './style.scss';
import TabLichChieu from '../TabLichChieu';
import TabThongTin from '../TabThongTin';
import TabDanhGia from '../TabDanhGia';

const ChiTietThongTin = (props) => {
  

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="chiTietThongTin">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Lịch Chiếu
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Thông Tin
          </NavLink>
         
        </NavItem>
        <NavItem>
        <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Đánh Giá
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <TabLichChieu />
        </TabPane>
        <TabPane tabId="2">
          <TabThongTin/>
        </TabPane>
        <TabPane tabId="3">
          <TabDanhGia />
        </TabPane>
      </TabContent>
    </div>
  );
}

export default ChiTietThongTin;