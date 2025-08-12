import React from "react";
import logoCliffs from "../assets/logo/cliffs-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoCliffs} alt="Logo do cliffsFy" />
      </Link>
      <Link to="/" className="header__link">
        <h1>CLIFFSFY</h1>
      </Link>
    </div>
  );
};

export default Header;
