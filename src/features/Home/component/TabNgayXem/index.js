import React, { useEffect, useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import "./style.scss";
import { filterNgayXem, getUnique, weekday } from "utils/common";
import TabPaneSuatChieu from "../TabPaneSuatChieu";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_DETAIL_RAP } from "constant/ListActionType";

const TabNgayXem = () => {
  const [activeTab, setActiveTab] = useState(0);
  const {
    heThongRapChieu,
    currentHeThong,
    listNgayChieu,
    cumRapChieu,
    logo,
  } = useSelector((state) => state.DetailReducer);
  const dispatch = useDispatch();
  console.log(cumRapChieu);
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  function handleUpdate() {
    const target = heThongRapChieu.find(
      (item) => item.maHeThongRap === currentHeThong
    );
    const { cumRapChieu, logo } = target;
    const listNgayChieu = cumRapChieu
      .map((item) => {
        return getUnique(item.lichChieuPhim, "ngayChieuGioChieu");
      })
      .flat();

    const test = Array.from({ length: listNgayChieu.length }, (_, index) => {
      const searchValue = listNgayChieu[index];
      const filterCumRap = cumRapChieu.map((value) => {
        const { maCumRap, tenCumRap, lichChieuPhim } = value;
        const test3 = lichChieuPhim.filter((item) =>
          item.ngayChieuGioChieu.includes(searchValue)
        );
        //console.log(test3);
        return { lichChieu: test3, maCumRap, tenCumRap };
      });
      return { searchValue, filterCumRap };
    });

    //console.log(test)
    dispatch({
      type: UPDATE_DETAIL_RAP,
      payload: {
        cumRapChieu: test,
        listNgayChieu: listNgayChieu,
        logo,
      },
    });
  }
  useEffect(() => {
    if (heThongRapChieu.length >= 1) {
      handleUpdate();
    }
    // dispatch({type:UPDATE_DETAIL_RAP,payload:target})
  }, [currentHeThong]);
  return (
    <div className="tabNgayXem">
      <Nav tabs>
        {listNgayChieu.map((item, index) => {
          const currentData = new Date(item);

          return (
            <NavItem key={index}>
              <NavLink
                className={classnames({ active: activeTab === index })}
                onClick={() => {
                  toggle(index);
                }}
              >
                <h5>{weekday[currentData.getDay()]}</h5>
                <p>{currentData.getDate()}</p>
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
      <TabContent activeTab={activeTab}>
      {cumRapChieu.map((item, index) => {
          //console.log(cumRapChieu);
          const { filterCumRap } = item;
          //console.log(filterCumRap.flat())
          return (
            <TabPane tabId={+index} key={index}>
              {filterCumRap.map((curr) => {
                return (
                  <TabPaneSuatChieu
                    logo={logo}
                    item={curr}
                    key={curr.maCumRap}
                    activeTab={activeTab}
                  />
                );
              })} 
            </TabPane>
          );
        })} 
      </TabContent>
    </div>
  );
};

export default TabNgayXem;
