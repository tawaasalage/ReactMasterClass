import React from "react";
import style from "./ModuleBox.module.css";
import "./ModuleBox.css";

export default function ModuleBox() {
  return (
    <div className={style.div}>
      <img
        src="https://thumbs.dreamstime.com/b/golden-bird-expansive-wings-takes-flight-against-vibrant-blue-sky-scene-evokes-sense-freedom-wonder-sample-jpeg-364733156.jpg"
        alt=""
        className={style.img}
      />
      <h3>Module Style</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        numquam aperiam veniam ipsum suscipit sit officia quisquam accusamus
        quos beatae obcaecati itaque dicta facilis, dolores tempora pariatur
        nulla provident autem?
      </p>
    </div>
  );
}
