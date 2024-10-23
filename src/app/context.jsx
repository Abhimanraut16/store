'use client'


import { createContext, useEffect, useRef, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children}) {
  const [cartData, setCartData] = useState([]);
  const firstAdd = useRef(true)

  useEffect(() => {
    if (firstAdd.current) {
      setCartData(JSON.parse(localStorage.getItem('cartData')))
      firstAdd.current = false;
    } else {
      localStorage.setItem('cartData', JSON.stringify(cartData));
    }
  }, [cartData]);

  const addToCart = (product) => {
    const exsist = cartData.find((item) => item._id === product._id);
    if (exsist) {
      setCartData(
        cartData.map((item) =>
          item._id === product._id ? { ...exsist, cartData, qty: exsist.qty + 1 } : item
        )
      );
    } else {
      setCartData([...cartData, { ...product, ...cartData, qty: 1 }]);
    }
  }

  const removeFromCart = (products) => {
    setCartData(cartData.filter((item) => item._id !== products._id));
  };
  const decreaseQty = (products) => {
    const exsist = cartData.find((item) => item._id === products._id);
    if (exsist.qty === 1) {
      removeFromCart(products);
    } else {
      setCartData(
        cartData.map((item) =>
          item._id === products._id ? { ...exsist, qty: exsist.qty - 1 } : item
        )
      );
    }
  };

  // const getRelatedProducts = () => {
  //   const categories = cartData.map((item) => item.category);
  //   const relatedProducts = products.filter(
  //     (item) => categories.includes(item.category) && !cartData.find(cartItem => cartItem._id === item._id)
  //   );
  //   return relatedProducts;
  // };

  const value = {
    cartData,
    setCartData,
    addToCart,
    removeFromCart,
    decreaseQty,
    // getRelatedProducts,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;