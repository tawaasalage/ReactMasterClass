import React from "react";

export default function InlineBox() {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "2px solid #07ab0f",
        borderRadius: "10px",
        margin: "10px",
      }}
    >
      <img
        src="https://camo.githubusercontent.com/5e45bc648dba68520ce949a53690af6bcef2880f84a1d46cbb1636649afd6d84/68747470733a2f2f796176757a63656c696b65722e6769746875622e696f2f73616d706c652d696d616765732f696d6167652d313032312e6a7067"
        alt=""
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "10px",
          margin: "5px",
        }}
      />
      <h3>inline Style</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        numquam aperiam veniam ipsum suscipit sit officia quisquam accusamus
        quos beatae obcaecati itaque dicta facilis, dolores tempora pariatur
        nulla provident autem?
      </p>
    </div>
  );
}
