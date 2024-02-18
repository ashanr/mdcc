import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-end bg-gray-800 p-4">
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="text-white py-2 px-4 bg-blue-500 rounded hover:bg-blue-700 transition duration-300">Home</Link>
        </li>
        <li>
          <Link to="/about-us" className="text-white py-2 px-4 bg-blue-500 rounded hover:bg-blue-700 transition duration-300">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us" className="text-white py-2 px-4 bg-blue-500 rounded hover:bg-blue-700 transition duration-300">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
