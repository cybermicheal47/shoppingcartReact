import { useEffect, useState } from 'react';
import cards from './Productlist';

const Checkout = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = ()=>{
    let ans = 0;
    cart.map((card)=>(
        ans += card.amount * card.price
    ))
    setPrice(ans);
}

useEffect(() =>{
  handlePrice();
})

const handleRemove = (id) =>{
  const remainingcards = cart.filter((card)=> card.id !== id)
  setCart(remainingcards);
 
}



  return (
    <div>
      <div className="checkout">
        <div className="checkcard">
          <h3 className="heading">Your Shopping Cart</h3>
          {cart.map((card) => (
            <div key={card.id}>
              <img src={card.image} alt="Product" />
              <h1>{card.title}</h1>
              <p className="price">${card.price}</p>
              <p>
                <div className="flexbutton">
                  <button className="counter"  onClick={()=>handleChange(card, +1) }   >+</button>
                  <h2 id="counting"></h2>
                  <button className="counter"   onClick={()=>handleChange(card ,-1) }    >-</button>
                  <button className='counter'>{card.amount}</button>
                  <button className='remove' onClick={()=>handleRemove(card.id) }  >Remove</button>
                </div>
              </p>
            </div>
          ))}
          <p>
            <span>Total Price:</span>
            <span>{price}</span>
          </p>
          <button className="pay">Proceed To Payment</button>
          <div className="back">
            <a className="aclass" href="/">
              Back To Shop
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
