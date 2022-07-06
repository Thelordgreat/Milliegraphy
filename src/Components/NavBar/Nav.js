import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";

const Nav = () => {
  window.onload = function () {
    const toggle = document.getElementById("toggle");
    const navMenu = document.getElementById("nav-menu");
    toggle.onclick = function () {
      toggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    };
  };

  // Close navbar when navlink is clicked
  function hideNav() {
    const closeNav = document.querySelector(".nav-menu");
    closeNav.classList.toggle("active");
  }

  return (
    <nav className="navbar">
      <h1 className="nav-logo">Milliegraphy</h1>

      <ul className="nav-menu" id="nav-menu">
        <li className="nav-item" onClick={hideNav}>
          <Link to="home">Home</Link>
        </li>
        <li className="nav-item" onClick={hideNav}>
          <Link to="about">About</Link>
        </li>
        <li className="nav-item" onClick={hideNav}>
          <Link to="portfolio">Portfolio</Link>
        </li>

        <li>
          <Link to="contact" className="a">Contact</Link>
        </li>
      </ul>

      <div id="toggle">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Nav;
