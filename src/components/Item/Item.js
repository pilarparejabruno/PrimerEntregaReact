const Item = ({ name, description, price, img }) => {
  return (
    <div className="row col-12 col-md-6 col-lg-3 ">
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
              <h5 className="card-title">{name}</h5>
              <p className="card-text card-text my-0">
                Descripcion: {description}
              </p>
              <p className="card-text card-text my-0">Precio: ${price}</p>
              <button type="button" className="btn btn-outline-dark my-2">
                VER MÀS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
