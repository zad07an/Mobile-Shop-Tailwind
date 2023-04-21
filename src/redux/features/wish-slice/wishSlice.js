import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishItems: [],
  wishAmount: 0
}

const wishList = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWish: (state, {payload}) => {
      const productIndex = state.wishItems.findIndex(item => item.id === payload.id);
      if (productIndex >= 0) { 
        state.wishItems = state.wishItems.filter(item => item.id !== payload.id);
        state.wishAmount -= 1;
      } else {
        state.wishItems.push({...payload, quantity: 1});
        state.wishAmount += 1;
      }
    },
    removeWishItem: (state, {payload}) => {
      state.wishItems = state.wishItems.filter(item => item.id !== payload);
      state.wishAmount -= 1;
    },
    clearWishItems: (state, {payload}) => {
      state.wishItems = [];
      state.wishAmount = 0;
    }
  }
})

export const {addToWish, removeWishItem, clearWishItems} = wishList.actions;
export default wishList.reducer;