import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <Link to="/favoritos" className="navbar-link">Favoritos</Link>
        </li>
      </ul>
    </nav>
  );
};
