import React, { useContext } from "react";
import { shopContext } from "../../context/ShopContext";

export default function ProductCategories() {
  const { productCategories, handleFilterByCat } = useContext(shopContext);

  return (
    <div className="flex flex-col items-start gap-3">
      <div>
        <p className="text-gray-600 font-medium text-lg">Կատեգորիաներ</p>
      </div>
      <div className="flex" onClick={() => handleFilterByCat("")}>
        <p className="text-gray-500 cursor-pointer">All</p>
      </div>
      {productCategories?.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex"
            onClick={() => handleFilterByCat(item)}
          >
            <p className="text-gray-500 cursor-pointer">
              {item[0]?.toUpperCase() + item?.slice(1).toLowerCase()}
            </p>
          </div>
        );
      })}
    </div>
  );
}
