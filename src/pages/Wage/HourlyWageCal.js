import React, { useState } from "react";
import { commaFormat, uncommaFormat } from "../../utils/util";

const HourlyWageCal = () => {
  const [hour, setHour] = useState(0);
  const [hourlyWage, setHourlyWage] = useState("9,620");
  const [holidayPay, setHolidayPay] = useState(0);
  const [weekPay, setWeekPay] = useState(0);
  const [result, setResult] = useState("");

  function calculateWage() {
    const hourlyWages = Number(uncommaFormat(hourlyWage)); // 수정된 부분
    if (hour == 0 || hour === "") {
      alert("시간을 넣어주세요!");
    } else if (hour >= 15) {
      setHour(hour);
      setHourlyWage(hourlyWages);
      setWeekPay(hour * hourlyWages);
      setHolidayPay(hour * 0.2 * hourlyWages);
      setResult((hour * hourlyWages + hour * 0.2 * hourlyWages) * 4);
    } else if (hour < 15) {
      setHour(hour);
      setHourlyWage(hourlyWages);
      setWeekPay(hour * hourlyWages);
      setHolidayPay(0);
      setResult(hour * hourlyWages * 4);
    }
  }

  return (
    <div>
      <h1>시급 계산기</h1>
      <div className="WageCal">
        <div>주간 업무 시간(일주일 총 일하는 시간)</div>
        <div>
          <input
            type="number"
            value={hour}
            onFocus={() => setHour("")}
            onChange={(e) => {
              setHour(e.target.value);
              setResult(false); // input 타입 수정 시 result 상태값을 false로 변경
            }}
          />
        </div>
        <div>시급</div>
        <div>
          <input
            type="text"
            value={hourlyWage}
            onChange={(e) => {
              setHourlyWage(commaFormat(uncommaFormat(e.target.value)));
              setResult(false); // input 타입 수정 시 result 상태값을 false로 변경
            }}
          />
        </div>
        <br />
        <button onClick={calculateWage}>계산</button>
      </div>
      {result && (
        <label>
          <h5>
            시급 {hourlyWage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            원
          </h5>
          <h5>총근무시간 {hour} 시간</h5>
          <h5>
            주급 {weekPay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h5>
          <h5>
            예상 주휴수당 :{" "}
            {holidayPay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h5>
          <h5>
            예상 총 주급(주급 + 예상 주휴수당) :{" "}
            {(weekPay + holidayPay)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            원
          </h5>
          <h5>
            예상 월급(예상 총 주급 x 4) :{" "}
            {result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
          </h5>
          <p>
            *2023년 최저임금은 시간당 9,620원입니다. <br />
            *교통비, 식대 및 다른 수당들은 제외된 금액입니다. <br />
            *업장 및 회사의 규정에 따라 주휴수당 금액이 다를 수 있습니다.
          </p>
        </label>
      )}
    </div>
  );
};

export default HourlyWageCal;
