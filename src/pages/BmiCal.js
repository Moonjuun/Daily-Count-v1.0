import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BmiCal = () => {
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [bmi, setBmi] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "gender") {
      setGender(value);
    } else if (name === "height") {
      setHeight(value);
    } else if (name === "weight") {
      setWeight(value);
    } else if (name === "age") {
      setAge(value);
    }
  };

  const calculateBMI = () => {
    const heightInMeter = height / 100;
    const bmi = weight / (heightInMeter * heightInMeter);
    setBmi(bmi.toFixed(2));
  };

  const data = [
    { name: "18.5 이하", BMI: 18.5 },
    { name: "18.5 ~ 23", BMI: 23 },
    { name: "23 ~ 25", BMI: 25 },
    { name: "25 ~ 30", BMI: 30 },
    { name: "30 이상", BMI: 35 },
  ];

  return (
    <div>
      <h1>BMI 계산기</h1>
      <form>
        <label>
          성별:
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />{" "}
          남성
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />{" "}
          여성
        </label>
        <br />
        <label>
          키 (cm):
          <input
            type="text"
            name="height"
            value={height}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          체중 (kg):
          <input
            type="text"
            name="weight"
            value={weight}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          나이:
          <input type="text" name="age" value={age} onChange={handleChange} />
        </label>
        <br />
        <button type="button" onClick={calculateBMI}>
          계산하기
        </button>
      </form>
      {bmi && (
        <div>
          <h2>BMI 지수: {bmi}</h2>
        </div>
      )}
    </div>
  );
};

export default BmiCal;
