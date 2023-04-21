import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeWishItem } from "../redux/features/wish-slice/wishSlice";
import { BasketIcon, CartIcon, CheckIcon, PlusIcon, RemoveIcon } from "../icons/HeroIcons";
import { addToCart } from "../redux/features/cart-slice/cartSlice";

export default function WishBox({ wish }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleAddToCart = () => dispatch(addToCart(wish));
  const handleRemoveItem = () => dispatch(removeWishItem(wish?.id));

  const handleToSingleProduct = () => navigate("/product/" + wish?.id);

  const isAddedToCart = cartItems.find((item) => item.id === wish.id);

  return (
    <div className="flex items-center border-2 border-gray-200 p-2 justify-between flex-col gap-4">
      <div className="w-full grid grid-cols-3">
        <div className="w-28 cursor-pointer" onClick={handleToSingleProduct}>
          <img src={wish?.thumbnail} alt="" className="w-full" />
        </div>
        <div className="flex items-center">
          <p className="text-xl text-center">
            {wish?.title} {wish?.color_name}
          </p>
        </div>
        {/* <div className="flex justify-center items-center flex-col gap-2 border-l-2 border-gray-200">
          <div>
            <p>Quantity:</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <button className="text-purple-500" onClick={handleDecrement}>
              <ChevronDown />
            </button>
            <span className="text-gray-600">{wish?.quantity}</span>
            <button className="text-purple-500" onClick={handleIncrement}>
              <ChevronUp />
            </button>
          </div>
        </div> */}
        <div className="flex justify-center items-center flex-col gap-2 border-l-2 border-gray-200">
          <div>
            <p>Price:</p>
          </div>
          <div>
            <p className="text-lg">
              {wish?.price.toLocaleString()}{" "}
              <span className="text-purple-500 font-medium">AMD</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-2 flex justify-center">
        <button
          className="w-full py-1 transition-all hover:bg-red-600 bg-red-500 flex justify-center items-center gap-2 text-white rounded-sm"
          onClick={handleRemoveItem}
        >
          <RemoveIcon /> Delete
        </button>
        <button
          className="w-full py-2 transition-all hover:bg-purple-600 bg-purple-500 flex justify-center items-center gap-2 text-white rounded-sm"
          onClick={handleAddToCart}
          style={{ background: isAddedToCart ? "#34B133" : null }}
        >
          {isAddedToCart ? (
            <>
              <CheckIcon /> Added to Cart
            </>
          ) : (
            <>
              <CartIcon /> Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
