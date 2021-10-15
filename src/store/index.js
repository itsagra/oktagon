import { createStore, applyMiddleware, compose } from "redux";
import { matchReducer } from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  matchReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
