import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartBox from "../components/CartBox";
import { clearProducts } from "../redux/features/cart-slice/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems, cartAmount, total } = useSelector((state) => state.cart);

  const handleClearProducts = () => dispatch(clearProducts());

  if (cartAmount < 1) {
    return (
      <section className="w-full pt-10 flex justify-center items-center">
        <p className="text-3xl text-gray-500 uppercase font-medium">
          No cart items
        </p>
      </section>
    );
  }
  return (
    <section className="w-full py-10 flex items-center flex-col gap-6">
      <header>
        <h2 className="text-3xl uppercase text-gray-500 font-medium">Cart</h2>
      </header>
      <div className="w-10/12 grid grid-cols-1 gap-1">
        {cartItems?.map((cart) => {
          return <CartBox key={cart?.id} cart={cart} />;
        })}
      </div>
      <div className="w-10/12 py-4 px-4 rounded-md shadow-md flex justify-between items-center">
        <button
          className=" py-2 px-20 text-lg rounded-md text-white uppercase hover:bg-red-600 transition-all bg-red-500"
          onClick={handleClearProducts}
        >
          Clear all
        </button>
        <p className="text-2xl text-gray-600">
          Ընդհանուր: {total?.toLocaleString()}{" "}
          <span className="text-purple-500 font-medium">AMD</span>
        </p>
      </div>
    </section>
  );
}
