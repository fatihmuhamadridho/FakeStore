import { combineReducers } from "redux";
import productReducer from "./productReducers";
import cartReducer from "./cartReducers";
import categoryReducer from "./categoryReducers";

export default combineReducers({
  Products: productReducer,
  Carts: cartReducer,
  Category: categoryReducer,
});
