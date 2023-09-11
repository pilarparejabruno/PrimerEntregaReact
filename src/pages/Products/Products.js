import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Products = () => {
  return (
    <div>
      <ItemListContainer greeting={"PRODUCTOS"} />
      <ItemDetailContainer />
    </div>
  );
};

export default Products;
