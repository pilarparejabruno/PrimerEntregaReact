import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { quantityInCarrito } = useContext(CartContext);

  return (
    <div className="cartWidget">
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
        <span>{quantityInCarrito()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
