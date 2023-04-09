import React, { useState } from "react";
import ConvertMenuBar from "../../components/Convert/ConverMenuBar";

const PressCal = () => {
  const [fromValue, setFromValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("atm");
  const [toUnit, setToUnit] = useState("Pa");

  const unitFactors = {
    atm: { factor: 101325, label: "기압(atm)" },
    Pa: { factor: 1, label: "파스칼(Pa)" },
    hPa: { factor: 100, label: "헥토파스칼(hPa)" },
    kPa: { factor: 1000, label: "킬로파스칼(kPa)" },
    MPa: { factor: 1000000, label: "메가파스칼(MPa)" },
    mbar: { factor: 100, label: "밀리바(mbar)" },
    bar: { factor: 100000, label: "바(bar)" },
    dyn_cm2: { factor: 0.1, label: "dyne/cm²(dyn/cm²)" },
    psi: { factor: 6894.76, label: "프사이(psi)" },
    mmHg: { factor: 133.322, label: "밀리미터 수은주(mmHg)" },
    kgf_cm2: { factor: 98066.5, label: "kgf/㎠(kgf/cm²)" },
    inHg: { factor: 3386.39, label: "인치 수은주(inHg)" },
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
            <option value="atm">기압(atm)</option>
            <option value="Pa">파스칼(Pa)</option>
            <option value="hPa">헥토파스칼(hPa)</option>
            <option value="kPa">킬로파스칼(kPa)</option>
            <option value="MPa">메가파스칼(MPa)</option>
            <option value="mbar">밀리바(mbar)</option>
            <option value="bar">바(bar)</option>
            <option value="dyn_cm2">dyne/cm²(dyn/cm²)</option>
            <option value="psi">프사이(psi)</option>
            <option value="mmHg">밀리미터 수은주(mmHg)</option>
            <option value="kgf_cm2">kgf/㎠(kgf/cm²)</option>
            <option vlaue="inHg">인치 수은주</option>
          </select>
        </label>
        <label>
          To:
          <select value={toUnit} onChange={handleToUnitChange}>
            <option value="atm">기압(atm)</option>
            <option value="Pa">파스칼(Pa)</option>
            <option value="hPa">헥토파스칼(hPa)</option>
            <option value="kPa">킬로파스칼(kPa)</option>
            <option value="MPa">메가파스칼(MPa)</option>
            <option value="mbar">밀리바(mbar)</option>
            <option value="bar">바(bar)</option>
            <option value="dyn_cm2">dyne/cm²(dyn/cm²)</option>
            <option value="psi">프사이(psi)</option>
            <option value="mmHg">밀리미터 수은주(mmHg)</option>
            <option value="kgf_cm2">kgf/㎠(kgf/cm²)</option>
            <option value="inHg">인치 수은주</option>
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
export default PressCal;
