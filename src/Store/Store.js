import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "../Slices/productSlice";

const StoreEcom = configureStore({
  reducer: {
    product: productSliceReducer,
  },
});
export default StoreEcom;
