import Home from "./components/Home";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Singleprod from "./components/Singleprod";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Singleprod />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist/:id" element={<Wishlist />} />

        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;
