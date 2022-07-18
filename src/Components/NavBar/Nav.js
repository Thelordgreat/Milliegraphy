import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

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

  let navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar_content">
        <h1 className="nav-logo">Milliegraphy</h1>

        <ul className="nav-menu" id="nav-menu">
          <li className="nav-item" onClick={hideNav}>
            <Link
              to="home"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item" onClick={hideNav}>
            <Link
              to="about"
              onClick={() => {
                navigate("/");
              }}
            >
              About
            </Link>
          </li>
          <li className="nav-item" onClick={hideNav}>
            <Link
              to="portfolio"
              onClick={() => {
                navigate("/");
              }}
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              className="a"
              onClick={() => {
                navigate("/");
              }}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div id="toggle">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
