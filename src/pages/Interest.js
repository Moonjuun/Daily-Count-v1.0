import React, { useState } from "react";
import { commaFormat } from "../utils/util";

function Interest() {
  const [inputValues, setInputValues] = useState({
    monthlyDeposit: "",
    termLength: "",
    termUnit: "months",
    interestRate: "",
    isCompoundInterest: "simple",
  });

  const [result, setResult] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
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

    const monthlyDepositNumber = Number(monthlyDeposit);
    const termLengthNumber = Number(termLength);
    const interestRateNumber = Number(interestRate);

    // 입력값이 없는 경우 빈 문자열 반환
    if (!monthlyDeposit || !termLength || !interestRate) {
      return "";
    }

    // 입력값이 숫자가 아닌 경우 빈 문자열 반환
    if (isNaN(monthlyDeposit) || isNaN(termLength) || isNaN(interestRate)) {
      return "";
    }

    let totalAmount = 0;
    let totalDeposit = 0;
    let totalInterest = 0;

    // 개월
    if (termUnit === "months") {
      // 단리
      if (isCompoundInterest === "simple") {
        const monthlyInterestRate = (interestRateNumber * 0.01) / 12; // 월 이자율 계산

        for (let i = 1; i <= termLengthNumber; i++) {
          totalDeposit += monthlyDepositNumber; // 월 적금액을 더함
          totalInterest += totalDeposit * monthlyInterestRate; // 단리 이자 계산
        }
        totalAmount = totalDeposit + totalInterest;
        const totalInterestTax = totalInterest * 0.154;
        const totalAmountTax = totalAmount - totalInterestTax;

        return [
          totalAmount.toFixed(),
          totalAmountTax.toFixed(),
          totalDeposit.toFixed(),
          totalInterest.toFixed(),
          totalInterestTax.toFixed(),
        ];
      }
      // 복리(o)
      else {
        const monthlyInterestRate = (interestRateNumber * 0.01) / 12; // 월 이자율 계산
        for (let i = 1; i <= termLengthNumber; i++) {
          totalAmount += monthlyDepositNumber; // 월적금액을 더함
          totalAmount += totalAmount * monthlyInterestRate; // 복리 이자 계산
        }
        let totalDeposit = monthlyDepositNumber * termLengthNumber;
        let totalInterest = totalAmount - totalDeposit;
        let totalInterestTax = totalInterest * 0.154;
        let totalAmountTax = totalAmount - totalInterestTax;

        return [
          totalAmount.toFixed(),
          totalAmountTax.toFixed(),
          totalDeposit.toFixed(),
          totalInterest.toFixed(),
          totalInterestTax.toFixed(),
        ];
      }
    }
    // 년
    else {
      const makeMonth = Number(termLength * 12);
      // 단리
      if (isCompoundInterest === "simple") {
        const monthlyInterestRate = (interestRateNumber * 0.01) / 12; // 월 이자율 계산

        for (let i = 1; i <= makeMonth; i++) {
          totalDeposit += monthlyDepositNumber; // 월 적금액을 더함
          totalInterest += totalDeposit * monthlyInterestRate; // 단리 이자 계산
        }
        totalAmount = totalDeposit + totalInterest;
        const totalInterestTax = totalInterest * 0.154;
        const totalAmountTax = totalAmount - totalInterestTax;

        return [
          totalAmount.toFixed(),
          totalAmountTax.toFixed(),
          totalDeposit.toFixed(),
          totalInterest.toFixed(),
          totalInterestTax.toFixed(),
        ];
      }
      // 복리
      else {
        const monthlyInterestRate = (interestRateNumber * 0.01) / 12; // 월 이자율 계산
        for (let i = 1; i <= makeMonth; i++) {
          totalAmount += monthlyDepositNumber; // 월적금액을 더함
          totalAmount += totalAmount * monthlyInterestRate; // 복리 이자 계산
        }
        let totalDeposit = monthlyDepositNumber * makeMonth;
        let totalInterest = totalAmount - totalDeposit;
        let totalInterestTax = totalInterest * 0.154;
        let totalAmountTax = totalAmount - totalInterestTax;

        return [
          totalAmount.toFixed(),
          totalAmountTax.toFixed(),
          totalDeposit.toFixed(),
          totalInterest.toFixed(),
          totalInterestTax.toFixed(),
        ];
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
      <h1>적금 계산기</h1>
      <label>
        월 적금액
        <input
          style={{ textAlign: "right" }}
          type="number"
          min="0"
          name="monthlyDeposit"
          value={inputValues.monthlyDeposit}
          onChange={handleInputChange}
          required
        />
        <div style={{ float: "right", fontWeight: "500" }}>
          {commaFormat(inputValues.monthlyDeposit)} 원
        </div>
      </label>
      <br />
      <label>
        적금 기간
        <input
          type="number"
          min="0"
          name="termLength"
          value={inputValues.termLength}
          onChange={handleInputChange}
          required
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
        이자율(%)
        <input
          type="number"
          name="interestRate"
          min="0"
          value={inputValues.interestRate}
          onChange={handleInputChange}
          required
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
      {result[0] && (
        <div className="Interest-result">
          <h5>일반과세</h5>
          <div>
            원금합계:{" "}
            <span style={{ fontWeight: "700" }}>
              {commaFormat(result[2])} 원
            </span>
          </div>
          <div>
            세전이자:{" "}
            <span style={{ fontWeight: "700" }}>
              {commaFormat(result[3])} 원
            </span>
          </div>
          <div style={{ color: "red" }}>
            이자과세(15.4%):{" "}
            <span style={{ fontWeight: "700" }}>
              -{commaFormat(result[4])} 원
            </span>
          </div>
          <div>
            세후 수령액:{" "}
            <span style={{ fontWeight: "700" }}>
              {commaFormat(result[1])} 원
            </span>
          </div>

          <div className="jb-division-line"></div>

          <h5>비과세</h5>
          <div>
            원금합계:{" "}
            <span style={{ fontWeight: "700" }}>
              {commaFormat(result[2])} 원
            </span>
          </div>
          <div>
            세전이자:{" "}
            <span style={{ fontWeight: "700" }}>
              {commaFormat(result[3])} 원
            </span>
          </div>
          <div style={{ color: "red" }}>
            이자과세(0%): <span style={{ fontWeight: "700" }}>0 원</span>
          </div>
          <div>
            세후 수령액:{" "}
            <span style={{ fontWeight: "700" }}>
              {commaFormat(result[0])} 원
            </span>
          </div>

          <div className="jb-division-line"></div>

          <div className="Interest-info">
            <p>
              ※ 월단위로 계산된 이자이기 때문에 일단위로 계산되는 금융기관의
              적금이자와는 차이가 있습니다.
            </p>
            <p>
              ※ 오차 가능성 안내 <br />본 대출금 상환 계산기는 월 단위로 계산 한
              것이므로, 실제 대출 시작 일자에 일할 계산에 따른 약간의 차이는
              있을 수 있습니다.
            </p>
          </div>
        </div>
      )}
    </form>
  );
}

export default Interest;
