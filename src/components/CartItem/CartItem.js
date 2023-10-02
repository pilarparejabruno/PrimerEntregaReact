import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, img, name, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <table class="table d-flex justify-content-center">
      <tbody>
        <tr>
          <td scope="row">
            <img
              src={img}
              className="card-img-top "
              alt={name}
              width="600"
              height="370"
            />
          </td>
          <td>{name}</td>
          <td>{price * quantity}</td>
          <td>{quantity}</td>
          <button className="btn btn-danger " onClick={() => removeItem(id)}>
            X
          </button>
        </tr>
      </tbody>
    </table>
  );
};

export default CartItem;

/* 
<img src={img} className="" />

<div className="d-lg-flex">
  <div className="px-md-3">
    <small className="">Titulo</small>
    <div className="d-sm-flex gap-sm-2 ">
      <h4 className=""> {name}</h4>
    </div>
  </div>

  <div className="p-md-3 d-lg-flex gap-lg-3">
    <div className=" d-sm-flex d-lg-block gap-3 px-md-2">
      <small>Precio</small>
      <p className=" fw-semibold">$ {price}</p>
    </div>

    <div className=" d-sm-flex d-lg-block gap-3 px-md-2">
      <small>Subtotal</small>
      <p className=" fw-semibold">$ {price * quantity}</p>
    </div>

    <div className=" d-flex gap-5 align-items-center">
      <div className="d-sm-flex d-lg-block gap-sm-3 ">
        <small>Cantidad</small>
        <p className="fw-semibold text-center"> {quantity}</p>
      </div>
      <button className="btn btn-danger " onClick={() => removeItem(id)}>
        X
      </button>
    </div>
  </div>
</div> */
