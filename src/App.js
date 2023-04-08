import React, { useState } from "react";
import "@picocss/pico/css/pico.min.css";
import Header from "./components/Common/Header";
import Menu from "./components/Common/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import CommonCal from "./pages/CommonCal";
import WordCal from "./pages/WordCal";
import DateCal from "./pages/DateCal";
import BmiCal from "./pages/BmiCal";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <BrowserRouter>
      <div className="App">
        <article data-theme={theme}>
          <div className="container">
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Menu />
            <div className="jb-division-line"></div>

            <Routes>
              <Route path="/" element={<CommonCal />}></Route>
              <Route path="/WordCal" element={<WordCal />}></Route>
              <Route path="/DateCal" element={<DateCal />}></Route>
              <Route path="/BmiCal" element={<BmiCal />}></Route>
            </Routes>
          </div>
          <footer style={{ textAlign: "center" }}>
            <p> © 2023 cmoonjun11@gmail.com</p>
          </footer>
        </article>
      </div>
    </BrowserRouter>
  );
}

export default App;
