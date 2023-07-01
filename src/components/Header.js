import React from 'react';
import logo from "../images/logo.png"; 
import Product from './Product';


const Header = ({size,setShow}) => {
  return (
    <header>
      <nav className="navbar">
        <a href="/product" className="logo" onClick={()=>setShow(true)}   >
          <img src={logo} alt="logo" />
        </a>

        <ul className="nav-links">
          <li className="nav-item"><a href="/">Home</a></li>
          
         
          <div onClick={()=>setShow(false)}>
          <i className="fa fa-shopping-cart" style={{ fontSize: "36px" }}> </i> <span>{size}</span> </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
