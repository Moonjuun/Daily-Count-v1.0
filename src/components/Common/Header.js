import React from "react";

const Header = ({ theme, toggleTheme }) => {
  return (
    <header style={{ display: "flex", alignItems: "center" }}>
      <h1 style={{ marginRight: "auto" }}>Daily Count</h1>
      <button
        className="toggle-btn"
        style={{ width: "30%" }}
        onClick={toggleTheme}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
};

export default Header;
