import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../../data/products";

const initialState = {
  productItems: productsData
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  }
})

export const {filterBySale} = productsSlice.actions;
export default productsSlice.reducer;