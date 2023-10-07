import { useState, useContext } from "react";
import {
  Timestamp,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderiD] = useState("");

  const { cart, totalBuys, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, surname, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          surname,
          phone,
          email,
        },
        items: cart,
        total: totalBuys(),
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const outOffStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOffStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOffStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        console.log(objOrder);
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderiD(orderAdded.id);
        clearCart();
      } else {
        console.error("Hay productos que estan fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1 className="text-center title">Se esta generando su orden...</h1>;
  }

  if (orderId) {
    return (
      <h1 className="text-center title"> El id de su orden es : {orderId}</h1>
    );
  }
  return (
    <div>
      <h1 className="text-center">Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
