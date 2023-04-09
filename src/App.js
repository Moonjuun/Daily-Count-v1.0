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
import PercentageCal from "./pages/PercentCal";
import LengthCal from "./pages/Convert/LengthCal";
import AreaCal from "./pages/Convert/AreaCal";
import WeightCal from "./pages/Convert/WeightCal";
import VolumeCal from "./pages/Convert/VolumeCal";
import TemperatureCal from "./pages/Convert/TemperatureCal";
import PressCal from "./pages/Convert/PressCal";
import VelocityCal from "./pages/Convert/VelocityCal";
import FuelCal from "./pages/Convert/FuelCal";
import DataCal from "./pages/Convert/DataCal";

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
              <Route path="/LengthCal" element={<LengthCal />}></Route>
              <Route path="/AreaCal" element={<AreaCal />}></Route>
              <Route path="/WeightCal" element={<WeightCal />}></Route>
              <Route path="/VolumeCal" element={<VolumeCal />}></Route>
              <Route
                path="/TemperatureCal"
                element={<TemperatureCal />}
              ></Route>
              <Route path="/PressCal" element={<PressCal />}></Route>
              <Route path="/VelocityCal" element={<VelocityCal />}></Route>
              <Route path="/FuelCal" element={<FuelCal />}></Route>
              <Route path="/DataCal" element={<DataCal />}></Route>
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
