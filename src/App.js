import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//IMPORT PAGES
import Products from "./pages/Products/Products";
import Home from "./pages/Home/home";

/* import ItemListContainer from "./components/ItemListContainer/ItemListContainer"; */
/* import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"; */
/* import Video from "./components/Video/Video"; */
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
        <Video />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

library.add(faCartShopping);
export default App;
