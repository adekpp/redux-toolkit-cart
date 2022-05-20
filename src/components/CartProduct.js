import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export const CartProduct = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems.map((product) => (
        <tr key={product.id} className=" text-xs md:text-base mt-9">
          <td>
            <div className="flex flex-row place-items-center">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.img}
                  className="w-32 hidden md:block"
                  alt={product.title}
                />
              </Link>
              <div className="flex flex-col items-start">
                <Link to={`/product/${product.id}`}>
                  <p className="px-5 hover:underline">{product.title}</p>
                </Link>
                <button
                  onClick={() => dispatch(removeItem(product.id))}
                  className="px-5 cursor-pointer text-orange-400 hover:text-red-500 active:scale-95"
                >
                  Remove
                </button>
              </div>
            </div>
          </td>
          <td className="px-5 text-center">
            <span
              className="cursor-pointer"
              onClick={() => dispatch(increase(product))}
            >
              <ExpandLessIcon className="active:scale-50" />
            </span>
            <p className="mx-7">{product.amount}</p>
            <span
              className="cursor-pointer"
              onClick={() => {
                if (product.amount === 1) {
                  dispatch(removeItem(product.id));
                } else {
                  dispatch(decrease(product));
                }
              }}
            >
              <ExpandMoreIcon className="active:scale-50" />
            </span>
          </td>
          <td className="text-center">{product.total}$</td>
        </tr>
      ))}
    </>
  );
};
