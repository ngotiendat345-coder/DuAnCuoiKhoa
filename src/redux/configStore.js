import { applyMiddleware, createStore } from "redux";
import FilmReducer from "./reducer/FilmReducer";
import { combineReducers, compose } from "redux";
import ReduxThunk from "redux-thunk";
import HeThongRapReducer from "./reducer/HeThongRapReducer";
import userReducer from "./reducer/userReducer";
import BookingReducer from "./reducer/BookingReducer";
// import UserReducer from "./reducer/userReducer";
// import CumRapReducer from "./reducer/HeThongRapReducer";
// import DetailReducer from "./reducer/DetailFilmReducer";

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({
  FilmReducer,
  HeThongRapReducer,
  userReducer,
  BookingReducer,
});
const store = createStore(
  rootReducer,
  compose(applyMiddleware(ReduxThunk), reduxDevTools)
);

export default store;
