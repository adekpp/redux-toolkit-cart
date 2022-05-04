import React from "react";
import ProductCard from "./ProductCard";
import { useCollection } from "../hooks/useCollection";

export const ProductsList = () => {
  const { documents, isPending, error } = useCollection("products");

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
    <div className="w-8/12 mt-16 mb-6 flex flex-row flex-wrap gap-7 mx-auto justify-center">
      {documents &&
        documents.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};
