import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // You can create this CSS file for styling
import { Spiral as Hamburger } from 'hamburger-react'
import { useState } from 'react'

function Navbar() {

  const [isOpen, setOpen] = useState(false)


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
      <div className="hamburger">
        <Hamburger toggle={setOpen} toggled={isOpen} size={50} />
       { 
        <ul hidden={!isOpen} className="hamburger-list">
        <li className="hamburger-item">
          <Link to="/" className="hamburger-link">דף הבית</Link>
        </li>
        <li className="hamburger-item">
          <Link to="/about" className="hamburger-link">אודות</Link>
        </li>
        <li className="hamburger-item">
          <Link to="/services" className="hamburger-link">שירותים</Link>
        </li>
        <li className="hamburger-item">
          <Link to="/contact" className="hamburger-link">צור קשר</Link>
        </li>
      </ul>
        }
      </div>
    </nav>
  );
}

export default Navbar;
