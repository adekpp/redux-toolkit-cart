import React from "react";

import ProductCard from "../components/ProductCard";
import "./Products.css";
import { motion } from "framer-motion";

export const Products = ({ products, isPending, error }) => {
  if (isPending) {
    return (
      <div className="h-[300px] grid place-content-center">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="w-8/12 mt-4 pb-6 md:pb-0 md:mt-6 flex flex-row flex-wrap gap-7 mx-auto justify-center">
      {products &&
        products.map((product, i) => (
          <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: i * 0.1 }}
  
          >
          <ProductCard key={product.id} product={product} />
          </motion.div>
          
        ))}
    </div>
  );
};
