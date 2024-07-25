import React from "react";
import "./slider.css";
import hololiveData from "./assets/chara.json";

function Slider({ onSelectCharacter }) {
  return (
    <div className="slider">
      <i className="fa-solid fa-chevron-right"></i>{" "}
      <div className="slider-box">
        {hololiveData.map((HoloID, index) => (
          <img
            key={index}
            alt={HoloID.Name}
            src={require(`./assets/${HoloID.Border}`)}
            className="slider-box-img"
            onClick={() => onSelectCharacter(HoloID)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
