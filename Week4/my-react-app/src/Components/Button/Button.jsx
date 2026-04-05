import React from "react";
import "./styles.css";

export default function Button({ buttonName = "Login" }) {
  return <div>{buttonName}</div>;
}
