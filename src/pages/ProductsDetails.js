import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { addItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export const ProductsDetails = () => {
  const { productId } = useParams();
  const { documents, isPending, error } = useCollection("products");
  const dispatch = useDispatch();

  let product = documents && documents.filter((doc) => doc.id === productId);

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
    <>
    <Link to="/"><p className="p-3 text-orange-400 font-semibold hover:text-orange-500 cursor-pointer">{"<<<"} Go to products</p></Link>
    <section className="text-gray-700 overflow-hidden bg-white ">
    
      {product &&
        product.map((product) => (
          <div key={product.id} className="container px-5  mx-auto mt-[10px] md:mt-[50px] mb-5 ">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/3 w-full object-cover object-center rounded border border-gray-200"
                src={product.img}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.title}
                </h1>
                <div className="border-t-2 border-orange-200 w-full my-4"></div>
                <p className="leading-relaxed">{product.description}</p>

                <div className="flex mt-4">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    $58.00
                  </span>
                  <button
                    className="flex ml-auto text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded active:scale-95"
                    onClick={() => dispatch(addItem(product))}
                  >
                    <AddShoppingCartIcon className="mr-2" /> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
    </>
  );
};
