import React from "react";

const ResultComponent = ({ result }) => {
  let formattedResult = result.toString();

  const decimalIndex = formattedResult.indexOf(".");
  if (decimalIndex !== -1) {
    // 소수점 이하 숫자가 있는 경우
    const integerPart = formattedResult.slice(0, decimalIndex);
    const decimalPart = formattedResult.slice(decimalIndex + 1);
    formattedResult =
      integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + decimalPart;
  } else {
    // 소수점 이하 숫자가 없는 경우
    formattedResult = formattedResult.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="CommonCal">
      <p className="result" style={{ color: "black" }}>
        {formattedResult}
      </p>
    </div>
  );
};

export default ResultComponent;
