import React from "react";
import InvertColor from "../../InvertColor";

function Fin(props) {
  const {borderRadius, color, width} = props;
  const newColor=InvertColor(color);
  return (
    <div style={{marginRight: '10%', backgroundColor: newColor, height: '10px', width: width, borderRadius: borderRadius}}></div>
  )
}

export default Fin;