import React, { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { useSelector } from "react-redux";
import ProductBox from "./ProductBox";

export default function ShopProducts() {
  const {cat, storage} = useContext(shopContext);
  const { productStatus, productPrice, productSort } = useContext(shopContext);
  const { productItems } = useSelector((state) => state.products);

  const sortedProducts = [...productItems]?.sort((a, b) =>
    productSort.higher
      ? b.price - a.price
      : productSort.lower
      ? a.price - b.price
      : null
  );

  return (
    <div className=" w-full grid grid-cols-4 md:grid-cols-2 lg:grid-cols-2 xl_1210:grid-cols-3 border-t-2 border-l-2 border-gray-300">
      {sortedProducts
        ?.filter((item) =>
          productStatus.sale && productStatus.new
            ? item?.is_sale || item?.is_new
            : productStatus.sale
            ? item.is_sale
            : productStatus.new
            ? item.is_new
            : productPrice.min || productPrice.max
            ? productPrice.max >= item.price && productPrice.min <= item.price
            : cat
            ? item?.category === cat
            : storage
            ? item?.storage === storage
            : item
        )
        ?.map((product) => {
          return <ProductBox key={product?.id} product={product} />;
        })}
    </div>
  );
}
