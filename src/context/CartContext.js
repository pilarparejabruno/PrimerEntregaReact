import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("el prodcuto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const quantityInCarrito = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  const productsInLocalStorage = () => {
    JSON.parse(localStorage.getItem("cart")) || [];
  };

  const totalBuys = () =>
    cart.reduce((total, prod) => total + prod.price * prod.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        quantityInCarrito,
        totalBuys,
        productsInLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
