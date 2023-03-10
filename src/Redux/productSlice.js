import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [
      {
        id: 1,
        Image:
          "http://annimexweb.com/items/belle/assets/images/product-images/auto-parts-p-img1.jpg",
        Title: "8 Tons Powerful Car Auto Tow Rope Trail Rope",
        Category: "Accessories",
        Description: "Tow Rope",
        Price: 79.43,
        Brand: "Toyota",
      },
      {
        id: 2,
        Image:
          "http://annimexweb.com/items/belle/assets/images/product-images/auto-parts-p-img2.jpg",
        Title: "Air Pressure Gauge Heavy Duty ",
        Category: "Accessories",
        Description: "Air Pressure Gauge",
        Price: 26.48,
        Brand: "VW",
      },
      {
        id: 3,
        Image:
          "http://annimexweb.com/items/belle/assets/images/product-images/auto-parts-p-img3.jpg",
        Title: "Air Pump MTB Motorcycle Car Basketball Bike",
        Category: "Exterior",
        Description: "Air Pump ",
        Price: 89.5,
        Brand: "Audi",
      },
      {
        id: 4,
        Image:
          "http://annimexweb.com/items/belle/assets/images/product-images/auto-parts-p-img4.jpg",
        Title: "Honeywell Move Pure Car Air Purifier",
        Category: "Accessories",
        Description: "Air purifier",
        Price: 105.9,
        Brand: "Valita",
      },
    ],
    cart: [],
    navSearch: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let repeated = state.cart.find((rep) => rep.id === action.payload.id);

      if (repeated) {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item.Qty += 1;
            return item;
          } else {
            return item;
          }
        });
      } else {
        state.cart.push({ ...action.payload, Qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    clearCart: (state, action) => {
      state.cart = [];
    },

    cartPlusBtn: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.Qty += 1;
        }
        return item;
      });
    },

    cartMinusBtn: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.Qty -= 1;
        }
        return item;
      });
    },

    addToSearch: (state, action) => {
      state.navSearch = [];
      state.navSearch.push(action.payload);
    },

  },
});

export default productSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  clearCart,
  cartPlusBtn,
  cartMinusBtn,
  addToSearch,
} = productSlice.actions;
export const items = (state) => state.product.items;
export const cart = (state) => state.product.cart;
export const navSearch = (state) => state.product.navSearch;
