import React, { useState } from "react";
import ConvertMenuBar from "../../components/Convert/ConverMenuBar";

const FuelCal = () => {
  const [fromValue, setFromValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("km/l");
  const [toUnit, setToUnit] = useState("mi/g");

  const unitFactors = {
    "km/l": { factor: 1, label: "(km/l)" },
    "mi/g": { factor: 0.425144, label: "(mi/g)" },
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

  const factor = unitFactors[fromUnit].factor / unitFactors[toUnit].factor;
  const result = (Number(fromValue) * factor).toFixed(6);

  return (
    <div>
      <ConvertMenuBar />
      <form onSubmit={handleSubmit}>
        <label>
          From:
          <input
            type="number"
            value={fromValue}
            onChange={handleFromValueChange}
          />
          <select value={fromUnit} onChange={handleFromUnitChange}>
            <option value="km/l">킬로미터/리터(km/l)</option>
            <option value="mi/g">마일/갤런(mi/g)</option>
          </select>
        </label>
        <label>
          To:
          <select value={toUnit} onChange={handleToUnitChange}>
            <option value="km/l">킬로미터/리터(km/l)</option>
            <option value="mi/g">마일/갤런(mi/g)</option>
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

export default FuelCal;
