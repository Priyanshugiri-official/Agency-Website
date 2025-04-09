import React, { useState } from "react";
import logo from "../images/logo-symbol.png";
const Navbar = ({ theme, changeMob, mobile, changeTheme }) => {
  const [fixed, setFixed] = useState(false);
  const [active, setActive] = useState(0);
  const navPos = () => {
    if (window.scrollY > 80) {
      setFixed(true);
    } else {
      setFixed(false);
    }
    if (window.scrollY < 600) {
      setActive(0);
    }
    if (window.scrollY >= 600) {
      setActive(1);
    }
    if (window.scrollY >= 1950) {
      setActive(2);
    }
    if (window.scrollY >= 4700) {
      setActive(3);
    }
    if (window.scrollY >= 5810) {
      setActive(4);
    }
  };
  window.addEventListener("scroll", navPos);
  return (
    <div
      className={`navbar ${theme === "light" ? "nav-light" : "nav-dark"}`}
      style={{
        position: fixed === true ? "sticky" : "relative",
        top: fixed === true ? "0%" : "-100%",
      }}
    >
      <div
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} alt="logo" />
        <div className="logo-text">FIFTH WAVE</div>
      </div>
      <div className="menu">
        <a
          href="/"
          className={`link ${active === 0 && "active"}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
          }}
        >
          Home
        </a>
        <a
          href="#service"
          className={`link ${active === 1 && "active"}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 650);
          }}
        >
          Services
        </a>
        <a
          href="/portfolio"
          className={`link ${active === 2 && "active"}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 1980);
          }}
        >
          Portfolio
        </a>
        <a
          href="/pricing"
          className={`link ${active === 3 && "active"}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 4750);
          }}
        >
          Pricing
        </a>
        <a
          href="/contact"
          className={`link ${active === 4 && "active"}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 5860);
          }}
        >
          Contact
        </a>
        <i
          class={`bi ${theme === "light" ? "bi-moon" : "bi-moon-fill"}`}
          style={{ fontSize: "20px", webkitTextStroke: "0.8px" }}
          onClick={() => {
            theme === "light" ? changeTheme("dark") : changeTheme("light");
          }}
        ></i>
      </div>
      <i
        class={`bi ${mobile === false ? "bi-list" : "bi-x"}`}
        style={{
          fontSize: "35px",
          color: "#006677",
          WebkitTextStroke: "1px",
          cursor: "pointer",
        }}
        onClick={() => {
          mobile === false ? changeMob(true) : changeMob(false);
        }}
      ></i>
    </div>
  );
};

export default Navbar;
