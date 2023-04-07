import React from "react";

const Header = ({ theme, toggleTheme }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h1 style={{ marginRight: "auto" }}>Daily Count</h1>

      {/* 버튼 */}
      {/* <button
        className="toggle-btn"
        style={{ width: "30%" }}
        onClick={toggleTheme}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button> */}

      {/* 토글 */}
      <fieldset>
        <label htmlFor="switch">
          {theme === "light" ? "Dark Mode" : "Light Mode"}&nbsp;&nbsp;
          <input
            type="checkbox"
            id="switch"
            name="switch"
            role="switch"
            onClick={toggleTheme}
          ></input>
        </label>
      </fieldset>
    </div>
  );
};

export default Header;
