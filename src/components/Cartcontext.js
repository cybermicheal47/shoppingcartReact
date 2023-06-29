import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneCart: () => {},
  removeOneCart: () => {},
  deleteFromCart: () => {},
});

function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartProducts(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartProducts));
  }, [cartProducts]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find((product) => product.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneCart(id) {
    setCartProducts((prevCartProducts) => {
      const quantity = getProductQuantity(id);

      if (quantity === 0) {
        return [...prevCartProducts, { id: id, quantity: 1 }];
      } else {
        return prevCartProducts.map((product) =>
          product.id === id ? { ...product, quantity: product.quantity + 1 } : product
        );
      }
    });
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id ? { ...product, quantity: product.quantity - 1 } : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts(cartProducts.filter((currentProduct) => currentProduct.id !== id));
  }

  const getTotalCost = () => {
    return cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
