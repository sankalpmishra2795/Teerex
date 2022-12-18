import { combineReducers } from "redux";
import cartReducer from "./addProduct/addProductReducer";
import productReducer from "./product/productReducer";

export const rootReducer = combineReducers({
    productReducer: productReducer,
    cartReducer: cartReducer,
})
