import { combineReducers } from "redux";
import productReducer from "./productReducers";
import cartReducer from "./cartReducers";

export default combineReducers({
  Products: productReducer,
  Carts: cartReducer,
});
