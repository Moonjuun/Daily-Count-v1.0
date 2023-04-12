import React, { useState, useEffect } from "react";

const CommonCal = () => {
  const [result, setResult] = useState("0");
  const [previousNum, setPreviousNum] = useState("");
  const [operator, setOperator] = useState("");

  const handleClick = (button) => {
    if (button === "AC") {
      setResult("0");
      setPreviousNum("");
      setOperator("");
    } else if (button === "+/-") {
      setResult(result * -1);
    } else if (button === "%") {
      setResult(result / 100);
    } else if (button === ".") {
      if (!result.includes(".")) {
        setResult(result + ".");
      }
    } else if (button === "=") {
      calculate();
    } else if (button === "←") {
      // ← 버튼 추가
      setResult(result.slice(0, -1));
    } else if (
      button === "+" ||
      button === "-" ||
      button === "*" ||
      button === "/"
    ) {
      setPreviousNum(result);
      setResult("0");
      setOperator(button);
    } else {
      setResult(result === "0" ? button : result + button);
    }
  };

  const calculate = () => {
    const num1 = parseFloat(previousNum);
    const num2 = parseFloat(result);

    if (operator === "+") {
      setResult((num1 + num2).toString());
    } else if (operator === "-") {
      setResult((num1 - num2).toString());
    } else if (operator === "*") {
      setResult((num1 * num2).toString());
    } else if (operator === "/") {
      setResult((num1 / num2).toString());
    }
    setPreviousNum("");
    setOperator("");
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const keyPressed = e.key;
      if (!isNaN(keyPressed) || keyPressed === ".") {
        handleClick(keyPressed);
      } else if (keyPressed === "+") {
        handleClick("+");
      } else if (keyPressed === "-") {
        handleClick("-");
      } else if (keyPressed === "*") {
        handleClick("*");
      } else if (keyPressed === "/") {
        handleClick("/");
      } else if (keyPressed === "=" || keyPressed === "Enter") {
        handleClick("=");
      } else if (keyPressed === "Escape") {
        handleClick("AC");
      } else if (keyPressed === "Backspace") {
        setResult(result.slice(0, -1));
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div className="CommonCal">
      <div className="calculator-body">
        <h1>계산기</h1>
        <div className="App">
          <div className="calculator">
            <div className="result">{result}</div>{" "}
            <div className="button-row">
              <button
                className="button button-ac"
                onClick={() => handleClick("AC")}
              >
                AC
              </button>
              <button
                className="button button-sign"
                onClick={() => handleClick("+/-")}
              >
                +/-
              </button>
              <button
                className="button button-percent"
                onClick={() => handleClick("%")}
              >
                %
              </button>
              <button
                className="button button-operator"
                onClick={() => handleClick("/")}
              >
                ÷
              </button>
            </div>
            <div className="button-row">
              <button className="button" onClick={() => handleClick("7")}>
                7
              </button>
              <button className="button" onClick={() => handleClick("8")}>
                8
              </button>
              <button className="button" onClick={() => handleClick("9")}>
                9
              </button>
              <button
                className="button button-operator"
                onClick={() => handleClick("*")}
              >
                ×
              </button>
            </div>
            <div className="button-row">
              <button className="button" onClick={() => handleClick("4")}>
                4
              </button>
              <button className="button" onClick={() => handleClick("5")}>
                5
              </button>
              <button className="button" onClick={() => handleClick("6")}>
                6
              </button>
              <button
                className="button button-operator"
                onClick={() => handleClick("-")}
              >
                -
              </button>
            </div>
            <div className="button-row">
              <button className="button" onClick={() => handleClick("1")}>
                1
              </button>
              <button className="button" onClick={() => handleClick("2")}>
                2
              </button>
              <button className="button" onClick={() => handleClick("3")}>
                3
              </button>
              <button
                className="button button-operator"
                onClick={() => handleClick("+")}
              >
                +
              </button>
            </div>
            <div className="button-row">
              <button
                className="button button-zero"
                onClick={() => handleClick("0")}
              >
                0
              </button>
              <button className="button" onClick={() => handleClick(".")}>
                .
              </button>
              <button
                className="button button-backspace"
                onClick={() => handleClick("←")}
              >
                ←
              </button>
              <button
                className="button button-equal"
                onClick={() => handleClick("=")}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCal;
