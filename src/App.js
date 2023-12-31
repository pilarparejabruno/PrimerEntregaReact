import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//IMPORT PAGES
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

//IMPORT COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

//IMPORT CONTEXT
import { CartProvider } from "./context/CartContext";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/category/:categoryId" element={<Products />} />
          <Route path="/item/:itemId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

library.add(faCartShopping, faArrowLeft);
export default App;
