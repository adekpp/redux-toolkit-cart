import React from "react";
import ProductCard from "../components/ProductCard";

export const Products = ({ products, isPending, error }) => {
  if (isPending) {
    return (
      <div>
        <h1>LOADING...</h1>
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
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};
