import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");

  //cb function that will be sent to child component
  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); // update color state to a new value
    setChildrenColor(newChildColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>

      {/* child component that has an event listener attached to it to equal the callback function */}
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
