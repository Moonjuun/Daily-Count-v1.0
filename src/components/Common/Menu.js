import React from "react";

const Menu = () => {
  return (
    // <nav aria-label="breadcrumb">
    //   <ul>
    //     <li>
    //       <a href="#">일반 계산</a>
    //     </li>
    //     <li>
    //       <a href="#">Category</a>
    //     </li>
    //     <li>
    //       <a href="#">Category</a>
    //     </li>
    //   </ul>
    // </nav>
    <div>
      <div className="grid" style={{ display: "flex" }}>
        <button style={{ width: "17%" }}>일반 계산</button>
        <button style={{ width: "17%" }}>날짜 계산</button>
        <button style={{ width: "18%" }}>글자수 계산</button>
        <button style={{ width: "17%" }}>이자 계산</button>
      </div>
      {/* <div className="grid" style={{ display: "flex" }}>
        <button style={{ width: "20%" }}>일반 계산</button>
        <button style={{ width: "20%" }}>날짜 계산</button>
        <button style={{ width: "20%" }}>글자수 계산</button>
        <button style={{ width: "20%" }}>이자 계산</button>
        <button style={{ width: "20%" }}>이자 계산</button>
      </div> */}
    </div>
  );
};

export default Menu;
