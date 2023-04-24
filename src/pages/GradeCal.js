import React, { useState } from "react";

const grades = {
  4.5: {
    "A+": 4.5,
    A0: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B0: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C0: 2.0,
    "C-": 1.7,
    "D+": 1.3,
    D0: 1.0,
    "D-": 0.7,
    F: 0.0,
  },
  4.3: {
    "A+": 4.3,
    A0: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B0: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C0: 2.0,
    "C-": 1.7,
    "D+": 1.3,
    D0: 1.0,
    "D-": 0.7,
    F: 0.0,
  },
};

function GradeCal() {
  const [gradeType, setGradeType] = useState("4.5");
  const [includeF, setIncludeF] = useState(false);
  const [subjects, setSubjects] = useState(
    Array(6).fill({ subject: "", score: "", credit: "", major: false })
  );
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const handleGradeTypeChange = (e) => {
    setGradeType(e.target.value);
  };

  const handleIncludeFChange = (e) => {
    setIncludeF(e.target.checked);
  };

  const handleSubjectChange = (e, i, field) => {
    const newSubjects = [...subjects];
    newSubjects[i][field] =
      field === "major" ? e.target.checked : e.target.value;
    setSubjects(newSubjects);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let creditSum = 0;
    let scoreSum = 0;
    subjects.forEacㅁh((subject) => {
      if (subject.subject && subject.score && subject.credit) {
        if (!includeF && subject.score === "F") {
          return;
        }
        creditSum += Number(subject.credit);
        scoreSum += Number(subject.credit) * grades[gradeType][subject.score];
      }
    });
    setTotalCredit(creditSum);
    setTotalScore(scoreSum);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setGradeType("4.5");
    setIncludeF(false);
    setSubjects(
      Array(6).fill({ subject: "", score: "", credit: "", major: false })
    );
    setTotalCredit(0);
    setTotalScore(0);
  };

  return (
    <div>
      <h1>학점 계산기</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="gradeType">등급 기준</label>
          <select
            id="gradeType"
            value={gradeType}
            onChange={handleGradeTypeChange}
          >
            <option value="4.5">4.5만점</option>
            <option value="4.3">4.3만점</option>
          </select>
        </div>
        <div>
          <label htmlFor="includeF">F 학점 포함</label>
          <input
            type="checkbox"
            id="includeF"
            checked={includeF}
            onChange={handleIncludeFChange}
          />
        </div>
        {[...Array(6)].map((_, i) => (
          <div key={i}>
            <label htmlFor={`subject${i}`}>과목 {i + 1}</label>
            <input
              type="text"
              id={`subject${i}`}
              value={subjects[i].subject}
              onChange={(e) => handleSubjectChange(e, i, "subject")}
            />
            <label htmlFor={`score${i}`}>점수</label>
            <select
              id={`score${i}`}
              value={subjects[i].score}
              onChange={(e) => handleSubjectChange(e, i, "score")}
            >
              <option value=""></option>
              {Object.keys(grades[gradeType]).map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
            <label htmlFor={`credit${i}`}>학점</label>
            <input
              type="text"
              id={`credit${i}`}
              value={subjects[i].credit}
              onChange={(e) => handleSubjectChange(e, i, "credit")}
            />
            <label htmlFor={`major${i}`}>전공</label>
            <input
              type="checkbox"
              id={`major${i}`}
              checked={subjects[i].major}
              onChange={(e) => handleSubjectChange(e, i, "major")}
            />
          </div>
        ))}
        <button type="submit">계산</button>
        <button type="reset" onClick={handleReset}>
          초기화
        </button>
      </form>
      <div>
        <p>총 이수 학점: {totalCredit}학점</p>
        <p>
          평균 학점:{" "}
          {totalCredit > 0 ? (totalScore / totalCredit).toFixed(2) : "0.00"}
        </p>
      </div>
    </div>
  );
}

export default GradeCal;
