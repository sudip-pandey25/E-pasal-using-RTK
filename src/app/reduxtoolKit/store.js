import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Product/slice";
import { categoryReducer } from "./categories/slice";
import { cartReducers } from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    category: categoryReducer,
    cart: cartReducers,
  },
});
