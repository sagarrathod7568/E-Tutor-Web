import React from "react";
import "./company.css";
import comp1 from "../../assets/column.png";
import comp2 from "../../assets/column (1).png";
import comp3 from "../../assets/column (2).png";
import comp4 from "../../assets/column (3).png";

export default function Companys() {
  return (
    <>
      <section className="companys">
        <div className="companys-box">
          <div className="companys-ttl">
            <h1>6.3k trusted companies</h1>
            <p>
              Nullam egestas tellus at enim ornare tristique. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>
          <div className="companys-imgs">
            <img src={comp1} alt="" />
            <img src={comp2} alt="" />
            <img src={comp3} alt="" />
            <img src={comp4} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
