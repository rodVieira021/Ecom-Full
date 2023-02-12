import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [
      {
        id: 1,
        productTitle: "Breaking Pads",
        productCategory: "Body Parts",
        productDescription: "Pair of breaking pads",
        productPrice: 159,
        productBrand: "Toyota",
      },
      {
        id: 1,
        productTitle: "",
        productCategory: "",
        productDescription: "",
        productPrice: 1111,
        productBrand: "",
      },
      {
        id: 1,
        productTitle: "",
        productCategory: "",
        productDescription: "",
        productPrice: 1111,
        productBrand: "",
      },
      {
        id: 1,
        productTitle: "",
        productCategory: "",
        productDescription: "",
        productPrice: 1111,
        productBrand: "",
      },
      {
        id: 1,
        productTitle: "",
        productCategory: "",
        productDescription: "",
        productPrice: 1111,
        productBrand: "",
      },
    ],
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
