import Modal from "component/Modal";
import PrivateRoute from "component/PrivateRouter";
import { AppContext } from "context/context";
import LayoutCheckout from "features/Checkout";
import Combo from "features/Checkout/pages/Combo";
import DatGhe from "features/Checkout/pages/DatGhe";
import KetQua from "features/Checkout/pages/KetQua";
import ThanhToan from "features/Checkout/pages/ThanhToan";
import Layout from "features/Home";
import CheckIn from "features/Home/page/CheckIn";
import ChiTiet from "features/Home/page/ChiTiet";
import DanhSachMovies from "features/Home/page/DanhSachMovies";
import Main from "features/Home/page/Main";
import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const { closeModal } = useContext(AppContext);
  const location = useLocation();
  return (
    <>
      <Modal />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          closeModal();
        }}
      >
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Layout backgroundColor={"transparent"}>
              <Main />
            </Layout>
          </Route>
          <Route path="/movies">
            <Layout backgroundColor={"#da8252"}>
              <DanhSachMovies />
            </Layout>
          </Route>
          <Route exact path="/phim/:id">
            <Layout background={"transparent"}>
              <ChiTiet />
            </Layout>
          </Route>
          <Route path="/checkin">
            <CheckIn />
          </Route>
          <PrivateRoute exact path="/checkout/combo">
            <LayoutCheckout>
              <Combo />
            </LayoutCheckout>
          </PrivateRoute>
          <PrivateRoute exact path="/checkout/datve">
            <LayoutCheckout>
              <DatGhe />
            </LayoutCheckout>
          </PrivateRoute>
          <PrivateRoute exact path="/checkout/thanhtoan">
            <LayoutCheckout>
              <ThanhToan />
            </LayoutCheckout>
          </PrivateRoute>
          <PrivateRoute exact path="/checkout/ketqua">
            <LayoutCheckout>
              <KetQua />
            </LayoutCheckout>
          </PrivateRoute>
        </Switch>
      </AnimatePresence>
    </>
  );
}
//           <Route exact path="/checkout/combo">
//             <Combo />
//           </Route>
//           <Route exact path="/checkout/datve">
//             <DatGhe />
//           </Route>
//           <Route exact path="/checkout/thanhtoan">
//             <ThanhToan />
//           </Route>
//           <Route exact path="/checkout/ketqua">
//             <KetQua />
//           </Route>
export default App;
