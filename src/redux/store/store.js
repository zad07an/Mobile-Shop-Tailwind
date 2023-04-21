import { configureStore } from "@reduxjs/toolkit";
import wishReducer from "../features/wish-slice/wishSlice";
import compareReducer from "../features/compare-slice/compareSlice";
import cartReducer from "../features/cart-slice/cartSlice";
import productsReducer from "../features/products-slice/productsSlice";
import singleProductReducer from "../features/single-product-slice/singleProductSlice";
import navbarReducer from "../features/navbar-slice/navbarSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    wish: wishReducer,
    compare: compareReducer,
    cart: cartReducer,
    single_product: singleProductReducer,
    navbar: navbarReducer,
  },
});

export default store;
