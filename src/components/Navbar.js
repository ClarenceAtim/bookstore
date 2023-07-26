import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="nav-bar">
    <a className="nav-brand" href="#/">Bookstore CMS</a>
    <ul className="nav-links">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/categories">Categories</NavLink>
      </li>
    </ul>
    <button className="icon-button" type="button">😀</button>
  </nav>
);

export default Navbar;
