import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to enable navigation

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/middle">Coffees</Link> {/* Link to Coffees page */}
        </li>
        <li>
          <Link to="/services">Services</Link> {/* Link to Services page */}
        </li>
        <li>
          <Link to="/banner">Banner</Link> {/* Link to Banner page */}
        </li>
        <li>
          <Link to="/where-to-buy">Where to Buy</Link> {/* Link to WhereToBuy page */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
