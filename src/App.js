import Modal from "component/Modal";
import PrivateRoute from "component/PrivateRouter";
import { AppContext } from "context/context";
import Admin from "features/Admin";
import Auth from "features/Admin/page/Auth";
import CheckOut from "features/Checkout";
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
          <Route path="/admin">
            <Admin />
          </Route>
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
          <Route path="/auth">
            <Auth />
          </Route>
          <PrivateRoute path="/checkout">
            <CheckOut />
          </PrivateRoute>
          {/* <PrivateRoute exact path="/checkout/datve">
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
          </PrivateRoute> */}
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
