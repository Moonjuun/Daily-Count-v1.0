import React, { useState } from "react";
import moment from "moment";

const AgeCal = () => {
  const [birthDate, setBirthDate] = useState(moment().format("YYYY-MM-DD"));
  const [referenceDate, setReferenceDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [age, setAge] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [days, setDays] = useState("");
  const [daysToBirthday, setDaysToBirthday] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 생년월일 검증
    if (!birthDate || !referenceDate) {
      alert("생년월일과 기준일을 입력해주세요.");
      return;
    }

    if (birthDate > referenceDate) {
      window.alert("생년월일은 기준일보다 클 수 없습니다.");
      return;
    }

    // 나이 계산
    const ageInMilliseconds = new Date(referenceDate) - new Date(birthDate);
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);

    // 띠 계산
    const birthYear = new Date(birthDate).getFullYear();
    const zodiacIndex = (birthYear - 4) % 12;
    const zodiacs = [
      "쥐",
      "소",
      "범",
      "토끼",
      "용",
      "뱀",
      "말",
      "양",
      "원숭이",
      "닭",
      "개",
      "돼지",
    ];
    const zodiacResult = zodiacs[zodiacIndex];
    // 생일까지 몇 일 남았는지 계산
    const nextBirthday = new Date(referenceDate);
    nextBirthday.setMonth(new Date(birthDate).getMonth());
    nextBirthday.setDate(new Date(birthDate).getDate());
    let daysToBirthday = Math.ceil(
      (nextBirthday - new Date(referenceDate)) / (1000 * 60 * 60 * 24)
    );
    if (daysToBirthday < 0) {
      daysToBirthday += 365;
    }
    setDaysToBirthday(daysToBirthday);

    // 결과 출력
    const daysInMilliseconds = new Date(referenceDate) - new Date(birthDate);
    const daysResult = daysInMilliseconds / (1000 * 60 * 60 * 24);

    setAge(Math.floor(ageInYears));
    setZodiac(zodiacResult);
    setDays(Math.floor(daysResult));
  };

  return (
    <div>
      <h1>만 나이 계산기</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="birthDate">생년월일:</label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={
              (e) => {
                setBirthDate(e.target.value);
                setAge("");
              } // input 타입 수정 시 setAge 상태값을 false로 변경
            }
          />
        </div>
        <div>
          <label htmlFor="referenceDate">기준일:</label>
          <input
            type="date"
            id="referenceDate"
            value={referenceDate}
            onChange={(e) => {
              setReferenceDate(e.target.value);
              setAge("");
            }}
          />
        </div>
        <button type="submit">나이 및 띠 계산하기</button>
      </form>
      {age !== "" && (
        <p>
          만 <span style={{ fontWeight: "bold" }}>{age}세</span> 이며,{" "}
          <span style={{ fontWeight: "bold", color: "red" }}>{zodiac}띠</span>{" "}
          입니다. 태어난 지{" "}
          <span style={{ fontWeight: "bold" }}>
            {days.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}일
          </span>
          째입니다.
          <br />
          다음 생일까지{" "}
          <span style={{ fontWeight: "bold" }}>{daysToBirthday}</span>일
          남았습니다.
        </p>
      )}
      <p style={{ color: age >= 18 ? "blue" : "red" }}>
        * 투표 가능 (만18세 이상) <br />
        * 운전면허 취득 가능 (만18세 이상) <br />
        * 아르바이트 및 취업 가능 (만18세 이상) <br />
        * 청소년 관람불가 영화 관람 가능 (만18세 이상, * 재학 중인 고등학생
        제외) <br />
        * 군대 입영 가능 (만18세 이상) <br />* 9급 공무원 지원 가능 (만18세
        이상)
      </p>
      <div className="jb-division-line"></div>
      <p>
        - 날짜계산은 기준일을 1일로 포함하여 계산됩니다. <br />
        - 주관처에 의해 기념일이 변경될 수 있습니다. <br />- 본 정보는 실제와
        다를 수 있습니다. 정확한 내용은 각 주관기관을 통해 확인하시기 바랍니다.
      </p>
    </div>
  );
};

export default AgeCal;
