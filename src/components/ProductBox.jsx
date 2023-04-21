import React, { memo } from "react";
import {
  BasketIconLarge,
  CartIconLarge,
  CheckIcon,
  CheckIconLarge,
  CompareIcon,
  CompareIconLarge,
  HeartIcon,
  HeartIconLarge,
  SolidHeartIcon,
  SolidHeartIconLarge,
} from "../icons/HeroIcons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/cart-slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { addToWish } from "../redux/features/wish-slice/wishSlice";
import { addToCompare } from "../redux/features/compare-slice/compareSlice";

export default memo(
  function ProductBox({ product }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems } = useSelector((state) => state.cart);
    const { wishItems } = useSelector((state) => state.wish);
    const { compareItems } = useSelector((state) => state.compare);

    const handleAddToCart = () => dispatch(addToCart(product));
    const handleAddToWish = () => dispatch(addToWish(product));
    const handleAddToCompare = () => dispatch(addToCompare(product));

    const handleToSingleProduct = () => navigate("/product/" + product?.id);
    const isAddedToCart = cartItems.find((item) => item.id === product.id);
    const isAddedToWish = wishItems.find((item) => item.id === product.id);
    const isAddedToCompare = compareItems.find(
      (item) => item.id === product.id
    );

    return (
      <div className="flex items-center border-b-2 border-r-2 border-gray-300 p-2 justify-between flex-col gap-4 hover:shadow-purple-300 hover:shadow-[0_2px_10px] transition-all">
        <div className="w-full flex justify-between items-center">
          {product?.is_sale && product?.is_new ? (
            <div className="flex items-center gap-1">
              <div className="w-[70px] py-[2px] rounded-sm flex justify-center items-center bg-red-600">
                <p className="text-white text-sm">Sale</p>
              </div>
              <div className="w-[70px] py-[2px] rounded-sm flex justify-center items-center bg-purple-500">
                <p className="text-white text-sm">New</p>
              </div>
            </div>
          ) : product?.is_sale ? (
            <div className="w-24 py-[2px] rounded-sm flex justify-center items-center bg-red-600">
              <p className="text-white text-sm">Sale</p>
            </div>
          ) : product?.is_new ? (
            <div className="w-24 py-[2px] rounded-sm flex justify-center items-center bg-purple-500">
              <p className="text-white text-sm">New</p>
            </div>
          ) : null}
          <div className="w-full flex justify-end items-center gap-3">
            <button className="text-gray-500" onClick={handleAddToCompare}>
              {isAddedToCompare ? (
                <span className="text-purple-700 transition-all hover:text-purple-800">
                  <CompareIconLarge />
                </span>
              ) : (
                <CompareIconLarge />
              )}
            </button>
            <button className="text-gray-500" onClick={handleAddToWish}>
              {isAddedToWish ? (
                <span className="text-purple-500 transition-all hover:text-purple-600">
                  <SolidHeartIconLarge />
                </span>
              ) : (
                <HeartIconLarge />
              )}
            </button>
          </div>
        </div>
        <div className="w-[70%] cursor-pointer" onClick={handleToSingleProduct}>
          <img src={product?.thumbnail} alt="" className="w-full" />
        </div>
        <div className=" px-4 flex flex-col gap-1">
          <p className="text-lg">
            {product?.title} {product?.color_name} {product?.storage}
          </p>
          <div>
            <p className="text-sm">Ապրանքի կոդը {product?.article}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-row-reverse">
          <p className="text-xl font-medium">
            {product?.price?.toLocaleString()}{" "}
            <span className="text-purple-500 font-medium">AMD</span>
          </p>
          {product?.old_price && (
            <p className=" line-through text-red-600 font-medium text-xl">
              {product?.old_price?.toLocaleString()} <span>AMD</span>
            </p>
          )}
        </div>
        <div className="w-full py-4 px-2 flex justify-between items-center">
          <div className="w-[80%]">
            <p className="text-sm text-gray-500">{product?.credit}</p>
          </div>
          <button
            className="w-[60px] h-[60px] flex justify-center items-center rounded-full transition-all hover:bg-purple-700 text-lg bg-purple-600 text-white"
            onClick={handleAddToCart}
            style={{ background: isAddedToCart ? "#34B133" : null }}
          >
            {isAddedToCart ? <CheckIconLarge /> : <CartIconLarge />}
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
