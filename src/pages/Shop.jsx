import React, { useContext, useEffect } from "react";
import { shopContext } from "../context/ShopContext";
import ShopProducts from "../components/ShopProducts";
import ShopProductsSort from "../components/ShopProductsSort";
import FilterByPrice from "../components/shop-assortment/FilterByPrice";
import FilterByStatus from "../components/shop-assortment/FilterByStatus";
import ProductCategories from "../components/shop-assortment/ProductCategories";
import FilterByStorage from "../components/shop-assortment/FilterByStorage";

export default function Shop() {
  const {
    productStatus,
    productSort,
    setProductSort,
    productParams,
    setProductParams,
    sortModalRef,
    productPrice,
    priceInput,
    cat,
    storage
  } = useContext(shopContext);

  useEffect(() => {
    if (productSort.higher) {
      setProductParams("sort=higher&to&lower");
    } else if (cat) {
      setProductParams("category=" + cat);
    } else if (productSort.lower) {
      setProductParams("sort=lower&to&higher");
    } else if (productPrice.min || productPrice.max) {
      setProductParams(
        "filter-by-price=min" + priceInput.min + "&max=" + priceInput.max
      );
    } else if (productStatus.new && productStatus.sale) {
      setProductParams("filter=discounted&newset");
    } else if (productStatus.new) {
      setProductParams("filter=newset");
    } else if (productStatus.sale) {
      setProductParams("filter=discounted");
    } else if (storage) {
      setProductParams("storage=" + storage)
    } else {
      setProductParams("");
    }
  }, [productParams, productStatus, productSort]);

  useEffect(() => {
    const closeOnOutside = (e) => {
      if (sortModalRef.current && !sortModalRef.current.contains(e.target)) {
        setProductSort({ ...productSort, modal: false });
      }
    };
    document.addEventListener("mouseup", closeOnOutside);
    return () => document.removeEventListener("mouseup", closeOnOutside);
  }, [sortModalRef]);

  return (
    <section className="w-full py-10 flex justify-center gap-2">
      <div className=" w-[20%] h-full p-4 flex flex-col gap-6 border-2 border-gray-300">
        <FilterByPrice/>
        <ProductCategories/>
        <FilterByStatus/>
        <FilterByStorage/>
      </div>
      <div className="w-[70%] pb-10 flex flex-col">
        <ShopProductsSort />
        <ShopProducts />
      </div>
    </section>
  );
}
