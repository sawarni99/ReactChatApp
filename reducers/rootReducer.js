import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import socketReducer from "./socketReducer";
import chatReducer from "./chatReducer";

const middleware = [thunk];

const rootReducers = combineReducers({
  socketData: socketReducer,
  chatData: chatReducer,
});

const store = createStore(
  rootReducers,
  compose(applyMiddleware(...middleware))
);

export default store;
