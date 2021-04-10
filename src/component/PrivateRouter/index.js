import React from "react";
import { Redirect, Route } from "react-router";

function PrivateRoute({ children, ...rest }) {
  const user =
    localStorage.getItem("UserAccount") || localStorage.getItem("UserAdmin");

  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Redirect to="/"></Redirect>;
      }}
    ></Route>
  );
}

export default PrivateRoute;
