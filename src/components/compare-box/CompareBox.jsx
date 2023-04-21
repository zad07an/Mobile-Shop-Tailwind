import React from "react";
import { useDispatch } from "react-redux";
import CompareBoxDesc from "./CompareBoxDesc";
import { RemoveIcon } from "../../icons/HeroIcons";
import { removeCompareItem } from "../../redux/features/compare-slice/compareSlice";
import { useNavigate } from "react-router-dom";

export default function CompareBox({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRemoveCompareItem = () => dispatch(removeCompareItem(item?.id));

  return (
    <div className="flex items-center flex-col gap-4 p-4 border-2 border-gray-300">
      <div className="w-[90%] cursor-pointer" onClick={() => navigate("/product/" + item?.id)}>
        <img src={item?.thumbnail} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <p className=" text-gray-700 text-xl">{item?.title}</p>
      </div>
      <CompareBoxDesc item={item} />
      <div className="w-full">
        <button
          className="w-full py-2 transition-all hover:bg-red-600 bg-red-500 flex justify-center items-center gap-2 text-white rounded-sm"
          onClick={handleRemoveCompareItem}
        >
          <RemoveIcon /> Delete
        </button>
      </div>
    </div>
  );
}
