import React, { useState } from "react";
import ConvertMenuBar from "../../components/Convert/ConverMenuBar";

const TemperatureCal = () => {
  const [fromValue, setFromValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("celsius");
  const [toUnit, setToUnit] = useState("fahrenheit");

  const unitFactors = {
    celsius: {
      fahrenheit: (celsiusValue) => celsiusValue * (9 / 5) + 32,
      kelvin: (celsiusValue) => celsiusValue + 273.15,
      rankine: (celsiusValue) => (celsiusValue + 273.15) * (9 / 5),
      label: "섭씨온도(℃)",
    },
    fahrenheit: {
      celsius: (fahrenheitValue) => (fahrenheitValue - 32) * (5 / 9),
      kelvin: (fahrenheitValue) => (fahrenheitValue + 459.67) * (5 / 9),
      rankine: (fahrenheitValue) => fahrenheitValue + 459.67,
      label: "화씨온도(℉)",
    },
    kelvin: {
      celsius: (kelvinValue) => kelvinValue - 273.15,
      fahrenheit: (kelvinValue) => kelvinValue * (9 / 5) - 459.67,
      rankine: (kelvinValue) => kelvinValue * (9 / 5),
      label: "절대온도(K)",
    },
    rankine: {
      celsius: (rankineValue) => (rankineValue - 491.67) * (5 / 9),
      fahrenheit: (rankineValue) => rankineValue - 459.67,
      kelvin: (rankineValue) => rankineValue * (5 / 9),
      label: "랭킨온도(°R)",
    },
  };

  const handleFromValueChange = (e) => {
    setFromValue(e.target.value);
  };

  const handleFromUnitChange = (e) => {
    setFromUnit(e.target.value);
  };

  const handleToUnitChange = (e) => {
    setToUnit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const convertTemperature = (value, from, to) => {
    if (from === to) {
      return value;
    }
    return unitFactors[from][to](value);
  };

  const result = convertTemperature(
    Number(fromValue),
    fromUnit,
    toUnit
  ).toFixed(6);

  return (
    <div>
      <ConvertMenuBar></ConvertMenuBar>
      <form onSubmit={handleSubmit}>
        <label>
          From:
          <input
            type="number"
            value={fromValue}
            onChange={handleFromValueChange}
          />
          <select value={fromUnit} onChange={handleFromUnitChange}>
            <option value="celsius">섭씨온도(℃)</option>
            <option value="fahrenheit">화씨온도(℉)</option>
            <option value="kelvin">절대온도(K)</option>
            <option value="rankine">랭킨온도(°R)</option>
          </select>
        </label>
        <label>
          To:
          <select value={toUnit} onChange={handleToUnitChange}>
            <option value="celsius">섭씨온도(℃)</option>
            <option value="fahrenheit">화씨온도(℉)</option>
            <option value="kelvin">절대온도(K)</option>
            <option value="rankine">랭킨온도(°R)</option>
          </select>
        </label>
        <br />
      </form>
      <h4>
        결과: {fromValue} {unitFactors[fromUnit].label} = {result}{" "}
        {unitFactors[toUnit].label}
      </h4>
    </div>
  );
};

export default TemperatureCal;
