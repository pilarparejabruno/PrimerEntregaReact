import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartWidget from "./components/CartWidget/CartWidget";

function App() {
  return (
    <header>
      <Navbar />;
      <CartWidget />
    </header>
  );
}

export default App;
