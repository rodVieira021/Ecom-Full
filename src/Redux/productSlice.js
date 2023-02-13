import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [
      {
        id: 1,
        image: "./Images/cart/breakingpads.jpeg",
        productTitle: "Breaking Pads",
        productCategory: "Breaking system",
        productDescription: "Pair of breaking pads",
        productPrice: 159,
        productBrand: "Toyota",
      },
      {
        id: 1,
        image: "./Images/cart/oilpump.jpg",
        productTitle: "Oil pump",
        productCategory: "Engine",
        productDescription: "Oil system",
        productPrice: 78,
        productBrand: "BMW",
      },
      {
        id: 1,
        image: "./Images/cart/frontbump.png",
        productTitle: "Front Bumper",
        productCategory: "Exterior body part",
        productDescription: "Body party",
        productPrice: 578,
        productBrand: "Audi",
      },
      {
        id: 1,
        image: "./Images/cart/tiresgm.jpeg",
        productTitle: "Tires",
        productCategory: "Tires/Wheels",
        productDescription: "Aloy rim wheels",
        productPrice: 1450,
        productBrand: "GM",
      },
      {
        id: 1,
        image: "./Images/cart/gearbox.jpeg",
        productTitle: "Gear Box",
        productCategory: "Inside parts",
        productDescription: "Transmission",
        productPrice: 750,
        productBrand: "Volvo",
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
