import React from "react";

const ResultComponent = ({ result, theme }) => {
  const formattedResult = result
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 천 단위 쉼표 추가

  return (
    <div className="CommonCal">
      <p className="result" style={{ color: "black" }}>
        {formattedResult}
      </p>
    </div>
  );
};

export default ResultComponent;
