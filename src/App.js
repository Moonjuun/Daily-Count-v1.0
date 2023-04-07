import React, { useState } from "react";
import "@picocss/pico/css/pico.min.css";
import Header from "./components/Common/Header";
import Menu from "./components/Common/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import CommonCal from "./pages/CommonCal";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <BrowserRouter>
      <article data-theme={theme}>
        <div className="container">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Menu />
          <Routes>
            <Route path="/" element={<CommonCal />}></Route>
          </Routes>
        </div>
        <footer style={{ textAlign: "center" }}>
          <p> © 2023 cmoonjun11@gmail.com</p>
        </footer>
      </article>
    </BrowserRouter>
  );
}

export default App;
