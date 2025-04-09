import React from "react";
import logo from "../images/logo-symbol.png";
const Marquee = () => {
  return (
    <div>
      <marquee
        direction="right"
        scrollamount="25"
        style={{ padding: "20px 0px 0px 0px" }}
      >
        <div className="logo">
          <img src={logo} alt="logo" width="60px" />
          <div className="logo-text">FIFTH WAVE</div>
        </div>
      </marquee>
    </div>
  );
};

export default Marquee;
