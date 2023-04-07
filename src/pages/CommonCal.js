import React, { useState, useEffect } from "react";
import ResultComponent from "../components/CommonCal/ResultComponent";
import KeyPadComponent from "../components/CommonCal/KeyPadComponent";

const CommonCal = () => {
  const [result, setResult] = useState("");

  const onClick = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "BS") {
      backspace();
    } else {
      setResult(result + button);
    }
  };

  const calculate = () => {
    let checkResult = "";
    if (result.includes("--")) {
      checkResult = result.replace("--", "+");
    } else {
      checkResult = result;
    }

    try {
      setResult(String(eval(checkResult)) || "");
    } catch (e) {
      alert("수식이 맞지 않아요!");
      setResult("");
    }
  };

  const reset = () => {
    setResult("");
    return "";
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeyDown);
    return () => {
      document.removeEventListener("keyup", handleKeyDown);
    };
  }, [result]);

  const handleKeyDown = (e) => {
    const key = e.key;
    if (key === "Enter") {
      calculate();
    } else if (key === "Escape") {
      reset();
    } else if (key === "Backspace") {
      backspace();
    } else if (/^[0-9/*\-+.]$/.test(key)) {
      setResult(result + key);
    }
  };

  return (
    <div className="CommonCal">
      <div className="calculator-body">
        <h1>Simple Calculator</h1>
        <ResultComponent result={result} />
        <KeyPadComponent onClick={onClick} />
      </div>
    </div>
  );
};

export default CommonCal;
