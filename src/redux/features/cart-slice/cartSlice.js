import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
  cartAmount: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
      const productIndex = state.cartItems.findIndex(cart => cart.id === payload.id);
      if (productIndex >= 0) {
        state.cartItems = state.cartItems.filter(cart => cart.id !== payload.id);
        state.cartAmount -= 1;
      } else {
        state.cartItems.push({...payload, quantity: 1});
        state.cartAmount += 1;
      }
    },
    removeItem: (state, {payload}) => {
      state.cartItems = state.cartItems.filter(cart => cart.id !== payload);
      state.cartAmount -= 1;
    },
    increment: (state, {payload}) => {
      const product = state.cartItems.find(cart => cart.id === payload.id);
      product.quantity += 1;
    },
    decrement: (state, {payload}) => {
      const product = state.cartItems.find(cart => cart.id === payload.id);
      product.quantity -= 1;
    },
    clearProducts: (state, {payload}) => {
      state.cartItems = [];
      state.cartAmount = 0;
    },
    totalPrice: (state, {payload}) => {
      state.total = state.cartItems.reduce((total, value) => {
        return total += value.quantity * value.price;
      }, 0)
    }
  }
})

export const {addToCart, removeItem, increment, decrement, clearProducts, totalPrice} = cartSlice.actions;
export default cartSlice.reducer;