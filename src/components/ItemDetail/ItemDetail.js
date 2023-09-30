import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, img, name, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };
    addItem(item, quantity);
  };

  return (
    <div className="Card-Item  d-flex flex-wrap justify-content-center my-5">
      <div className="card  border-dark mb-6">
        <div className=" row g-0 ">
          <div className="col-md-5">
            <img
              src={img}
              className="img-fluid rounded-start "
              alt={name}
              width="600"
              height="400"
            />
          </div>
          <div className=" col-md-4 ms-4 ">
            <div className="card-body">
              <h5 className="title my-4">{name}</h5>
              <p className="paragraph ">Descripción: {description}</p>
              <p className="paragraph ">Categoría: {category}</p>
              <p className="paragraph mb-5"> Precio: {price}</p>
              <div>
                {quantityAdded > 0 ? (
                  <Link to="/cart" className="btnAgregarAlcarrito">
                    Terminar compra
                  </Link>
                ) : (
                  <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
