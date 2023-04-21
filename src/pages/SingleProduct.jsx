import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toSingleProduct } from "../redux/features/single-product-slice/singleProductSlice";
import {
  BasketIcon,
  CheckIcon,
  CircleCheckIcon,
  CompareIcon,
  HeartIcon,
} from "../icons/HeroIcons";
import { addToCart } from "../redux/features/cart-slice/cartSlice";
import { addToWish } from "../redux/features/wish-slice/wishSlice";
import { addToCompare } from "../redux/features/compare-slice/compareSlice";

export default function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleItem } = useSelector((state) => state.single_product);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishItems } = useSelector((state) => state.wish);
  const { compareItems } = useSelector((state) => state.compare);

  const handleAddToWish = () => dispatch(addToWish(singleItem));
  const handleAddToCart = () => dispatch(addToCart(singleItem));
  const handleAddToCompare = () => dispatch(addToCompare(singleItem));
  const isProductAdded = cartItems.find((item) => item?.id === singleItem?.id);
  const isProductAddedCompare = compareItems.find(
    (item) => item?.id === singleItem?.id
  );
  const isProductAddedWish = wishItems.find(
    (item) => item?.id === singleItem?.id
  );

  useEffect(() => {
    dispatch(toSingleProduct(id));
  }, [dispatch]);

  return (
    <section className="w-screen pt-10 flex items-center flex-col">
      <div className="w-11/12 grid grid-cols-2 gap-6">
        <div>
          <img src={singleItem?.thumbnail} alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-3xl font-medium">
              {singleItem?.title} {singleItem?.color_name}
            </p>
          </div>
          <div>
            <p className="text-gray-500">{singleItem?.description}</p>
          </div>
          <div>
            <p className="text-xl text-gray-500">
              Արժեքը։ {singleItem?.price?.toLocaleString()}{" "}
              <span className="text-purple-500 font-medium">AMD</span>
            </p>
          </div>
          <div className="w-full grid grid-cols-3 place-items-center gap-5">
            <button
              className=" w-full h-10 flex rounded-sm justify-center items-center gap-2 text-purple-500 text-lg transition-all hover:bg-gray-200 shadow-md"
              onClick={handleAddToWish}
              style={{
                background: isProductAddedWish ? "#34B133" : null
              }}
            >
              {isProductAddedWish ? (
                <span className="text-white flex items-center gap-2">
                  <CheckIcon />
                  Added to Wish
                </span>
              ) : (
                <>
                <HeartIcon />
                Add to Wish
                </>
              )}
            </button>
            <button
              className=" w-full h-10 flex rounded-sm justify-center items-center gap-2 text-purple-500 transition-all text-lg hover:bg-gray-200 shadow-md"
              onClick={handleAddToCompare}
              style={{ background: isProductAddedCompare ? "#34B133" : null}}
            >
              {isProductAddedCompare ? (
                <span className="text-white flex items-center gap-2">
                  <CheckIcon />
                  Added to Compare
                </span>
              ) : (
                <>
                <CompareIcon />
                Add to Compare
                </>
              )}
            </button>
            <button
              className=" w-full h-10 flex rounded-sm justify-center items-center gap-2 text-lg text-white transition-all hover:bg-purple-700 bg-purple-600"
              onClick={handleAddToCart}
              style={{ background: isProductAdded ? "#34B133" : null }}
            >
              {isProductAdded ? (
                <span className="text-white flex items-center gap-2">
                  <CheckIcon /> Added to cart
                </span>
              ) : (
                <>
                  <BasketIcon /> Add to cart
                </>
              )}
            </button>
          </div>
          <table className=" w-[100%] border-2">
            <thead className="border-2">
              <tr className="h-10 text-gray-500">
                <th colSpan={2}>Նկարագրություն</th>
              </tr>
            </thead>
            <tbody className=" text-gray-500 text-center">
              <tr className="border-2 h-10">
                <td>Բրենդ</td>
                <td>{singleItem?.brand}</td>
              </tr>
              <tr className="border-2 h-10">
                <td>Մոդել</td>
                <td>{singleItem?.title}</td>
              </tr>
              <tr className="border-2 h-10">
                <td>Կոդ</td>
                <td>{singleItem?.article}</td>
              </tr>
              <tr className="border-2 h-10">
                <td>Գույն</td>
                <td>{singleItem?.color_name}</td>
              </tr>
              <tr className="border-2 h-10">
                <td>Դիսփլեյ</td>
                <td>{singleItem?.display_technology}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
