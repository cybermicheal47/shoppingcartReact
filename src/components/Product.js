import React, { useState } from 'react';
import Header from './Header';
import img4 from '../images/img4.jpg';
import img3 from '../images/img3.jpg';
import tshirt from '../images/tshirt.jpg';
import tshirtt from '../images/tshirtt.jpg';
import whiteshirt from '../images/whitetshirt.jpg';

const Product = () => {
    const [cards, setCards] = useState([
        { id:1, title:'Loperum Ipsum ', image:img4,price:14},
        { id:2, title:'Loperum Ipsum ', image:img3,price:19},
        { id:3, title:'Loperum Ipsum ', image:tshirt,price:10},
        { id:4, title:'Loperum Ipsum ', image:tshirtt,price:17},
        { id:5, title:'Loperum Ipsum ', image:whiteshirt,price:13},
        { id:6, title:'Loperum Ipsum ', image:img3,price:50},
        { id:7, title:'Loperum Ipsum ', image:img4,price:35}




    ])

  


  return (

  
    <div>
         <Header />
      <div className="container">
       
        

        {cards.map((card)=>(
        <div key={card.id} className="card">
        <img src={card.image} alt="Card Image" />
        <h1>{card.title}</h1>
        <p className="price">${card.price}</p>
         
         
          <p><button>Add To Cart</button></p>
        </div> ))}






     
      </div>
    </div>
  );
}

export default Product;
