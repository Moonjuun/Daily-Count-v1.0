import React, { useState } from "react";

const PercentageCal = () => {
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
    if (number1 !== 0) {
      setResult(number2 * number1 * 0.01);
      console.log(number2);
      console.log(number1);
    } else {
      alert("올바른 수식을 채워주세요");
    }
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
            onFocus={() => {
              setNumber1("");
            }}
            onChange={handleNumber1Change}
            style={{ width: "20%", textAlign: "center" }}
          />
        </span>
        <span>
          &nbsp;의&nbsp;&nbsp;
          <input
            type="number"
            value={number2}
            onFocus={() => {
              setNumber2("");
            }}
            onChange={handleNumber2Change}
            style={{ width: "20%", textAlign: "center" }}
          />
        </span>
        <span>&nbsp;%는 얼마??</span>
        <br />
        <button onClick={calculatePercentage}>계산</button>
        <br />
      </div>

      <label>
        Result:
        <h4>{result}</h4>
      </label>
    </div>
  );
};

export default PercentageCal;
