import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Product/slice";
import { categoryReducer } from "./categories/slice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    category: categoryReducer,
  },
});
