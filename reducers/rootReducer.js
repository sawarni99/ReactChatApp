import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import socketReducer from "./socketReducer";

const middleware = [thunk];

const rootReducers = combineReducers({
  socketData: socketReducer,
});

const store = createStore(
  rootReducers,
  compose(applyMiddleware(...middleware))
);

export default store;
