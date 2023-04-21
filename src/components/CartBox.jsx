import React, { memo } from "react";
import {
  CheckIcon,
  ChevronDown,
  ChevronUp,
  HeartIcon,
  RemoveIcon,
} from "../icons/HeroIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  removeItem,
} from "../redux/features/cart-slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { addToWish } from "../redux/features/wish-slice/wishSlice";

export default memo(
  function CartBox({ cart }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { wishItems } = useSelector((state) => state.wish);

    const handleAddToWish = () => dispatch(addToWish(cart));
    const handleRemoveItem = () => dispatch(removeItem(cart?.id));
    const handleIncrement = () => dispatch(increment(cart));
    const handleDecrement = () => {
      if (cart?.quantity === 1) {
        dispatch(removeItem(cart?.id));
        return;
      }
      dispatch(decrement(cart));
    };
    const handleToSingleProduct = () => navigate("/product/" + cart?.id);

    const isAddedToWish = wishItems.find((item) => item.id === cart.id);

    return (
      <div className="flex items-center border-2 border-gray-200 p-2 justify-between flex-col gap-4">
        <div className="w-full grid grid-cols-4">
          <div className="w-28 cursor-pointer" onClick={handleToSingleProduct}>
            <img src={cart?.thumbnail} alt="" className="w-full" />
          </div>
          <div className="flex items-center">
            <p className="text-xl text-center">
              {cart?.title} {cart?.color_name}
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-2 border-l-2 border-gray-200">
            <div>
              <p>Quantity:</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <button className="text-purple-500" onClick={handleDecrement}>
                <ChevronDown />
              </button>
              <span className="text-gray-600">{cart?.quantity}</span>
              <button className="text-purple-500" onClick={handleIncrement}>
                <ChevronUp />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col gap-2 border-l-2 border-gray-200">
            <div>
              <p>Price:</p>
            </div>
            <div>
              <p className="text-lg">
                {cart?.price.toLocaleString()}{" "}
                <span className="text-purple-500 font-medium">AMD</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-2 flex justify-center">
          <button
            className="w-full py-2 transition-all hover:bg-red-600 bg-red-500 flex justify-center items-center gap-2 text-white rounded-sm"
            onClick={handleRemoveItem}
          >
            <RemoveIcon /> Delete
          </button>
          <button
            className="w-full py-2 transition-all hover:bg-purple-600 bg-purple-500 flex justify-center items-center gap-2 text-white rounded-sm"
            onClick={handleAddToWish}
            style={{ background: isAddedToWish ? "#34B133" : null }}
          >
            {isAddedToWish ? (
              <>
                <CheckIcon /> Added to Wish
              </>
            ) : (
              <>
                <HeartIcon /> Add to Wish
              </>
            )}
          </button>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
      return true;
    }
    return false;
  }
);
