import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./shopping/rootReducer";
import { thunk } from "redux-thunk";


const composeEhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEhancers(applyMiddleware(thunk))
);

export default store;