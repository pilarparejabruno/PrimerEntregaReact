import { useState, useEffect } from "react";
import { getItem } from "../../firebase-config/services/items";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    getItem(itemId)
      .then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
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
