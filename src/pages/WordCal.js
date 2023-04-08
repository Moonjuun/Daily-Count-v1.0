import React, { useState } from "react";

const WordCal = () => {
  const [text, setText] = useState("");

  const totalCharacters = text.length;
  const charactersWithoutSpaces = text.replace(/\s/g, "").length;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <label htmlFor="text-input">글자수 세기:</label>
      <textarea id="text-input" value={text} onChange={handleChange} />

      <p>공백 포함: {totalCharacters}</p>
      <p>공백 제외: {charactersWithoutSpaces}</p>
    </div>
  );
};

export default WordCal;
