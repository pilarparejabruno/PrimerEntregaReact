import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const ItemDetail = ({
  id,
  img,
  name,
  category,
  description,
  price,
  stock,
  goal,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
      img,
    };
    addItem(item, quantity);
  };

  return (
    <div className="itemContainer">
      <Link to={"/productos"}>
        <button type="button" class="btn btn-light btnArrow-left">
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
      <div className="CardItem  d-flex justify-content-center my-5 ">
        <div className="card  border-dark mb-6 ">
          <div className=" row   ">
            <div className="col-md-4 me-5">
              <img
                src={img}
                className=" rounded-start "
                alt={name}
                width="400"
                height="600"
              />
            </div>
            <div className=" col-md-7 ms-4 text-start ">
              <div className="card-body">
                <h5 className="title my-4">{name}</h5>
                <p className="subtitle my-0">¿Qué es?</p>
                <p className="paragraph ">{description}</p>
                <p className="subtitle my-0">¿Cuál es su función?</p>
                <p className="paragraph ">{goal}</p>
                <p className="paragraph mb-5"> Precio ${price}</p>
                <div className="d-flex justify-content-center">
                  {quantityAdded > 0 ? (
                    <Link to="/cart" className="btnAgregarAlcarrito">
                      Terminar compra
                    </Link>
                  ) : (
                    <ItemCount
                      className="d-flex justify-content-center"
                      initial={1}
                      stock={stock}
                      onAdd={handleOnAdd}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
