import { createSlice } from "@reduxjs/toolkit";
import { navLinks } from "../../../data/navLinks";

const initialState = {
  navbarLinks: navLinks
}

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {}
})

export const {} = navbarSlice.actions;
export default navbarSlice.reducer;