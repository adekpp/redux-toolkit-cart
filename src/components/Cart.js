import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { CartList } from "./CartList";
import { CartProduct } from "./CartProduct";

import { motion } from "framer-motion";
export const Cart = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const [totalPrev, setTotalPrev] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (totalPrev !== total) {
      setTotalPrev((totalPrev) => total);
    }
    dispatch(calculateTotals());
  }, [dispatch, cartItems, total, totalPrev]);

  if (amount < 1)
    return (
      <div className=" mt-80 px-5 md:text-3xl flex w-full flex-col items-center">
        <h1>Your cart is empty. Add something to your cart.</h1>
        <Link to="/">
          <button className=" mt-4 rounded-full px-4 py-2 text-white bg-orange-400 hover:bg-orange-500 font-semibold">
            Go shopping {">"}
          </button>
        </Link>
      </div>
    );

  return (
    <>
      <CartList>
        <CartProduct />
      </CartList>
      <div className=" md:w-2/3 mx-auto">
        <div className="flex flex-row justify-end mr-2">
          <div>
            <p className="font-semibold text-lg mr-3">TOTAL:</p>
          </div>

          <div className="w-14 md:w-24 text-center">
            <span
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 1 }}
              className="font-semibold text-lg text-green-500"
            >
              {total === totalPrev ? (
                <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.2 }}
                  exit={{ scale: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {total}$
                </motion.p>
              ) : (
                <p>{total}$</p>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-3">
        <div>
          <button className="rounded-full px-4 py-2 bg-orange-400 text-white font-semibold mb-2 hover:bg-orange-500">
            Proceed to checkout
          </button>
        </div>
        <div>
          <Link to="/">
            <button className="underline hover:text-orange-500">
              or continue shopping
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
