import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls btn-group">
        <button type="button" className="btn btn-dark mx-3" onClick={decrement}>
          -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button type="button" className="btn btn-dark mx-3" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-outline-dark my-4 btnAgregarAlcarrito"
          disabled={quantity === 0 || stock === 0}
          onClick={() => onAdd(quantity)}
        >
          {stock === 0 ? "SIN STOCK" : "  AGREGAR AL CARRITO"}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
