import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="group relative cursor-pointer">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none ">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            {product.title.slice(0, 23)}...
          </h3>
          <button
            onClick={() =>
              dispatch(addItem(product))}
            className="mt-1 text-sm text-gray-500 hover:text-orange-400 cursor-pointer"
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
