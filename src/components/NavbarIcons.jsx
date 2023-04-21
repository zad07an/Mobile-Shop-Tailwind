import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartIcon, CompareIcon, HeartIcon } from "../icons/HeroIcons";

export default function NavbarIcons() {
  const navigate = useNavigate();
  const { wishAmount } = useSelector((state) => state.wish);
  const { compareAmount } = useSelector((state) => state.compare);
  const { cartAmount } = useSelector((state) => state.cart);

  return (
    <>
      <div
        className="text-purple-700 cursor-pointer relative"
        onClick={() => navigate("/wish-list")}
      >
        {wishAmount > 0 ? (
          <div className="w-5 h-5 rounded-full absolute flex justify-center items-center top-[-10px] right-[-10px] bg-red-600">
            <span className="text-white text-[12px]">{wishAmount}</span>
          </div>
        ) : null}
        <HeartIcon />
      </div>
      <div
        className="text-purple-700 cursor-pointer relative"
        onClick={() => navigate("/compare")}
      >
        {compareAmount > 0 ? (
          <div className="w-5 h-5 rounded-full absolute flex justify-center items-center top-[-10px] right-[-10px] bg-red-600">
            <span className="text-white text-[12px]">{compareAmount}</span>
          </div>
        ) : null}
        <CompareIcon />
      </div>
      <div
        className="text-purple-700 cursor-pointer relative"
        onClick={() => navigate("/cart")}
      >
        <div className="w-5 h-5 rounded-full absolute flex justify-center items-center top-[-10px] right-[-10px] bg-red-600">
          <span className="text-white text-[12px]">{cartAmount}</span>
        </div>
        <CartIcon />
      </div>
    </>
  );
}
