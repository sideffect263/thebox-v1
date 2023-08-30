import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // You can create this CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">TheBoxTivon</Link>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">דף הבית</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">אודות</Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link">שירותים</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">צור קשר</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
