import { cartData } from "./reducer";
import { productData } from "./productReducer";
import { combineReducers } from "redux";

export default combineReducers({
    cartData,
    productData
})


