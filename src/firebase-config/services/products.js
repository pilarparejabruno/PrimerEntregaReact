import { collection, getDocs } from "firebase/firestore";
import { db } from "..";

export const getAllProducts = async () => {
  try {
    const snapshots = await getDocs(collection(db, "products"));
    return snapshots.docs.map((snapshot) => ({
      id: snapshot.id,
      ...snapshot.data(),
    }));
  } catch (e) {
    throw new Error(e);
  }
};
