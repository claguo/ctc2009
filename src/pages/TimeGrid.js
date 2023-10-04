import React, { useState, useEffect } from 'react';
import database from './firebase';
import { getDatabase, ref, set, update, onValue } from "firebase/database";

function writeCellData() {
  // Loop to add 1004 cells
  for (let cellIndex = 0; cellIndex < 1004; cellIndex++) {
    // Generate some example data for each cell
    const isHovered = false; // Change as needed
    const isClicked = false; // Change as needed
    const hsl = { h: 0, s: 100, l: 50 }; // Change as needed

    // Call the writeCellData function to add the cell data to the database
    set(ref(database, 'cell/' + cellIndex), {
      isHovered: isHovered,
      isClicked: isClicked,
      hsl : hsl
    });
  }
}

// -----------------------------------------
const cellIndex = 1;
const cellRef = ref(database, 'cell/' + cellIndex);

onValue(cellRef, (snapshot) => {
  if (snapshot.exists()) {
    // If the snapshot exists, extract the child value you're interested in
    const isHovered = snapshot.child('isHovered').val(); // Read the isHovered child value
    const isClicked = snapshot.child('isClicked').val(); // Read the isClicked child value
    const hsl = snapshot.child('hsl').val(); // Read the hsl child value

    // Use the extracted child values as needed in your code
  } else {
    console.log('Snapshot does not exist for cellIndex:', cellIndex);
  }
}, (error) => {
  console.error('Error reading data:', error);
});
//-----------------------------------------

function updateIsHovered(index) {
  const updatedValues = {
    [`cell/${index}/isHovered`]: true, // Update the isHovered value
  };

  // Use the update() method to update the lower-level child values
  update(ref(database), updatedValues)
    .then(() => {
      console.log('Lower-level child values updated successfully.');
    })
    .catch((error) => {
      console.error('Error updating lower-level child values:', error);
    });
}

function TimeGrid() {
  useEffect(() => {
    // Call the writeCellData function when the component mounts
    writeCellData();
  }, []);

let cellIndex=2;
  // const cellIsHovered = ref(database, 'cell/' + cellIndex + '/' + isHovered);
//   const [name, setName] = useState();
//   const [age, setAge] = useState();
//   const db = getDatabase();
// const userRef = ref(db, 'user');
// const [cell, setCell] = useState();

const flowers = ['']
const date = new Date();
const hue = Math.round(scale(date.getSeconds(), 0, 60, 0, 360));
const light = Math.round(scale(date.getMinutes(), 0, 60, 0, 100));
const hsl = `hsl(${hue}, 100%, ${light}%)`
const [cellArray2, setCellArray2] = useState(Array.from({ length: 1008 }, (_, index) => ({content: '', isHovered: false, isClicked: false, hsl: 'hsl(171, 3%, 95%'})));

// const Test = (index) => {
//   const updatedCellArray2 = [...cellArray2];
//   if (updatedCellArray2[index].content !== '') {
//     updatedCellArray2[index].content = '';
//   }
//   else {
//     updatedCellArray2[index].content = flowers[Math.floor(Math.random() * 5)];
//   }
//   setCellArray2(updatedCellArray2);
// };


const handleMouseEnter = (index) => {
  const updatedCellArray2 = [...cellArray2];
  updatedCellArray2[index].isHovered = true;
  setCellArray2(updatedCellArray2);
  updateIsHovered(index);
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

  // const chars = ['+', '0', '.', 'o', 'O', '*']
  // const cellArray = [];
  // for (let i = 1; i < 1000; i++) {
  //   let index = (i);
  //   cellArray.push(index);
  // }

  return (
    <div style={{display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center'}}>
    {/* STARS */}
    {/* <div style={{display: 'flex', flexWrap: 'wrap', width: '1680px', alignItems:'flex-start', gap: '0'}}>
    {cellArray.map((cell, index) => (
      <div key={index}
        style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', fontSize: '20px'}}
      >
        {chars[Math.floor(Math.random() * 20)]}
      </div>
    ))}
    </div> */}

    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '60vw', alignItems:'center', gap: '0', border: '1px solid hsl(168, 6%, 89%)', borderRadius: '6px'}}>
    {cellArray2.map((cellObj, index) => (
      <button key={index}
        style={{width: '24px', height: '24px', fontSize: '24px', border: 'transparent', borderRadius: '2px',
        backgroundColor: cellObj.isClicked ? `${cellObj.hsl}` : ref(database, 'cell/' + index + '/isHovered') ? `${cellObj.hsl}` : 'transparent'}}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}
        onClick={() => handleMouseClick(index)}
      >
        {cellObj.content}
      </button>
    ))}
    </div>
    </div>
  )

}

export default TimeGrid;
