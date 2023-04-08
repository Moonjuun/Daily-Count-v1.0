import React, { useState } from "react";
import moment from "moment";

function DateCal() {
  const [firstDateInput, setFirstDateInput] = useState(
    moment().format("YYYY-MM-DD")
  );
  // 날짜 계산1
  const [secondDateInput, setSecondDateInput] = useState("");
  const [dateResult, setDateResult] = useState({ days: 0 });

  function getDays(dateOne, dateTwo) {
    const firstDate = moment(dateOne);
    const secondDate = moment(dateTwo);
    const days = secondDate.diff(firstDate, "days");
    const totalDays = Math.abs(days);
    setDateResult({ days: totalDays });
  }

  // 날짜 계산2
  const [dateInput1, setDateInput1] = useState("");
  const [afterDate, setAfterDate] = useState("");

  function calculateDate() {
    if (!dateInput1) {
      window.alert("값 넣어주세요");
      return;
    }
    const date = moment(firstDateInput).add(dateInput1 - 1, "days");
    setAfterDate(date.format("YYYY-MM-DD"));
  }
  // 날짜 계산3
  const [dateInput2, setDateInput2] = useState("");
  const [dayminusDate, setDayMinusDate] = useState("");

  function calcuateDDay() {
    if (!dateInput2) {
      window.alert("값 넣어주세요");
      return;
    }
    const date = moment(firstDateInput).subtract(dateInput2, "days");

    setDayMinusDate(date.format("YYYY-MM-DD"));
  }

  return (
    <form
      className="date-calculator"
      onSubmit={(e) => {
        e.preventDefault();
        getDays(firstDateInput, secondDateInput);
      }}
    >
      <div className="date-calculator__container">
        <h1 className="date-calculator__container__text">날짜 계산</h1>
        <div className="date-calculator__container__content">
          <div className="date-calculator__container__content__date">
            <div>
              <div style={{ marginBottom: "10px" }}>기준일</div>
              <input
                type="date"
                value={firstDateInput}
                onChange={(e) => setFirstDateInput(e.target.value)}
              />
            </div>
            <div>
              <input
                type="date"
                value={secondDateInput}
                onChange={(e) => setSecondDateInput(e.target.value)}
              />
            </div>
          </div>
          <div
            className="date-calculator__container__result"
            style={{ marginBottom: "10px" }}
          >
            <span className="date-calculator__container__result__text">{`기준일부터 ${
              dateResult.days > 0 ? dateResult.days : 0
            } 일`}</span>
          </div>

          <div className="date-calculator__container__content__btn">
            <button className="date-calculator__container__content__btn--calculate">
              계산하기
            </button>
          </div>
        </div>
      </div>
      <div className="jb-division-line"></div>

      <div style={{ marginTop: "10px" }}>
        <input
          type="number"
          placeholder="기준일"
          value={dateInput1}
          onChange={(e) => {
            setDateInput1(e.target.value);
            setAfterDate("");
          }}
          style={{ width: "30%" }}
        />
        <span style={{ marginLeft: "10px", marginRight: "30px" }}>
          일 후는 몇 일?
        </span>
        <span style={{ fontWeight: "bold", display: "inline-block" }}>
          {afterDate && `${afterDate} 입니다.`}
        </span>

        <button
          onClick={(e) => {
            e.preventDefault();
            calculateDate();
          }}
        >
          계산
        </button>
      </div>
      <div className="jb-division-line"></div>

      <div style={{ marginTop: "10px" }}>
        <input
          type="number"
          placeholder="기준일"
          value={dateInput2}
          onChange={(e) => {
            setDateInput2(e.target.value);
            setDayMinusDate("");
          }}
          style={{ width: "30%" }}
        />
        <span
          style={{
            marginLeft: "10px",
            marginRight: "30px",
          }}
        >
          일 전은 몇 일?
        </span>
        <span
          style={{
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          {dayminusDate && `${dayminusDate} 입니다.`}
        </span>

        <button
          onClick={(e) => {
            e.preventDefault();
            calcuateDDay();
          }}
        >
          계산
        </button>
      </div>
      <div className="jb-division-line"></div>

      <p>날짜계산은 기준일을 1일로 포함하여 계산됩니다. </p>
    </form>
  );
}

export default DateCal;
