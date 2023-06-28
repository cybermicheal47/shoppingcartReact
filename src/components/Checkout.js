import React from 'react';
import img4 from '../images/img4.jpg';
import Header from './Header';

const Checkout = () => {
  const increment = () => {
    // Handle increment logic here
  };

  const decrement = () => {
    // Handle decrement logic here
  };

  return (
    <div>
         <Header />

      <div className="checkout">
        <div className="checkcard">
          <h3 className="heading">Your Shopping Cart</h3>

          <img src={img4} alt="Denim Jeans" />
          <h1>Lorem Ipsum</h1>
          <p className="price">$19.99</p>
          <p>
            <div className="flexbutton">
              <button onClick={increment} className="counter">+</button>
              <h2 id="counting"></h2>
              <button onClick={decrement} className="counter">-</button>
            </div>
          </p>

          <img src={img4} alt="Denim Jeans" />
          <h1>Lorem Ipsum</h1>
          <p className="price">$19.99</p>
          <p>
            <div className="flexbutton">
              <button onClick={increment} className="counter">+</button>
              <h2 id="counting"></h2>
              <button onClick={decrement} className="counter">-</button>
            </div>
          </p>

          <p><button className="pay">Proceed To Payment</button></p>

          <div className="back">
            <a className="aclass" href="/index.html">Back To Shop</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
