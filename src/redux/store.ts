import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {loadState} from '../utils/localStorage';

const middleware = [thunk];
const persistedState = loadState();

const store = createStore(
  rootReducer,
  // persistedState,
  applyMiddleware(...middleware)
);

export default store;
