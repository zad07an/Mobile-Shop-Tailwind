import React, { useEffect, useRef, useState } from "react";
import { createContext } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export const shopContext = createContext();

export default function ShopContext({ children }) {
  const sortModalRef = useRef(false);
  const { productItems } = useSelector((state) => state.products);
  const [productParams, setProductParams] = useSearchParams("");
  const [storage, setStorage] = useState("");
  const [cat, setCat] = useState("");
  const [productStatus, setProductStatus] = useState({
    new: false,
    sale: false,
  });
  const [productPrice, setProductPrice] = useState({ min: 0, max: 0 });
  const [priceInput, setPriceInput] = useState({ min: "", max: "" });
  const [productSort, setProductSort] = useState({
    lower: false,
    higher: false,
    modal: false,
  });

  const productCategories = [
    ...new Set(productItems.map((item) => item.category)),
  ];

  const handleFilterByPrice = () => {
    setProductPrice({
      min: priceInput.min,
      max: priceInput.max,
    });
    setProductParams("key=min" + priceInput.min + "&max=" + priceInput.max);
  };

  const handleResetFilter = () => {
    setProductPrice({ min: 0, max: 0 });
    setPriceInput({ min: "", max: "" });
    setProductParams("");
  };

  const handleFilterByCat = (cat) => {
    setCat(cat);
    if (cat) {
      setProductParams("category=" + cat);
    } else {
      setProductParams("");
    }
  };

  const handleFilterBySale = (e) => {
    setProductStatus({ ...productStatus, sale: e.target.checked });
  };

  const handleFilterByNewest = (e) => {
    setProductStatus({ ...productStatus, new: e.target.checked });
  };

  const handleLowerSort = () => {
    setProductSort({ lower: true, higher: false, modal: false });
  };

  const handleHigherSort = () => {
    setProductSort({ higher: true, lower: false, modal: false });
  };

  const handleDefaultSort = () => {
    setProductSort({ lower: false, higher: false, modal: false });
  };

  const handleOpenSortModal = () => {
    setProductSort({ ...productSort, modal: !productSort.modal });
  };

  const handleFilterByStorage = (newStorage) => {
    setStorage(newStorage);
  };

  return (
    <shopContext.Provider
      value={{
        productStatus,
        setProductStatus,
        productPrice,
        setProductPrice,
        priceInput,
        setPriceInput,
        productSort,
        setProductSort,
        handleFilterByPrice,
        handleResetFilter,
        handleFilterBySale,
        handleFilterByNewest,
        handleLowerSort,
        handleHigherSort,
        handleDefaultSort,
        productParams,
        setProductParams,
        handleOpenSortModal,
        sortModalRef,
        productCategories,
        handleFilterByCat,
        cat,
        handleFilterByStorage,
        storage,
      }}
    >
      {children}
    </shopContext.Provider>
  );
}
