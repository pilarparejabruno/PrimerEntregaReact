import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, quantityInCarrito, totalBuys } =
    useContext(CartContext);

  if (quantityInCarrito() === 0) {
    return (
      <div className="d-block ">
        <h1 className="text-center title">El carrito esta vacio...</h1>

        <div className="d-flex justify-content-center my-5">
          <Link to="/productos" className="btn btn-dark ">
            {" "}
            IR A PRODUCTOS
          </Link>
        </div>

        <Link to="/"></Link>
      </div>
    );
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr className="tableCols text-center">
            <th></th>
            <th>PRODUCTO</th>
            <th>PRECIO</th>
            <th>CANTIDAD</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((p) => (
            <CartItem key={p.id} {...p} />
          ))}
        </tbody>
      </table>
      <div>
        <h3 className="title my-5 ms-5">TOTAL: ${totalBuys()}</h3>
      </div>
      <div className="d-flex justify-content-center my-3">
        <button onClick={() => clearCart()} type="button" class=" btn btn-dark">
          Vaciar carrito
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/checkout" className="btn btn-dark ">
          {" "}
          CHECKOUT
        </Link>
      </div>
    </>
  );
};

export default Cart;
