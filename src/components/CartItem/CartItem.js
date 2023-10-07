import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

const CartItem = ({ id, img, name, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <tr className="tableRows text-center paragraph">
      <td>
        {" "}
        <img src={img} className="" alt={name} width="100" height="100" />
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>{price * quantity}</td>
      <td>
        <button className="btn btn-danger " onClick={() => removeItem(id)}>
          X
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
