import {applyMiddleware, createStore} from 'redux'
import FilmReducer from './reducer/FilmReducer'
import {combineReducers,compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import UserReducer from './reducer/userReducer'
import CumRapReducer from './reducer/CumRapReducer'
import DetailReducer from './reducer/DetailFilmReducer';
import BookingReducer from './reducer/BookingReducer';
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({
    FilmReducer: FilmReducer,
    CumRapReducer:CumRapReducer,
    UserReducer: UserReducer,
    DetailReducer:DetailReducer,
    BookingReducer:BookingReducer
})
const store = createStore(rootReducer, compose(applyMiddleware(
    ReduxThunk
),reduxDevTools))

export default store