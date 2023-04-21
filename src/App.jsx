import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/globals.css";
import Layouts from "./layouts/Layouts";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { totalPrice } from "./redux/features/cart-slice/cartSlice";
import Wish from "./pages/Wish";
import Compare from "./pages/Compare";
import About from "./pages/About";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(totalPrice());
  }, [dispatch, cartItems]);

  return (
    <div className=" font-sans">
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wish-list" element={<Wish />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
