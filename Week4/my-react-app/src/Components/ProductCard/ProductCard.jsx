import React from "react";
import "./styles.css";
import Button from "../Button/Button";

export default function ProductCard() {
  return (
    <div>
      <ul>
        <li>Product Name</li>
        <li>Description</li>
        <Button buttonName={"Click Me"} />
      </ul>
    </div>
  );
}
