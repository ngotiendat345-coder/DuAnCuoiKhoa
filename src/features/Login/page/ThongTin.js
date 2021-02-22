import React, { useEffect, useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText,Table  } from 'reactstrap';
import classnames from 'classnames';
import { loginImages } from 'constant/Images';
import './thongTin.scss'
import ThongTinTaiKhoan from '../component/ThongTinTaiKhoan';
import ThayDoiMatKhau from '../component/ThayDoiMatKhau';
import TableLichSu from '../component/TableLichSu';
import { useDispatch, useSelector } from 'react-redux';
import Loading from 'component/Loading';
import { useHistory } from 'react-router-dom';
import { getThongTinAccount } from 'redux/action/UserAction';

const ThongTin = (props) => {
  const [activeTab, setActiveTab] = useState('1');
  const {loading} = useSelector(state=>state.UserReducer);
  const dispatch = useDispatch()
  const history = useHistory()

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  useEffect(()=>{
    const localUser = JSON.parse(localStorage.getItem('userInfo'));
     if(!localUser){
        history.push('/login')
         return;
     }
     const {taiKhoan} =localUser;
     dispatch(getThongTinAccount(taiKhoan))
    
 },[])
  if(loading){
    return <Loading/>
  }
  return (
    <div className="thongTin" style={{backgroundImage:loginImages.backGroundSignIn}}>
      <article className="thongTin__tab">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Thông tin
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Đổi mật khẩu
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Lịch sử đặt vé
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
            <h2 className="thongTin__tab--title">
                Thông Tin Tài Khoản
            </h2>
           <ThongTinTaiKhoan/>
        </TabPane>
        <TabPane tabId="2">
            <h2 className="thongTin__tab--title">
                Thay Đổi Mật Khẩu
            </h2>
            <ThayDoiMatKhau />
        </TabPane>
        <TabPane tabId="3">
          <TableLichSu/>
        </TabPane>
      </TabContent>
      </article>
    </div>
  );
}

export default ThongTin;