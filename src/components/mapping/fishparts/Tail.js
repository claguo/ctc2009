import React from "react";
import InvertColor from "../../InvertColor";

function Tail(props) {
  const { height, width, color} = props;
  const newColor = InvertColor(color)

  return (
    <div style={{display: 'flex', alignItems: 'center', zIndex: '-1'}}>
      <div style={{
        width: '0',
        height: '0',
        borderTop: `${height/2}px solid transparent`,
        borderRight: `${width}px solid ${newColor}`,
        borderBottom: `${height/2}px solid transparent`,
        marginLeft: '-5px'
        }} />
      <div style={{width:'8px', height: `${height+2}px`, marginLeft: '-2px', borderRadius: '15px 8px 8px 15px', backgroundColor: newColor}} />
    </div>
  )
}

export default Tail;