import React, { useState } from "react";
import FilmManagement from "./page/FilmManagement";
import Nav from "./component/Sidebar";
import Header from "./component/Header";
import "./style.scss";
import { Redirect, Route, Switch } from "react-router";
import AddEditFilm from "./page/AddEditFilm";
import Auth from "./page/Auth";
import axiosClient from "api/axiosClient";
import UserManagement from "./page/UserManagement";
import Administrator from "./page/Administrator";

function Admin() {
  const [openNav, setOpenNav] = useState(false);
  const user = localStorage.getItem("UserAdmin")
    ? JSON.parse(localStorage.getItem("UserAdmin"))
    : null;
  if (!user) {
    return <Redirect to="/auth" />;
  }
  axiosClient.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${user.accessToken}`;
  return (
    <React.Fragment>
      <main className={openNav ? "admin active" : "admin"}>
        <Nav setOpenNav={setOpenNav} openNav={openNav} />
        {/* <Header /> */}
        <Switch>
          <Route exact path="/admin">
            <Administrator />
          </Route>
          <Route exact path="/admin/user">
            <UserManagement />
          </Route>
          <Route exact path="/admin/film">
            <FilmManagement />
          </Route>
          <Route path="/admin/film/add">
            <AddEditFilm />
          </Route>
          <Route path="/admin/film/:id">
            <AddEditFilm />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default Admin;
