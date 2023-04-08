import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

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
      {/* <div className="grid" style={{ display: "flex" }}>
        <button style={{ width: "20%" }} onClick={() => navigate("/")}>
          일반
          <br />
          계산
        </button>
        <button style={{ width: "20%" }} onClick={() => navigate("/dateCal")}>
          날짜 <br />
          계산
        </button>
        <button style={{ width: "20%" }} onClick={() => navigate("/wordCal")}>
          글자수 <br />
          계산
        </button>
        <button style={{ width: "20%" }}>
          이자 <br />
          계산
        </button>
      </div> */}

      <select onChange={(e) => navigate(e.target.value)}>
        <option value="/">일반 계산기</option>
        <option value="/DateCal">날짜 계산기</option>
        <option value="/WordCal">글자수 계산기</option>
        <option value="/BmiCal">비만도 계산</option>
      </select>
    </div>
  );
};

export default Menu;
