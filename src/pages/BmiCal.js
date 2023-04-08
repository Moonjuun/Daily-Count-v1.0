import React, { useState } from "react";

const BmiCal = () => {
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [bmi, setBmi] = useState(<p></p>);
  const [resultBmi, setCategory] = useState(<p></p>);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const calculateBMI = () => {
    if (!gender || !height || !weight || !age) {
      window.alert("값을 다 넣어주세요");
      return;
    }

    const heightInMeter = height / 100;
    const bmi = weight / (heightInMeter * heightInMeter);
    setBmi(bmi.toFixed(2));

    if (bmi < 18.5) {
      setCategory("저체중");
    } else if (bmi >= 18.5 && bmi < 23) {
      setCategory("정상");
    } else if (bmi >= 23 && bmi < 25) {
      setCategory("과체중");
    } else if (bmi >= 25 && bmi < 30) {
      setCategory("비만");
    } else {
      setCategory("고도비만");
    }
  };

  return (
    <div>
      <h1>BMI 계산기</h1>
      <form>
        <label>
          성별: <br />
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
          />
          남성&nbsp;
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />
          여성
        </label>
        <br />
        <label>
          키 (cm):
          <input
            type="number"
            name="height"
            value={height}
            onChange={handleHeightChange}
          />
        </label>
        <br />
        <label>
          체중 (kg):
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={handleWeightChange}
          />
        </label>
        <br />
        <label>
          나이:
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleAgeChange}
          />
        </label>
        <br />
        <button type="button" onClick={calculateBMI}>
          계산하기
        </button>
      </form>
      {bmi && (
        <div>
          <h4>BMI 지수: {bmi}</h4>
          <h4>비만도: {resultBmi}</h4>
        </div>
      )}
    </div>
  );
};

export default BmiCal;
