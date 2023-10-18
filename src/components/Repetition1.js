import React, { useState } from 'react';

function Repetition1() {
  const [cellArray, setCellArray] = useState(Array.from({ length: 320 }, (_, index) => ({isHovered: false, isClicked: false, hue: Math.random()*320, light: Math.random()*100})));
  // const hue = 0;
  // const light = 47;
  // const hsl = `hsl(${hue}, 100%, ${light}%)`
  
  const handleMouseEnter = (index) => {
    const updatedCellArray = [...cellArray];
    updatedCellArray[index].isHovered = true;
    setCellArray(updatedCellArray);
  };
  
  const handleMouseLeave = (index) => {
    const updatedCellArray = [...cellArray];
    updatedCellArray[index].isHovered = false;
    setCellArray(updatedCellArray);
  };
  const handleMouseClick = (index) => {
    const updatedCellArray = [...cellArray];
    // updatedCellArray[index].isClicked = !updatedCellArray[index].isClicked;
    updatedCellArray[index].isClicked = true;
    // for (let i=index; i < 41; i++){
    //   updatedCellArray[i+1].isClicked = true;
    // }
    const plus = [1, -1, 20, -20];


    // for (const offset of corners) {
    //   updatedCellArray[index + offset].isClicked = true;
    //   updatedCellArray[index + offset].light = 90;
    // }
    for (const offset of plus) {
      const nearbyIndex = index + offset
      if (nearbyIndex >= 0 && nearbyIndex < 320) {
      updatedCellArray[nearbyIndex].isClicked = true;
      }
    }

    // updatedCellArray[index + offset].light = 90;

    // for (let i=index; i < index+; i++){
    //   updatedCellArray[1+i].hue=(updatedCellArray[i].hue + cellArray[i+1].hue)/2;
    // }
    let newHue = 0;
    let newLight = 0;

    for (const plusoffset of plus) {
      // updatedCellArray[index + offset].light -= 50;
      const nearbyIndex = index + plusoffset
      if (nearbyIndex >= 0 && nearbyIndex < 320) {
        newHue += updatedCellArray[nearbyIndex].hue
        newLight += updatedCellArray[nearbyIndex].light
      }
      

    }

    updatedCellArray[index].hue=newHue/4;
    updatedCellArray[index].light=newLight/4;


    // updatedCellArray[index].hue=(updatedCellArray[index+1].hue + updatedCellArray[index-1].hue + updatedCellArray[index+42].hue + updatedCellArray[index-42].hue)/4
    // updatedCellArray[index+1].hue=(updatedCellArray[index+2].hue + updatedCellArray[index-2].hue + updatedCellArray[index+42].hue + updatedCellArray[index-42].hue)/4

    // updatedCellArray[index+1].hue=(updatedCellArray[index].hue + updatedCellArray[index+2].hue)/2;
    // updatedCellArray[index-1].hue=(updatedCellArray[index].hue + updatedCellArray[index-2].hue)/2;
    // updatedCellArray[index+42].hue=(updatedCellArray[index].hue + updatedCellArray[index+84].hue)/2;
    // updatedCellArray[index-42].hue=(updatedCellArray[index].hue + updatedCellArray[index-84].hue)/2;

    // updatedCellArray[index-1].hue=(updatedCellArray[index].hue + cellArray[index+1].hue)/2;;
    // updatedCellArray[index+42].hue=(updatedCellArray[index].hue + cellArray[index+1].hue)/2;
    // updatedCellArray[index-42].hue=(updatedCellArray[index].hue + cellArray[index+1].hue)/2;

    setCellArray(updatedCellArray);
  };
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '480px', height: '384px', alignItems:'center', gap: '0', border: '1px solid hsl(168, 6%, 89%)', borderRadius: '6px'}}>
    {cellArray.map((cellObj, index) => (
      <button key={index}
        style={{width: '24px', height: '24px', fontSize: '24px', border: 'transparent', borderRadius: '2px',
        backgroundColor: cellObj.isClicked ? `hsl(${cellObj.hue}, 90%, ${cellObj.light}%)` : cellObj.isHovered ? `hsl(${cellObj.hue}, 90%, 47%)` : 'transparent'}}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}
        onClick={() => handleMouseClick(index)}
      ></button>
    ))}
    </div>
  )
}

export default Repetition1;