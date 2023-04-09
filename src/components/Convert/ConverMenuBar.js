import React from "react";
import { useNavigate } from "react-router-dom";

const ConvertMenuBar = () => {
  const navigate = useNavigate();

  const handleClick = (event, path) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ul>
          <li>
            <a href="/" onClick={(event) => handleClick(event, "/LengthCal")}>
              길이
            </a>
          </li>
          <li>
            <a href="/" onClick={(event) => handleClick(event, "/AreaCal")}>
              넓이
            </a>
          </li>
          <li>
            <a href="/" onClick={(event) => handleClick(event, "/WeightCal")}>
              무게
            </a>
          </li>
          <li>
            <a href="/" onClick={(event) => handleClick(event, "/VolumeCal")}>
              부피
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={(event) => handleClick(event, "/TemperatureCal")}
            >
              온도
            </a>
          </li>
          <li>
            <a href="/" onClick={(event) => handleClick(event, "/PressCal")}>
              압력
            </a>
          </li>
          <li>
            <a href="/" onClick={(event) => handleClick(event, "/VelocityCal")}>
              속도
            </a>
          </li>
          <li>
            <a href="/" onClick={(event) => handleClick(event, "/FuelCal")}>
              연비
            </a>
          </li>
          <li>
            <a href="/" onClick={(event) => handleClick(event, "/DataCal")}>
              데이터양
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default ConvertMenuBar;
