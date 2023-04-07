import React from "react";

const KeyPadComponent = ({ onClick }) => {
  const renderButton = (name) => (
    <button name={name} onClick={(e) => onClick(e.target.name)}>
      {name}
    </button>
  );

  return (
    <div className="CommonCal">
      <div className="Kepad">
        {renderButton("(")}
        {renderButton("BS")}
        {renderButton(")")}
        {renderButton("C")}
        <br />
        {renderButton("1")}
        {renderButton("2")}
        {renderButton("3")}
        {renderButton("+")}
        <br />
        {renderButton("4")}
        {renderButton("5")}
        {renderButton("6")}
        {renderButton("-")}
        <br />
        {renderButton("7")}
        {renderButton("8")}
        {renderButton("9")}
        {renderButton("*")}
        <br />
        {renderButton(".")}
        {renderButton("0")}
        {renderButton("=")}
        {renderButton("/")}
        <br />
      </div>
    </div>
  );
};

export default KeyPadComponent;
