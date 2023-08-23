import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartWidget from "./components/CartWidget/CartWidget";
import Video from "./components/Video/Video";

function App() {
  return (
    <header>
      <Navbar />;
      <CartWidget />
      <Video />
    </header>
  );
}

export default App;
