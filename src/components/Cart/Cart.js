import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, json } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, cantInCarrito, totalBuys, productsInLocalStorage } =
    useContext(CartContext);

  const [cart, setCart] = useState(productsInLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (cantInCarrito === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/"></Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>total: {totalBuys()}</h3>
      <button onClick={() => clearCart()} type="button" class="btn btn-dark">
        Limpiar carrito
      </button>
    </div>
  );
};

export default Cart;
