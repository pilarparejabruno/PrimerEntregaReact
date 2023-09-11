import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(1)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(product);
  return (
    <div className="Item-Detail-Container">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
