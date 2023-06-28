import React from 'react';
import logo from "../images/logo.png"; 
import Product from './Product';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>

        <ul className="nav-links">
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">Product</a></li>
          <li className="nav-item"><a href="/checkout">Cart</a></li>
          <i className="fa fa-shopping-cart" style={{ fontSize: "36px" }}> </i>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
