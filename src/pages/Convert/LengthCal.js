import React, { useState } from "react";
import ConvertMenuBar from "../../components/Convert/ConverMenuBar";

const LengthCal = () => {
  const [fromValue, setFromValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("cm");

  const unitFactors = {
    m: 1,
    cm: 0.01,
    mm: 0.001,
    km: 1000,
    ft: 0.3048,
    in: 0.0254,
    yard: 0.9144,
    mile: 1609.344,
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
  const factor = unitFactors[fromUnit] / unitFactors[toUnit];
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
            <option value="m">미터(meter)</option>
            <option value="cm">센치미터(centimeter)</option>
            <option value="mm">밀리미터(millimeter)</option>
            <option value="km">킬로미터(kilometer)</option>
            <option value="ft">피트(feet)</option>
            <option value="in">인치(inche)</option>
            <option value="yard">야드(yard)</option>
            <option value="mile">마일(mile)</option>
          </select>
        </label>
        <br />
        <label>
          To:
          <select value={toUnit} onChange={handleToUnitChange}>
            <option value="m">미터(meter)</option>
            <option value="cm">센치미터(centimeter)</option>
            <option value="mm">밀리미터(millimeter)</option>
            <option value="km">킬로미터(kilometer)</option>
            <option value="ft">피트(feet)</option>
            <option value="in">인치(inche)</option>
            <option value="yard">야드(yard)</option>
            <option value="mile">마일(mile)</option>
          </select>
        </label>
        <br />
      </form>
      <h4>
        결과: {fromValue} {fromUnit} = {result} {toUnit}
      </h4>
    </div>
  );
};

export default LengthCal;
