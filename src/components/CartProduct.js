import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const CartProduct = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems.map((item) => (
        <tr key={item.id} className=" text-xs md:text-base">
          <td>
            <div className="flex flex-row place-items-center">
              <img
                src={item.img}
                className="w-32 hidden md:block"
                alt={item.title}
              />
              <div className="flex flex-col items-start">
                <p className="px-5">{item.title}</p>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="px-5 cursor-pointer text-orange-400 hover:text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </td>
          <td className="px-5 text-center">
            <span
              className="cursor-pointer"
              onClick={() => dispatch(increase(item))}
            >
              <ExpandLessIcon />
            </span>
            <p className="mx-7">{item.amount}</p>
            <span
              className="cursor-pointer"
              onClick={() => {
                if (item.amount === 1) {
                  dispatch(removeItem(item.id));
                } else {
                  dispatch(decrease(item));
                }
              }}
            >
              <ExpandMoreIcon />
            </span>
          </td>
          <td className="text-center">{item.total}$</td>
        </tr>
      ))}
    </>
  );
};
