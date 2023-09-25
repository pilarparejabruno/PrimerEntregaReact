import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/products";
/* import { getProducts } from "../../asyncMock"; */
import ItemList from "../ItemList/ItemList";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

const RoutesCategories = [
  {
    path: "/category/Cuidado facial",
    linkname: "Cuidado facial",
  },
  {
    path: "/category/Cuidado capilar",
    linkname: "Cuidado capilar",
  },
  {
    path: "/category/Cuidado labial",
    linkname: "Cuidado labial",
  },
  {
    path: "/category/Accesorios",
    linkname: "Accesorios",
  },
];

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    getAllProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  });

  if (loading)
    return (
      <div className="Loader-Container">
        <span className="loader"></span>
      </div>
    );

  return (
    <>
      <h1 className="text-center mt-5 mb-2 title">PRODUCTOS</h1>
      <div className="category-container text-center">
        <div className="btn-group" role="group" aria-label="Basic example">
          {RoutesCategories.map(({ path, linkname }) => (
            <Link to={path} className="button btn btn-outline-dark">
              {linkname}
            </Link>
          ))}
        </div>
      </div>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
