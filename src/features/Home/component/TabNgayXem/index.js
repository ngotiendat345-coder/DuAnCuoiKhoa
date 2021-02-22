import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './style.scss'
import { filterNgayXem,weekday } from 'utils/common';
import TabPaneSuatChieu from '../TabPaneSuatChieu';
import { useSelector } from 'react-redux';
const TabNgayXem = ({cumRap,lichChieu}) => {
  const {dsCumRap} = useSelector(state=>state.DetailReducer);    
  const [activeTab, setActiveTab] = useState(0);
  const ngayXem = lichChieu.filter((item)=>item.tenHeThongRap===cumRap);
  const newNgayXem = filterNgayXem(ngayXem)
  
    const target = dsCumRap.find((item)=>cumRap===item.tenHeThongRap);
  //console.log(lichChieu)
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="tabNgayXem">
      <Nav tabs>


        {newNgayXem.map((item,index)=>{
            
            const currentData = new Date(item);

            return(
                <NavItem key={index}>
                    <NavLink
                        className={classnames({ active: activeTab === index })}
                        onClick={() => { toggle(index); }}
                        >
                        <h5>
                          {weekday[currentData.getDay()]} 
                          </h5>
                         <p>
                         {currentData.getDate()}
                         </p>
                       
                    </NavLink>
              </NavItem>
            )
        })}
      </Nav>

      <TabContent activeTab={activeTab}>
        {newNgayXem.map((item,index)=>{
           //const target = ngayXem.filter((curr)=>curr.ngayChieu===item)
          const temp =cumRap
           //.log(temp)
          return(
            <TabPane tabId={+index} key={index}>
                    <TabPaneSuatChieu rap={temp} logo={target.logo} ngayXem={ngayXem} active={item}/>
          </TabPane>
          )
        })}
      </TabContent>
    </div>
  );
}

export default TabNgayXem;