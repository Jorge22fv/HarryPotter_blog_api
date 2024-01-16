import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/favorites" className="navbar-link">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};
