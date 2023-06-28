import React from 'react'
import mainpic from "../images/Mainpic.jpg"

const Prepage = () => {
  return (
    <div>

<div className="precontainer">




<div className="preshop">
    <img src={mainpic} alt="Mainpic" />
    <p className="tagline">Best fashion <br/> Store! <br/>
        <button className="prebutton" onClick={()=>window.location.href='/product'}>Shop Now </button>
    </p>
    
   


</div>
</div>
      
    </div>
  )
}

export default Prepage
