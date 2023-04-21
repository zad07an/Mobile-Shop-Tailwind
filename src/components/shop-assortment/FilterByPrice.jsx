import React, { useContext } from "react";
import { shopContext } from "../../context/ShopContext";

export default function FilterByPrice() {
  const { priceInput, handleFilterByPrice, handleResetFilter, setPriceInput } =
    useContext(shopContext);

  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-gray-600 font-medium text-lg">Ֆիլտրել ըստ գնի</p>
      </div>
      <div className="w-full flex items-center">
        <input
          type="number"
          className=" w-[50%] h-9 px-3 outline-0 border-2 border-purple-500"
          placeholder="Min"
          value={priceInput.min}
          onChange={(e) =>
            setPriceInput({ ...priceInput, min: e.target.value })
          }
        />
        <input
          type="number"
          className=" w-[50%] h-9 px-3 outline-0 border-2 border-l-0 border-purple-500"
          placeholder="Max"
          value={priceInput.max}
          onChange={(e) =>
            setPriceInput({ ...priceInput, max: e.target.value })
          }
        />
      </div>
      <div className="w-full flex items-center">
        <button
          className=" w-[50%] h-9 bg-purple-600 text-white"
          onClick={handleFilterByPrice}
        >
          Filter
        </button>
        <button
          className=" w-[50%] h-9 bg-red-600 text-white"
          onClick={handleResetFilter}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
