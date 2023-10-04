import React, { useState, useEffect } from 'react';

function Interaction() {

const date = new Date();
const hue = Math.round(scale(date.getSeconds(), 0, 60, 0, 360));
const light = Math.round(scale(date.getMinutes(), 0, 60, 0, 100));
const hsl = `hsl(${hue}, 100%, ${light}%)`
const [cellArray2, setCellArray2] = useState(Array.from({ length: 576 }, (_, index) => ({isHovered: false, isClicked: false, hsl: 'hsl(171, 3%, 95%'})));

const [cellSize, setCellSize] = useState(0)
let cellsPerRow=42

const handleMouseEnter = (index) => {
  const updatedCellArray2 = [...cellArray2];
  updatedCellArray2[index].isHovered = true;
  setCellArray2(updatedCellArray2);
};

const handleMouseLeave = (index) => {
  const updatedCellArray2 = [...cellArray2];
  updatedCellArray2[index].isHovered = false;
  setCellArray2(updatedCellArray2);
};

const handleMouseClick = (index) => {
  const updatedCellArray2 = [...cellArray2];
  updatedCellArray2[index].isClicked = !updatedCellArray2[index].isClicked;
  updatedCellArray2[index].hsl=hsl;
  setCellArray2(updatedCellArray2);
};

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const [containerWidth, setContainerWidth] = useState(0);

useEffect(() => {
  const parentContainer = document.getElementById('container');

  // Function to update containerWidth and cellSize
  const updateContainerWidth = () => {
    const newContainerWidth = parentContainer.clientWidth-42;
    setContainerWidth(parentContainer.clientWidth);
    const newCellSize = newContainerWidth / 24;
    setCellSize(newCellSize);
  };

  updateContainerWidth();

  // Add an event listener for window resize
  window.addEventListener('resize', updateContainerWidth);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('resize', updateContainerWidth);
  };
}, []);


  return (
    <>
    <div style={{margin:'16rem 4rem 2rem'}}>INTERACTION</div>
    <div style={{gap: '2%', display: 'flex', flexDirection: '', flexWrap: 'nowrap', justifyContent: 'center', marginBottom: '4rem'}}>

    <div id="container" style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: `30vw`, maxHeight: '80vh', overflow: 'hidden', alignItems:'center', gap: '1px', border: '1px solid hsl(168, 6%, 89%)', borderRadius: '6px'}}>
    {cellArray2.map((cellObj, index) => (
      <button key={index}
        style={{width: `${cellSize}px`, height: '20px', fontSize: '24px', border: 'transparent', flexShrink: '0', padding: 0,
        backgroundColor: cellObj.isClicked ? `${cellObj.hsl}` : cellObj.isHovered ? `${cellObj.hsl}` : 'transparent'}}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}
        onClick={() => handleMouseClick(index)}
      ></button>
    ))}
    </div>

    <div id="container" style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: `30vw`, overflow: 'hidden', alignItems:'center', gap: '1px', border: '1px solid hsl(168, 6%, 89%)', borderRadius: '6px'}}>
    {cellArray2.map((cellObj, index) => (
      <button key={index}
        style={{width: '20px', height: `${cellSize}px`, fontSize: '24px', border: 'transparent', flexShrink: '0', padding: 0,
        backgroundColor: cellObj.isClicked ? `${cellObj.hsl}` : cellObj.isHovered ? `${cellObj.hsl}` : 'transparent'}}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}
        onClick={() => handleMouseClick(index)}
      ></button>
    ))}
    </div>

    <div id="container" style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: `30vw`, maxHeight: '80vh', overflow: 'hidden', alignItems:'center', gap: '1px', border: '1px solid hsl(168, 6%, 89%)', borderRadius: '6px'}}>
    {cellArray2.map((cellObj, index) => (
      <button key={index}
        style={{width: `20px`, height: '20px', fontSize: '24px', border: 'transparent', flexShrink: '0', padding: 0,
        backgroundColor: cellObj.isClicked ? `${cellObj.hsl}` : cellObj.isHovered ? `${cellObj.hsl}` : 'transparent'}}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}
        onClick={() => handleMouseClick(index)}
      ></button>
    ))}
    </div>

    </div>
    </>
  )
}

export default Interaction;