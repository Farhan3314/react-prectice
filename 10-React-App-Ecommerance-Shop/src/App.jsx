import { useContext } from "react";
import { CartContext } from "./context/CartContext";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

const App = () => {
  const { message } = useContext(CartContext);

  return (
    <>
      {message && (
        <div className="fixed top-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-5 py-3 rounded-lg shadow-lg z-9999 animate-pulse">
          {message}
        </div>
      )}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;