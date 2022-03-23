import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  cart: cartReducer,
  searcher: searchReducer,
});
