import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="nav-bar">
    <a className="nav-brand" href="#/">Bookstore CMS</a>
    <ul className="nav-links">
      <li>
        <NavLink className="nav-link active-link" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/categories">Categories</NavLink>
      </li>
    </ul>
    <button className="icon-button" type="button">
      <FontAwesomeIcon icon={faUser} />
    </button>
  </nav>
);

export default Navbar;
