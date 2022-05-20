import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products";
import Header from "./components/Header";
import { Cart } from "./components/Cart";
import { ProductsDetails } from "./pages/ProductsDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";
import { ToastContainer } from "react-toastify";
import { useCollection } from "./hooks/useCollection";

function App() {
  const { documents, isPending, error } = useCollection("products");
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, cartItems]);

  return (
    <BrowserRouter>
      <Header products={documents} />

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route
          path="/"
          element={
            <Products
              products={documents}
              isPending={isPending}
              error={error}
            />
          }
        />
        <Route path="cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
