
import Header from './Header';

import  cards  from './Productlist';

const Product = ({size, handleclick}) => {
 
  return (
    <div>
      
    
      <div className="container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt="Card Image" />
            <h1>{card.title}</h1>
            <p className="price">${card.price}</p>
            <p>
              <button onClick={()=>handleclick(card)}>Add To Cart</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
