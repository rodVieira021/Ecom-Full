import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [
      {
        id: 1,
        Image: ".././Images/section-5-img/1a.jpg",
        Title: "8 Tons Powerful Car Auto Tow Rope Trail Rope",
        Category: "Accessories",
        Description: "Tow Rope",
        Price: 79.43,
        Brand: "Toyota",
      },
      {
        id: 1,
        Image: "./Images/section-5-img/2a.jpg",
        Title: "Air Pressure Gauge Heavy Duty ",
        Category: "Accessories",
        Description: "Air Pressure Gauge",
        Price: 26.48,
        Brand: "VW",
      },
      {
        id: 1,
        Image: "./Images/section-5-img/3a.jpg",
        Title: "Air Pump MTB Motorcycle Car Basketball Bike",
        Category: "Exterior",
        Description: "Air Pump ",
        Price: 89.5,
        Brand: "Audi",
      },
      {
        id: 1,
        Image: "./Images/section-5-img/4a.jpg",
        Title: "Honeywell Move Pure Car Air Purifier",
        Category: "Accessories",
        Description: "Air purifier",
        Price: 105.9,
        Brand: "Valita",
      },
    ],
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {},

    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export default productSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = productSlice.actions;
export const items = (state) => state.product.items;
export const cart = (state) => state.product.cart;
