import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cartWidget">
      <button
        type="button"
        className="btn "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <p>
          0 <FontAwesomeIcon icon={faCartShopping} />
        </p>
      </button>
    </div>
  );
};

export default CartWidget;
