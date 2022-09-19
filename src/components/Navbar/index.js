import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.style.scss';

const Navbar = () => (
  <nav>
    <div className="logo">
      Math Magicians
    </div>
    <ul className="navbar">
      <li className="navbar-item">
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li>
        &#124;
      </li>
      <li className="navbar-item">
        <NavLink to="/calculator">
          Calculator
        </NavLink>
      </li>
      <li>
        &#124;
      </li>
      <li className="navbar-item">
        <NavLink to="/quote">
          Quote
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
