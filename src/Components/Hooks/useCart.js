import { useEffect, useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  //add to cart
  const addToCart = (item) => {
    const exist = cart.find((a) => a.id === item.id);

    let updateCart;

    if (exist) {
      updateCart = cart.map((a) =>
        a.id === item.id ? { ...a, quantity: a.quantity + 1 } : a
      );
    } else {
      updateCart = [...cart, { ...item, quantity: 1 }];
    }
    setCart(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  //remove item
  const removeFromCart = (id) => {
    const updateCart = cart.filter((a) => a.id !== id);
    setCart(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));
       window.dispatchEvent(new Event("cartUpdated"));
  };

  //updated quantity
  const updateQuantity = (id, quantity) => {
    const updateCart = cart.map((a) =>
      a.id === id ? { ...a, quantity: quantity } : a
    );
    setCart(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  //clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));
  };
  
  //cart total
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,0
  );

  return { cart, addToCart, removeFromCart, updateQuantity,clearCart, cartTotal };
};
export default useCart;
