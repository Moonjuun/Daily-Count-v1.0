import React, { useState } from "react";
import ConvertMenuBar from "../../components/Convert/ConverMenuBar";

const AreaCal = () => {
  const [fromValue, setFromValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("sqm");
  const [toUnit, setToUnit] = useState("pyeong");

  const unitFactors = {
    sqm: { factor: 1, label: "제곱미터(m²)" },
    are: { factor: 100, label: "아르(a)" },
    ha: { factor: 10000, label: "헥타르(ha)" },
    sqkm: { factor: 1000000, label: "제곱킬로미터(km²)" },
    sqft: { factor: 0.092903, label: "제곱피트(ft²)" },
    sqin: { factor: 0.00064516, label: "제곱인치(in²)" },
    sqyd: { factor: 0.836127, label: "제곱야드(yd²)" },
    acre: { factor: 4046.856, label: "에이커(ac)" },
    pyeong: { factor: 3.305785, label: "평(py)" },
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
            <option value="sqm">제곱미터(m²)</option>
            <option value="are">아르(a)</option>
            <option value="ha">헥타르(ha)</option>
            <option value="sqkm">제곱킬로미터(km²)</option>
            <option value="sqft">제곱피트(ft²)</option>
            <option value="sqin">제곱인치(in²)</option>
            <option value="sqyd">제곱야드(yd²)</option>
            <option value="acre">에이커(ac)</option>
            <option value="pyeong">평(py)</option>
          </select>
        </label>
        <br />
        <label>
          To:
          <select value={toUnit} onChange={handleToUnitChange}>
            <option value="sqm">제곱미터(m²)</option>
            <option value="are">아르(a)</option>
            <option value="ha">헥타르(ha)</option>
            <option value="sqkm">제곱킬로미터(km²)</option>
            <option value="sqft">제곱피트(ft²)</option>
            <option value="sqin">제곱인치(in²)</option>
            <option value="sqyd">제곱야드(yd²)</option>
            <option value="acre">에이커(ac)</option>
            <option value="pyeong">평(py)</option>
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

export default AreaCal;
