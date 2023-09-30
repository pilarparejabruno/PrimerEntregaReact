import { doc, getDoc } from "firebase/firestore";
import { db } from "..";

export const getItem = (id) => {
  const item = doc(db, "products", id);
  return getDoc(item);
};
