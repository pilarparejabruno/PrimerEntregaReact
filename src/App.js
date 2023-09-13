import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//IMPORT PAGES
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/category/:categoryId" element={<Products />} />
        <Route path="/item/:itemId" element={<ProductDetail />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

library.add(faCartShopping);
export default App;
