import React, { useState } from "react";
import ConvertMenuBar from "../../components/Convert/ConverMenuBar";

const WeightCal = () => {
  const [fromValue, setFromValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("kg");
  const [toUnit, setToUnit] = useState("lb");

  const unitFactors = {
    kg: { factor: 1, label: "킬로그램(kg)" },
    g: { factor: 0.001, label: "그램(g)" },
    mg: { factor: 0.000001, label: "밀리그램(mg)" },
    t: { factor: 1000, label: "톤(t)" },
    kt: { factor: 1000000, label: "킬로톤(kt)" },
    grain: { factor: 0.00006479891, label: "그레인(gr)" },
    oz: { factor: 0.02834952, label: "온스(oz)" },
    lb: { factor: 0.45359237, label: "파운드(lb)" },
    don: { factor: 0.00375, label: "돈(don)" },
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
            <option value="kg">킬로그램(kg)</option>
            <option value="g">그램(g)</option>
            <option value="mg">밀리그램(mg)</option>
            <option value="t">톤(t)</option>
            <option value="kt">킬로톤(kt)</option>
            <option value="grain">그레인(gr)</option>
            <option value="oz">온스(oz)</option>
            <option value="lb">파운드(lb)</option>
            <option value="don">돈(don)</option>
          </select>
        </label>
        <br />
        <label>
          To:
          <select value={fromUnit} onChange={handleToUnitChange}>
            <option value="kg">킬로그램(kg)</option>
            <option value="g">그램(g)</option>
            <option value="mg">밀리그램(mg)</option>
            <option value="t">톤(t)</option>
            <option value="kt">킬로톤(kt)</option>
            <option value="grain">그레인(gr)</option>
            <option value="oz">온스(oz)</option>
            <option value="lb">파운드(lb)</option>
            <option value="don">돈(don)</option>
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
export default WeightCal;
