import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./productSlice";

const StoreEcom = configureStore({
  reducer: {
    product: productSliceReducer,
  },
});
export default StoreEcom;
