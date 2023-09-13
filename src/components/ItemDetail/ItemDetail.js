import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ img, name, category, description, price, stock }) => {
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
              <ItemCount
                initial={1}
                stock={stock}
                onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
