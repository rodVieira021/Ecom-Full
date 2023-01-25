import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
    clearCart: (state, action) => {},
  },
});

export default productSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = productSlice.actions;
export const items = (state) => state.product.items;
export const cart = (state) => state.product.cart;
