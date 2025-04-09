import React from "react";

const MobileNav = ({ mobile, theme, changeMob }) => {
  return (
    <div
      className={`mob-nav ${theme === "light" ? "mob-light" : "mob-dark"}`}
      style={{ top: mobile === false ? "-100%" : "0%" }}
    >
      <a
        href="/"
        onClick={() => {
          changeMob(false);
        }}
      >
        <div className="mob-link">HOME</div>
      </a>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 775);
          changeMob(false);
        }}
      >
        <div className="mob-link">SERVICES</div>
      </a>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 3740);
          changeMob(false);
        }}
      >
        <div className="mob-link">PORTFOLIO</div>
      </a>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 4730);
          changeMob(false);
        }}
      >
        <div className="mob-link">PRICING</div>
      </a>

      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 7150);
          changeMob(false);
        }}
      >
        <div className="mob-link">CONTACT</div>
      </a>
    </div>
  );
};

export default MobileNav;
