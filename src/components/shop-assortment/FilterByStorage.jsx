import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { shopContext } from "../../context/ShopContext";

export default function FilterByStorage() {
  const { productItems } = useSelector((state) => state.products);
  const { handleFilterByStorage } = useContext(shopContext);

  const productStorages = [
    ...new Set(productItems.map(item => item.storage)),
  ];

  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="text-gray-600 font-medium text-lg">
          Ֆիլտրել ըստ հիշողության
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {productStorages?.map((storage, index) => {
          return (
            <div
              key={index}
              className="w-full flex items-center px-3 h-10 border-2 border-gray-200 cursor-pointer transition-all text-gray-500 hover:bg-gray-200"
              onClick={() => handleFilterByStorage(storage)}
            >
              <p className=" text-gray-500 hover:text-gray-700 transition-all">
                {storage}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
