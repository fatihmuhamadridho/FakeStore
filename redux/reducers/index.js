import { combineReducers } from "redux";
<<<<<<< HEAD
import cartReducer from "./cartReducers";
import productReducer from "./productReducers";
import userReducer from "./userReducers";

export default combineReducers({
  Products: productReducer,
  Users: userReducer,
  Carts: cartReducer,
=======
import productReducer from "./productReducers";

export default combineReducers({
  Products: productReducer,
>>>>>>> 52d1bafaae3ddf69d0a09100bdd3d8c5629d171e
});
