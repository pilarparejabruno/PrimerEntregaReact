import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, img, name, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="container text-center">
      <div className="row d-flex justify-content-center">
        <div className="col-md-2 mb-3">
          <img src={img} className="" alt={name} width="100" height="100" />
        </div>
        <div className="col-md-2">
          <p>{name}</p>
        </div>
        <div className="col-md-2">
          <p>{price * quantity}</p>
        </div>
        <div className="col-md-2">
          <p>{quantity}</p>
        </div>
        <div className="col-md-2">
          <button className="btn btn-danger " onClick={() => removeItem(id)}>
            X
          </button>
        </div>
      </div>
    </div>
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

{
  /* <table class="table d-flex justify-content-center  ">
<tbody>
  <tr>
    <td className="ms-5">
      <img
        src={img}
        className="card-img-top "
        alt={name}
        width="200"
        height="100"
      />
    </td>
    <td className="ms-5">{name}</td>
    <td className="ms-5">{price * quantity}</td>
    <td>{quantity}</td>
    <button className="btn btn-danger " onClick={() => removeItem(id)}>
      X
    </button>
  </tr>
</tbody>
</table> */
}
