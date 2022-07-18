import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.jpg"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >
		<img className="logo" src={Logo}/>
	</Link>
    
    
      <form className="d-flex">
       
        <button className="btn btn-outline-warning" type="dropdown">Favoritos</button>
      </form>
    </div>
  
</nav>
	);
};
