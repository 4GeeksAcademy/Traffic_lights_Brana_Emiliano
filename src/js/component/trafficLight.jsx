import React, { useState } from "react";

const TrafficLight = () => {
  const [colorSelected, setColorSelected] = useState("red");
  const [colorList, setColorList] = useState(["red", "yellow", "green"]);

  const generateColor = () => {
    const hexColors = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color = color + hexColors[Math.floor(Math.random() * hexColors.length)];
    }
    return color;
  };

  const handleToggleColor = () => {
    const presetColors = ["red", "yellow", "green"];
    const currentIndex = presetColors.indexOf(colorSelected);
    const nextIndex = (currentIndex + 1) % presetColors.length;
    setColorSelected(presetColors[nextIndex]);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="bg-dark" style={{ width: "30px", height: "150px" }}></div>
      <div
        className="bg-dark rounded-5 d-flex justify-content-evenly flex-column align-items-center py-2"
        style={{ width: "200px", minHeight: "400px" }}
      >
        {colorList.map((color, indexColor) => {
          return (
            <div
              key={indexColor}
              onClick={() => {
                setColorSelected(color);
              }}
              className={
                "rounded-circle " + (colorSelected === color ? "onLightYellow" : "")
              }
              style={{ width: "100px", height: "100px", backgroundColor: color }}
            ></div>
          );
        })}
      </div>
      <div className="d-flex flex-row justify-content-between">
        <button
          className="btn btn-success m-3"
          onClick={() => {
            if (colorList.length < 4) {
              setColorList([...colorList, generateColor()]);
            }
          }}
        >
          Agregar Color
        </button>
        <button className="btn btn-primary m-3" onClick={handleToggleColor}>
          Alternar Color
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
