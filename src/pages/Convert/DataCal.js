import React, { useState } from "react";
import ConvertMenuBar from "../../components/Convert/ConverMenuBar";

const DataCal = () => {
  const [fromValue, setFromValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("byte");
  const [toUnit, setToUnit] = useState("byte");

  const unitFactors = {
    bit: { factor: 0.125, label: "비트(bit)" },
    byte: { factor: 1, label: "바이트(byte)" },
    kb: { factor: 1024, label: "킬로바이트(kb)" },
    mb: { factor: 1048576, label: "메가바이트(mb)" },
    gb: { factor: 1073741824, label: "기가바이트(gb)" },
    tb: { factor: 1099511627776, label: "테라바이트(tb)" },
    pb: { factor: 1125899906842624, label: "페타바이트(pb)" },
    eb: { factor: 1152921504606846976, label: "엑사바이트(eb)" },
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
  const result = Number(fromValue) * factor;

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
            <option value="bit">비트(bit)</option>
            <option value="byte">바이트(byte)</option>
            <option value="kb">킬로바이트(kb)</option>
            <option value="mb">메가바이트(mb)</option>
            <option value="gb">기가바이트(gb)</option>
            <option value="tb">테라바이트(tb)</option>
            <option value="pb">페타바이트(pb)</option>
            <option value="eb">엑사바이트(eb)</option>
          </select>
        </label>
        <label>
          To:
          <select value={toUnit} onChange={handleToUnitChange}>
            <option value="bit">비트(bit)</option>
            <option value="byte">바이트(byte)</option>
            <option value="kb">킬로바이트(kb)</option>
            <option value="mb">메가바이트(mb)</option>
            <option value="gb">기가바이트(gb)</option>
            <option value="tb">테라바이트(tb)</option>
            <option value="pb">페타바이트(pb)</option>
            <option value="eb">엑사바이트(eb)</option>
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

export default DataCal;
