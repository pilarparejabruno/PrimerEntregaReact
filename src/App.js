import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Video from "./components/Video/Video";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Video />
        <ItemListContainer greeting={"PRODUCTOS"} />
      </header>
      <Footer />
    </>
  );
}

library.add(faCartShopping);
export default App;
