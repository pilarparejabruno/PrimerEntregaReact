import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ img, name, category, description, price, stock }) => {
  return (
    <div className="Card-Item d-flex flex-wrap justify-content-center my-5">
      <div className="card mb-6 " />
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={img}
            className="img-fluid rounded-start "
            alt={name}
            width="600"
            height="400"
          />
        </div>
        <div className="col-md-6 ms-5 ">
          <div className="card-body">
            <h5 className="card-title my-2">{name}</h5>
            <p className="card-text ">descripción: {description}</p>
            <p className="card-text ">categoría: {category}</p>
            <p className="card-text"> precio: {price}</p>
            <ItemCount
              initial={1}
              stock={stock}
              onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
