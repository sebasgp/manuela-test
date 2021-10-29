import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Manuela from "../../assets/images/manuela.jpg";

function Header() {
  return (
    <>
      <header>
        <div className="logo-container">
          <Link to="/">
            <img src={Manuela} alt="Manuela.jpg" />
          </Link>
        </div>
        <nav className="nav-container">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <hr className="header-hr" />
    </>
  );
}

export default Header;
