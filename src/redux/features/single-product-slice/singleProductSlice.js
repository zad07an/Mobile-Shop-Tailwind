import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../../data/products";

const initialState = {
  singleItem: {}
}

const singleProductSlice = createSlice({
  name: "single_product",
  initialState,
  reducers: {
    toSingleProduct: (state, {payload}) => {
      const product = productsData.find(item => item.id === Number(payload));
      state.singleItem = product;
    }
  }
})

export const {toSingleProduct} = singleProductSlice.actions;
export default singleProductSlice.reducer;