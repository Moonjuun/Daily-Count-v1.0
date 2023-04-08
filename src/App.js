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
import Interest from "./pages/Interest";
import PercentageCal from "./pages/PercentCal"

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      document.body.setAttribute("data-theme", "dark"); // body 태그에 data-theme 속성 추가
    } else {
      setTheme("light");
      document.body.setAttribute("data-theme", "light"); // body 태그에 data-theme 속성 추가
    }
  }

  return (
    <BrowserRouter>
      <div className="App" data-theme={theme}>
        <article>
          <div className="container">
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Menu />
            <div className="jb-division-line"></div>

            <Routes>
              <Route path="/" element={<CommonCal />}></Route>
              <Route path="/WordCal" element={<WordCal />}></Route>
              <Route path="/DateCal" element={<DateCal />}></Route>
              <Route path="/BmiCal" element={<BmiCal />}></Route>
              <Route path="/Interest" element={<Interest />}></Route>
              <Route path="/PercentageCal" element={<PercentageCal />}></Route>
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
