import React, { useState } from "react";
import { commaFormat, uncommaFormat } from "../utils/util";

function Interest() {
  const [inputValues, setInputValues] = useState({
    monthlyDeposit: "",
    termLength: "",
    termUnit: "months",
    interestRate: "",
    isCompoundInterest: "simple",
  });

  const [result, setResult] = useState(null);
  console.log("aaa", { ...inputValues });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: parseFloat(value) });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const calculateInterest = (inputValues) => {
    const {
      monthlyDeposit,
      termLength,
      termUnit,
      interestRate,
      isCompoundInterest,
    } = inputValues;

    console.log("bbb", { ...inputValues });

    //년
    if (termUnit === "years") {
      console.log("years");
      const makeMonth = termLength * 12;
      // 단리
      if (isCompoundInterest === "simple") {
        console.log("simple");
        const totalAmount = monthlyDeposit * makeMonth * (interestRate / 100);
        return totalAmount;
      } else {
        console.log("compound");
        const monthlyInterestRate = interestRate / 12 / 100;
        // 복리
        const totalAmount =
          monthlyDeposit *
          ((Math.pow(1 + monthlyInterestRate, makeMonth) - 1) /
            monthlyInterestRate);
        return totalAmount;
      }
    } else {
      console.log("months");
      // 개월
      if (isCompoundInterest === "simple") {
        console.log("simple");
        console.log("aa", interestRate);
        const totalAmount = monthlyDeposit * termLength * (interestRate / 100);
        return totalAmount;
      } else {
        console.log("compound");
        const monthlyInterestRate = interestRate / 12 / 100;
        // 복리
        const totalAmount =
          monthlyDeposit *
          ((Math.pow(1 + monthlyInterestRate, termLength) - 1) /
            monthlyInterestRate);
        return totalAmount;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 계산 로직을 작성하여 결과값을 계산합니다.
    const calculatedResult = calculateInterest(inputValues);
    setResult(calculatedResult);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        월 적금액
        <input
          type="text"
          name="monthlyDeposit"
          value={inputValues.monthlyDeposit}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        적금 기간
        <input
          type="text"
          name="termLength"
          value={inputValues.termLength}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          type="radio"
          name="termUnit"
          value="months"
          checked={inputValues.termUnit === "months"}
          onChange={handleRadioChange}
        />
        개월
      </label>
      <label>
        <input
          type="radio"
          name="termUnit"
          value="years"
          checked={inputValues.termUnit === "years"}
          onChange={handleRadioChange}
        />
        년
      </label>

      <br />
      <label>
        이자율
        <input
          type="text"
          name="interestRate"
          value={inputValues.interestRate}
          onChange={handleInputChange}
        />
      </label>

      <label>
        <input
          type="radio"
          name="isCompoundInterest"
          value="simple"
          checked={inputValues.isCompoundInterest === "simple"}
          onChange={handleRadioChange}
        />
        단리
      </label>
      <label>
        <input
          type="radio"
          name="isCompoundInterest"
          value="compound"
          checked={inputValues.isCompoundInterest === "compound"}
          onChange={handleRadioChange}
        />
        복리
      </label>
      <br />
      <button type="submit">계산</button>
      {result && (
        <div>
          Result: {result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
      )}
    </form>
  );
}

export default Interest;
