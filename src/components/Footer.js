import React from "react";

const Footer = ({ theme }) => {
  return (
    <div
      className="footer text-center"
      style={{ backgroundColor: theme === "light" ? "#006677" : "#121212" }}
    >
      © {new Date().getFullYear()} FIFTH WAVE , All right reserved.
    </div>
  );
};

export default Footer;
