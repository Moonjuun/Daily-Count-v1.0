import React, { useState } from "react";

function Interest() {
  const [monthlyAmount, setMonthlyAmount] = useState("");
  const [savingPeriod, setSavingPeriod] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [taxOption, setTaxOption] = useState("general");
  const [interestAmount, setInterestAmount] = useState("");

  const calculateInterest = () => {
    const monthlyInterestRate = interestRate / 12 / 100; // 월 이자율 계산
    const totalSavingAmount = monthlyAmount * savingPeriod; // 총 납입금액 계산
    let taxableInterestAmount = 0; // 과세 대상 이자금액
    let taxAmount = 0; // 세금액

    // 이자과세에 따라 과세 대상 이자금액과 세금액을 계산
    if (taxOption === "general") {
      // 일반과세
      taxableInterestAmount = interestAmount * 0.6;
      taxAmount = taxableInterestAmount * 0.15;
    } else if (taxOption === "tax-preferred") {
      // 세금우대
      taxableInterestAmount = interestAmount * 0.7;
      taxAmount = taxableInterestAmount * 0.045;
    }

    // 이자 계산 결과를 interestAmount state에 저장
    const interest = totalSavingAmount * monthlyInterestRate * savingPeriod;
    setInterestAmount(interest);

    // 세금 공제 후 이자 계산 결과를 보여줄 엘리먼트를 추가해주세요.
    const finalInterest = interest - taxAmount;
    console.log(
      `이자: ${interest}원, 세금: ${taxAmount}원, 공제 후 이자: ${finalInterest}원`
    );
  };

  return (
    <div>
      <h1>적금 계산기</h1>
      <label>
        월적립액:
        <input
          type="number"
          value={monthlyAmount}
          onChange={(e) => setMonthlyAmount(e.target.value)}
        />
      </label>
      <br />
      <label>
        적금기간:
        <input
          type="number"
          value={savingPeriod}
          onChange={(e) => setSavingPeriod(e.target.value)}
        />
        개월
      </label>
      <br />
      <label>
        연이자율:
        <input
          type="number"
          step="0.01"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        %
      </label>
      <br />
      <label>이자과세:</label>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => setTaxOption("general")}
        className={taxOption === "general" ? "selected" : ""}
      >
        일반과세
      </button>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => setTaxOption("tax-free")}
        className={taxOption === "tax-free" ? "selected" : ""}
      >
        비과세
      </button>
      <button
        onClick={() => setTaxOption("tax-preferred")}
        className={taxOption === "tax-preferred" ? "selected" : ""}
      >
        세금우대
      </button>
      <br />
      <button onClick={calculateInterest}>이자 계산하기</button>
      <br />
      <div>
        이자:{" "}
        {interestAmount !== ""
          ? `${interestAmount.toLocaleString()}원`
          : "계산 결과가 여기에 표시됩니다."}
      </div>
    </div>
  );
}

export default Interest;
