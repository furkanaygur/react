import { createSlice } from '@reduxjs/toolkit';
import { data } from '../data.js';

const initialState = {
  books: data,
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id
      )
        ? state.cart.map((cartItem) =>
            cartItem.id == action.payload.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...action.payload, count: 1 }];
    },
    increase: (state, action) => {
      state.cart = state.cart.map((cartItem) =>
        cartItem.id === action.payload
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      );
    },
    decrease: (state, action) => {
      state.cart = state.cart.map((cartItem) =>
        cartItem.id === action.payload
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      );
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
  },
});

export const { addToCart, increase, decrease, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
