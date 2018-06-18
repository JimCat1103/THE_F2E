import {applyMiddleware, combineReducers, createStore} from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import history from "./history";
import {routerMiddleware, routerReducer} from "react-router-redux";

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    }),
    applyMiddleware(reduxThunk, middleware)
);
window._store = store;
export default store;
