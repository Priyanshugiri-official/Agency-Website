import React from "react";

const Hero = ({ theme }) => {
  return (
    <div className={`hero ${theme === "light" ? "hero-light" : "hero-dark"}`}>
      <div className="hero-content">
        <div className="left">
          <div className="h6">Digital Agency.</div>
          <div className="h1">We help growing brands radically.</div>
          <div className="h5" id="type">
            We define and express their unique identity.
          </div>
          <div
            className="btn"
            style={{ marginTop: "40px" }}
            onClick={(e) => {
              e.preventDefault();
              if (window.innerWidth > 900) {
                window.scrollTo(0, 5860);
              } else {
                window.scrollTo(0, 7150);
              }
            }}
          >
            Get In Touch
          </div>
        </div>
        <div className="right">
          <img src={require("../images/cover2.png")} alt="cover" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
