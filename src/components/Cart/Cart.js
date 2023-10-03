import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, quantityInCarrito, totalBuys } =
    useContext(CartContext);

  if (quantityInCarrito === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/"></Link>
      </div>
    );
  }
  return (
    <>
      <div>
        {cart.map((p) => (
          <CartItem key={p.id} {...p} />
        ))}
        <h3>total: {totalBuys()}</h3>
        <button onClick={() => clearCart()} type="button" class="btn btn-dark">
          Limpiar carrito
        </button>
      </div>
      <div>
        <Link to="/checkout" className="btn btn-dark ">
          {" "}
          checkout
        </Link>
      </div>
    </>
  );
};

export default Cart;
