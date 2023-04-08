import React, { useState } from "react";

function PercentageCal() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  function handleNumber1Change(e) {
    setNumber1(e.target.value);
  }

  function handleNumber2Change(e) {
    setNumber2(e.target.value);
  }

  function calculatePercentage() {
    setResult((number2 / number1) * 100);
  }

  return (
    <div>
      <h1>퍼센트 계산</h1>
      <div className="ratioVal">
        <span>
          전체값 &nbsp;
          <input
            type="number"
            value={number1}
            onChange={handleNumber1Change}
            style={{ width: "15%", textAlign: "center" }}
          />
        </span>
        <span>
          의&nbsp;&nbsp;
          <input
            type="number"
            value={number2}
            onChange={handleNumber2Change}
            style={{ width: "15%", textAlign: "center" }}
          />
        </span>
        <span>&nbsp;%는 얼마??</span>
        <br />
        <button onClick={calculatePercentage}>Calculate Percentage</button>
        <br />
      </div>

      <label>
        Result:
        <h4>{result}</h4>
      </label>
    </div>
  );
}

export default PercentageCal;
