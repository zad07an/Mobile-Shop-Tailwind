import React, { useContext } from "react";
import { shopContext } from "../../context/ShopContext";

export default function FilterByStatus() {
  const { productStatus, handleFilterByNewest, handleFilterBySale } =
    useContext(shopContext);

  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="text-gray-600 font-medium text-lg">Ֆիլտրել ըստ</p>
      </div>
      <div className="flex gap-1">
        <input
          type="checkbox"
          name="product_status"
          id="discount"
          checked={productStatus.sale}
          onChange={handleFilterBySale}
          className=" accent-purple-600 cursor-pointer"
        />
        <label htmlFor="discount" className="text-gray-500 cursor-pointer">
          Զեղչված ապրանքների
        </label>
      </div>
      <div className="flex gap-1">
        <input
          type="checkbox"
          name="product_status"
          id="newest"
          checked={productStatus.new}
          onChange={handleFilterByNewest}
          className=" accent-purple-600 cursor-pointer"
        />
        <label htmlFor="newest" className="text-gray-500 cursor-pointer">
          Նոր ապրանքների
        </label>
      </div>
    </div>
  );
}
