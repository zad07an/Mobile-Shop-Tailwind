import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  compareItems: [],
  compareAmount: 0
}

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare: (state, {payload}) => {
      const productIndex = state.compareItems.findIndex(item => item.id === payload.id);
      if (productIndex >= 0) {
        state.compareItems = state.compareItems.filter(item => item.id !== payload.id);
        state.compareAmount -= 1;
      } else {
        state.compareItems.push({...payload, quantity: 1})
        state.compareAmount += 1;
      }
    },
    removeCompareItem: (state, {payload}) => {
      state.compareItems = state.compareItems.filter(item => item.id !== payload);
      state.compareAmount -= 1;
    },
    clearCompareItems: (state, {payload}) => {
      state.compareItems = [];
      state.compareAmount = 0;
    }
  }
})

export const {addToCompare, removeCompareItem, clearCompareItems} = compareSlice.actions;
export default compareSlice.reducer;