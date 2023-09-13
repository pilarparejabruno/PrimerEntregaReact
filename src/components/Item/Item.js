import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, description, price, img }) => {
  return (
    <div className="row col-12 col-md-6 col-lg-3 mt-5">
      <div className=" col">
        <div className="card-group mx-3  ">
          <div className="card card border-dark h-100 my-3">
            <img
              src={img}
              className="card-img-top "
              alt={name}
              width="600"
              height="370"
            />
            <div className="card-body text-center">
              <h5 className="title">{name}</h5>
              <p className="paragraph">Precio ${price}</p>
              <Link
                to={`/item/${id}`}
                className=" button btn btn-outline-dark  "
              >
                VER MÀS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
