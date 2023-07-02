import React from 'react';
import logo from "../images/logo.png";
import Product from './Product';
import { Link } from 'react-router-dom';

const Header = ({ size, setShow }) => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo" onClick={() => setShow(true)}>
          <img src={logo} alt="logo" />
        </Link>

        <ul className="nav-links">
        <li className="nav-item"><Link to="/"   onClick={() => setShow(true)}>Home</Link></li>
          <li className="nav-item"><Link to="/product"   onClick={() => setShow(true)}>Product</Link></li>
        

          <div onClick={() => setShow(false)}>
            <i className="fa fa-shopping-cart" style={{ fontSize: "36px" }}></i> <span>{size}</span>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
