import Header from 'component/Header';
import React from 'react'
import { useSelector } from 'react-redux';
import Main from './page/Main';
import { useRouteMatch, 
    BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
import ThongTin from 'features/Login/page/ThongTin';
import NotFound from 'component/NotFound';
import BookTicket from 'features/BookTicket';


function Home(){
    //const state = useSelector(state=>state.UserReducer)
    const match = useRouteMatch();
   // console.log(state)
    return(
        <>
            
            <Switch>
                <Route exact path={match.url} component={Main}/>
                <Route path={`${match.url}/booking/:maLichChieu`} component={BookTicket}/>
                <Route path={`${match.url}/thongTin`} component={ThongTin} />
                
                <Route component={NotFound} />
            </Switch>
            
        </>
    )
}

export default Home;