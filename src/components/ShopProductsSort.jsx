import React, { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { ArrowsIcon } from "../icons/HeroIcons";

export default function ShopProductsSort() {
  const {
    handleOpenSortModal,
    productSort,
    sortModalRef,
    handleDefaultSort,
    handleLowerSort,
    handleHigherSort,
  } = useContext(shopContext);

  return (
    <div className="w-full px-4 py-3 border-2 border-b-0 border-gray-300">
      <div className=" w-fit h-8 flex items-center gap-1 relative">
        <p
          className="text-gray-500 flex items-center gap-1 cursor-pointer"
          onClick={handleOpenSortModal}
        >
          Տեսակավորում <span className="text-purple-700 flex items-center gap-1">Ըստ Գնի <ArrowsIcon /></span>
        </p>
        {productSort.modal ? (
          <div
            ref={sortModalRef}
            className=" w-full border-2 border-gray-300 rounded-md bg-white shadow-lg flex flex-col absolute top-[100%] right-0"
          >
            <div className=" border-b-2">
              <p
                className="text-gray-500 hover:text-white transition-all px-4 py-2 hover:bg-purple-500 cursor-pointer text-sm flex items-center gap-1"
                onClick={handleDefaultSort}
              >
                Default
              </p>
            </div>
            <div className="border-b-2">
              <p
                className="text-gray-500 hover:text-white transition-all px-4 py-2 hover:bg-purple-500 cursor-pointer text-sm flex items-center gap-1"
                onClick={handleLowerSort}
              >
                Lower to Higher
              </p>
            </div>
            <div>
              <p
                className="text-gray-500 hover:text-white transition-all px-4 py-2 hover:bg-purple-500 cursor-pointer font-medium text-sm flex items-center gap-1"
                onClick={handleHigherSort}
              >
                Higher to Lower
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
