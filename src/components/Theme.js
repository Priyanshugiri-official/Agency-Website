import React from "react";

const Theme = ({ changeTheme, theme }) => {
  return (
    <div
      className="theme"
      style={{ cursor: "pointer" }}
      onClick={() => {
        theme === "light" ? changeTheme("dark") : changeTheme("light");
      }}
    >
      <i
        class={`bi ${theme === "light" ? "bi-moon" : "bi-sun"}`}
        style={{
          webkitTextStroke: "1px",
          fontSize: "30px",
          color: "#006677",
        }}
      ></i>
    </div>
  );
};

export default Theme;
