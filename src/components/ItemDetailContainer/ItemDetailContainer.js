import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(+itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading)
    return (
      <div className="Loader-Container">
        <span className="loader"></span>
      </div>
    );

  return (
    <div className="Item-Detail-Container">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
