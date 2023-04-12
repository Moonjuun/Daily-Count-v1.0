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
    } else if (
      (button === "+" || button === "-" || button === "*" || button === "/") &&
      (result === "" || /[+\-*/]$/.test(result))
    ) {
      // do nothing
    } else if (
      button === "." &&
      (!result || /[^\d]$/.test(result) || result === "0")
    ) {
      setResult(result === "" ? "0" : result);
      setResult(result + ".");
    } else {
      setResult(
        result === "0"
          ? button
          : result === "0."
          ? "0." + button
          : result + button
      );
    }
  };

  const calculate = () => {
    let checkResult = "";
    checkResult = result;

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
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
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
    } else if (/^[0-9/*\-+.()]$/.test(key)) {
      if (
        (key === "+" || key === "-" || key === "*" || key === "/") &&
        (result === "" || /[+\-*/]$/.test(result))
      ) {
        // do nothing
      } else if (
        key === "." &&
        (!result || /[^\d]$/.test(result) || result === "0")
      ) {
        setResult(result === "" ? "0" : result);
        setResult(result + ".");
      } else {
        setResult(
          result === "0" ? key : result === "0." ? "0." + key : result + key
        );
      }
    }
  };

  return (
    <div className="CommonCal">
      <div className="calculator-body">
        <h1>계산기</h1>
        <ResultComponent result={result} />
        <KeyPadComponent onClick={onClick} />
      </div>
    </div>
  );
};

export default CommonCal;
