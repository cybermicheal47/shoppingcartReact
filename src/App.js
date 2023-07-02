import React from 'react';
import Header from './components/Header';
import Prepage from './components/Prepage';
import Product from './components/Product';
import Checkout from './components/Checkout';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleclick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);

      return;
    }

    setCart([...cart, item]);
  };

  const handleChange = (card, d) => {
    let ind = -1;
    cart.forEach((cards, index) => {
      if (cards.id === card.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <div>
      <Header size={cart.length} setShow={setShow} />

      <Routes>
        

        <Route
          path="/product"
          element={
            show ? (
              <Product size={cart.length} handleclick={handleclick} />
            ) : (
              <Checkout
                cart={cart}
                setCart={setCart}
                handleChange={handleChange}
                setShow={setShow}
              />
            )
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Prepage />} />
      </Routes>

      {warning && <div className="warning">Item already in cart</div>}
    </div>
  );
};

export default App;
