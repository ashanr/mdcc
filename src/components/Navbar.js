import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-links'>
        <li>
          <Link to="/" className="nav-button" >Home</Link>
        </li>
        <li>
          <Link to="/about-us" className="nav-button" >About Us</Link>
        </li>
        <li>
          <Link to="/contact-us" className="nav-button">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
