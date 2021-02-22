import React, { Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import NotFound from './component/NotFound';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginPage from 'features/Login';

import ChiTiet from 'features/Home/page/ChiTiet';
import Loading from 'component/Loading';

function App(){
    const Home = React.lazy(()=>import('./features/Home'))
    return(
        <>
        <Suspense fallback={<Loading/>}>
        <Router>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={Home}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/chiTiet/:maPhim" component={ChiTiet} />
                <Route component={NotFound} />
            </Switch>
            </Router>
            </Suspense>
        </>
    )
}

export default App;