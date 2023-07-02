import React from 'react'
import mainpic from "../images/Mainpic.jpg"
import { Link } from 'react-router-dom';

const Prepage = () => {
  return (
    <div>

<div className="precontainer"> </div>




<div className="preshop">
    <img src={mainpic} alt="Mainpic" />
    <p className="tagline">Best fashion <br/> Store! <br/>
    <Link to="/product">
        <button className="prebutton">Shop Now </button></Link>
    </p>
    
   
   

</div>

</div> 
      
    
  )
}

export default Prepage
