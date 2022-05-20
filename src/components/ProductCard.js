import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  // reading scroll position from sessionStorage
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);

  // store scroll position in sessionStorage
  const handleClick = () => {
    sessionStorage.setItem("scrollPosition", window.pageYOffset);
  };

  return (
    <div className="group relative" onClick={handleClick}>
      <Link to={`/product/${product.id}`}>
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none cursor-pointer">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
      </Link>

      <div className="mt-4 flex justify-between">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-sm text-gray-700">
              {product.title.slice(0, 23)}...
            </h3>
          </Link>
          <button
            onClick={() => dispatch(addItem(product))}
            className="mt-1 text-sm text-gray-500 hover:text-orange-400 cursor-pointer active:scale-95"
          >
            <AddShoppingCartIcon fontSize="small" className="mr-2" />
            Add to cart
          </button>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
    </div>
  );
}
