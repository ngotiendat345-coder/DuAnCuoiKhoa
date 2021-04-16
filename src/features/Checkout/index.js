import Loading from "component/Loading";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Combo from "./pages/Combo";
import DatGhe from "./pages/DatGhe";
import KetQua from "./pages/KetQua";
import ThanhToan from "./pages/ThanhToan";

import "./style.scss";

function CheckOut() {
  const { errorBooking } = useSelector((state) => state.BookingReducer);
  if (errorBooking) {
    return (
      <div className="error">
        <h4>{errorBooking}</h4>
        <Link to="/">
          <button className="btnCheckout">Back home</button>
        </Link>
      </div>
    );
  }
  return (
    <React.Fragment>
      <Header />
      <main className="checkout">
        <Switch>
          <Route exact path="/checkout/combo">
            <Combo />
          </Route>
          <Route exact path="/checkout/datve">
            <DatGhe />
          </Route>
          <Route exact path="/checkout/thanhtoan">
            <ThanhToan />
          </Route>
          <Route exact path="/checkout/ketqua">
            <KetQua />
          </Route>
          <Route path="*">
            <div className="error">
              <h4>Make sure you have booked a movie</h4>
              <Link to="/">
                <button className="btnCheckout">Back home</button>
              </Link>
            </div>
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}
export default CheckOut;
// function CheckOut() {
//   const { errorBooking } = useSelector((state) => state.BookingReducer);

//   if (errorBooking) {
//     return (
//       <div className="error">
//         <h4>{errorBooking}</h4>
//         <Link to="/">
//           <button className="btnCheckout">Back home</button>
//         </Link>
//       </div>
//     );
//   }
//   return (
//     <React.Fragment>
//       <Header />
//       <main className="checkout">
//         <Switch>
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
//           <Route path="*">
//             <div className="error">
//               <h4>Make sure you have booked a movie</h4>
//               <Link to="/">
//                 <button className="btnCheckout">Back home</button>
//               </Link>
//             </div>
//           </Route>
//         </Switch>
//       </main>
//     </React.Fragment>
//   );
// }

// export default CheckOut;
