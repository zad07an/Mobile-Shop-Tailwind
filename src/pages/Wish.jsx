import React from "react";
import { useDispatch, useSelector } from "react-redux";
import WishBox from "../components/WishBox";
import { clearWishItems } from "../redux/features/wish-slice/wishSlice";
import { useNavigate } from "react-router-dom";
import { CartIcon } from "../icons/HeroIcons";

export default function Wish() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {wishItems, wishAmount} = useSelector(state => state.wish)

  const handleClearWishItems = () => dispatch(clearWishItems())

  if (wishAmount < 1) {
    return (
      <section className="w-full py-10 flex justify-center items-center">
        <p className="text-3xl text-gray-500 uppercase font-medium">
          No wish items
        </p>
      </section>
    );
  }
  return (
    <section className="w-full pt-10 flex items-center flex-col gap-6">
      <header>
        <h2 className="text-3xl uppercase text-gray-500 font-medium">Wish List</h2>
      </header>
      <div className="w-10/12 grid grid-cols-1 gap-1">
        {wishItems?.map((wish) => {
          return <WishBox key={wish?.id} wish={wish} />;
        })}
      </div>
      <div className="w-10/12 py-4 px-4 rounded-md shadow-md flex justify-between items-center">
        <button
          className=" py-2 px-20 text-lg rounded-md text-white uppercase hover:bg-red-600 transition-all bg-red-500"
          onClick={handleClearWishItems}
        >
          Clear all
        </button>
        <button
          className=" flex items-center gap-2 py-2 px-20 text-lg rounded-md text-white uppercase hover:bg-purple-800 transition-all bg-purple-700"
          onClick={() => navigate("/shop")}
        >
          <CartIcon/> Continue Shopping
        </button>
      </div>
    </section>
  );
}
