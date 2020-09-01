import React from "react";
import { ReactComponent as Burger } from "../../assets/hamburger.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./Navbar.styles.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Logo className="navbar__logo" />
      <Burger className="navbar__burger" />
    </nav>
  );
};

export default NavBar;
