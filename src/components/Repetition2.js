import React, { useState, useEffect } from 'react';

function Repetition2() {
  const [cellArray, setCellArray] = useState(Array.from({ length: 320 }, (_, index) => ({hue: Math.random()*320, light: Math.random()*(61)+40})));
  const [currentCell, setCurrentCell] = useState(16);

  const top = [];
  for (let i = 0; i < 20; i ++) {
    top.push(i);
  }
  top.forEach((index) => {
      cellArray[index].light = '100';
  });

  const bottom = [];
  for (let i = 300; i < 320; i ++) {
    bottom.push(i);
  }
  bottom.forEach((index) => {
      cellArray[index].light = '100';
  });

  // const right = [];
  // for (let i = 19; i <= 320; i += 20) {
  //   right.push(i);
  // }
  // right.forEach((index) => {
  //     cellArray[index].direction = 'DL';
  // });

  // const bottom = [];
  // for (let i = 300; i < 320; i ++) {
  //   bottom.push(i);
  // }
  // bottom.forEach((index) => {
  //     cellArray[index].direction = 'UL';
  // });

  // const left = [];
  // for (let i = 0; i < 320; i += 20) {
  //   left.push(i);
  // }
  // left.forEach((index) => {
  //     cellArray[index].direction = 'UR';
  // });
  
  // cellArray[19].direction = 'DL'

  // const downRight = (index) => {
  //   // const updatedCellArray = [...cellArray];
  //   // for (let i = 0; index + i < 320 && (index + i + 1) % 20 !== 0; i += 21) {
  //   //   updatedCellArray[index + i].hue = 0;
  //   // }
  //   // ]
  //   const updatedCellArray = [...cellArray];
  //   const updateCellWithDelay = () => {
  //     updatedCellArray[index].hue = 0;
  //     setCellArray([...updatedCellArray]);
  //     setTimeout(updateCellWithDelay, 100);
  //   }
  //   // let i = 0;
  //   // const updateCellWithDelay = () => {
  //   //   if (index + i < 320 && (index + i + 1) % 20 !== 0) {
  //   //     updatedCellArray[index + i].hue = 0;
  //   //     setCellArray([...updatedCellArray]);
  //   //     i += 21;
  //   //     setTimeout(updateCellWithDelay, 100);
  //   //   }
  //   // };

  //   updateCellWithDelay();
  // }

  // useEffect(() => {
  //   console.log('currentCell:', currentCell);
  //   const updatedCellArray = [...cellArray];
  //   let i = 0;

  //   const downRight = (inc) => {
  //     if (currentCell + i < 320 && (currentCell + i + 1) % 20 !== 0){
  //       updatedCellArray[currentCell + inc].isClicked = true;
  //       updatedCellArray[currentCell + inc].hue = 80;
  //       setCellArray([...updatedCellArray]);
  //       setCurrentCell(currentCell + inc + 21);
  //       console.log('down right'+currentCell)
  //       console.log('inc:'+inc)
  //     }
  //       // if (currentCell + inc < 320 && (currentCell + inc + 1) % 20 !== 0) {
  //       //   downRight(inc);
  //       // }
  //   };
  //   // downRight();

  //   // const downRight = () => {
  //   //   console.log('downRight')
  //   //   if (currentCell + i < 320 && (currentCell + i + 1) % 20 !== 0) {
  //   //     updatedCellArray[currentCell + i].isClicked = true;
  //   //     updatedCellArray[currentCell + i].hue = 80;
  //   //     setCellArray([...updatedCellArray]);
  //   //     setCurrentCell(currentCell + i);
  //   //     i = 21;
  //   //     setTimeout(downRight, 100);
  //   //     if ((currentCell + i + 1) % 20 == 0) {
  //   //       downLeft();
  //   //     }
  //   //   }
  //   // }

  //   const downLeft = () => {
  //     console.log('down left')
  //   }

  //   const upRight = () => {
  //     console.log('up right')
  //   }

  //   const upLeft = () => {
  //     console.log('up left')
  //   }

  //   for (let i = 0; currentCell + i < 320 && (currentCell + i + 1) % 20 !== 0; i +=21) {
  //       setTimeout(downRight(i), 100);
  //     }
    
  //   for (let i = 0; currentCell + i < 320 && (currentCell + i + 1) % 20 === 0; i+=19) {
  //       setTimeout(downRight(i), 100);
  //     }
    

  //   // else {
  //   //   console.log('stop')
  //   // }

  //   // for (let n = 0; currentCell + n < 320 && (currentCell + n + 1) % 20 !== 0; n+=21) {
  //   //   downRight(n)
  //   // }

  //   // const updateCells = () => {
  //   //   if (currentCell + i < 320) {
  //   //     updatedCellArray[currentCell + i].isClicked = true;
  //   //     updatedCellArray[currentCell + i].hue = 80;
  //   //     setCellArray([...updatedCellArray]);
  //   //     setCurrentCell(currentCell + i);
        
  //   //     if ((currentCell + i + 1) % 20 === 0 && (currentCell + i + 1) < 299) {
  //   //       i += 19;
  //   //     }
  //   //     else {
  //   //       i += 21;
  //   //     }
  //   //     setTimeout(updateCells, 100);
  //   //   }
  //   // };
  //   // updateCells();

  //   // const downRight = () => {
  //   //   if (currentCell + i < 320 && (currentCell + i + 1) % 20 !== 0) {
  //   //     updatedCellArray[currentCell + i].isClicked = true;
  //   //     updatedCellArray[currentCell + i].hue = 80;
  //   //     setCellArray([...updatedCellArray]);
  //   //     setCurrentCell(currentCell + i);
  //   //     i += 21;
  //   //     setTimeout(downRight, 100);
  //   //   }
  //   //   else if ((currentCell + i + 1) % 20 == 0) {
  //   //     i = 0;
  //   //     updatedCellArray[currentCell + i].isClicked = true;
  //   //     updatedCellArray[currentCell + i].hue = 80;
  //   //     setCellArray([...updatedCellArray]);
  //   //     setCurrentCell(currentCell + i);
  //   //     i += 19;
  //   //     setTimeout(downRight, 100);
  //   //   }
  //   // };
  //   // downRight();


  // //   const downRight = () => {
  // //     updatedCellArray[currentCell + i].isClicked = true;
  // //     updatedCellArray[currentCell + i].hue = 80;
  // //     setCellArray([...updatedCellArray]);
  // //     setCurrentCell(currentCell + i);
  // //     setTimeout(downRight, 100);
  // // };
  
  // // if (currentCell + i < 320 && (currentCell + i + 1) % 20 !== 0) {
  // //   setTimeout(downRight, 100);
  // //   i+=21;
  // // }
    
  // }, [currentCell]);

  // const updateNextCell = () => {
  //   const updatedCellArray = [...cellArray];
  //   updatedCellArray[indexClicked+1].hue = 80;
  // }

  // useEffect(() => {
  //   const updatedCellArray = [...cellArray];
  //   let i=1;

  //   if (indexClicked !== null) {
  //     const updateNextCell = () => {
  //       if (i<20) {
  //       updatedCellArray[indexClicked + i].hue = 60;
  //       setCellArray(updatedCellArray);
  //       i++;
  //       setTimeout(updateNextCell, 100);
  //     }
  //     updateNextCell();
  //   }
  //   }
  // }, [cellArray, indexClicked]);
// *******
  // useEffect(() => {
  //   console.log('useeffect'+currentCell)
  //   let inc = 0

  //   if (cellArray[currentCell].direction === 'DR') {
  //     inc = 21
  //   }
  //   else if (cellArray[currentCell].direction === 'DL') {
  //     inc = 19
  //   }
  //   else if (cellArray[currentCell].direction === 'UL') {
  //     inc = -21
  //   }
  //   else if (cellArray[currentCell].direction === 'UR') {
  //     inc = -19
  //   }
  //   // const updatedCellArray = [...cellArray];
  //   // updatedCellArray[currentCell].direction
  //   // setCellArray([...updatedCellArray]);

    
  //   handleMouseClick(currentCell+inc)

  // }, [currentCell]);


  const handleMouseClick = (index) => {
 
    const updatedCellArray = [...cellArray];
    const neighbors = [1, -1, 20, -20];
        // console.log(updatedCellArray[index].direction)

      // if ((index+1)%20 === 0) {
      //   updatedCellArray[index].direction='DL'
      // }
    for (let i=20; i<300; i++){
      if (updatedCellArray[i].hue - ((updatedCellArray[i].hue + updatedCellArray[i+1].hue + updatedCellArray[i-1].hue + updatedCellArray[i+20].hue + updatedCellArray[i-20].hue)/5) >80 ) {
        updatedCellArray[i].hue = (updatedCellArray[i].hue + updatedCellArray[i+1].hue + updatedCellArray[i-1].hue + updatedCellArray[i+20].hue + updatedCellArray[i-20].hue)/5;
      // if (index +19 >= 300) {
      //   updatedCellArray[index].direction = 'UR';
      // } else {
      // updatedCellArray[index+19].direction = 'DR';
      // }
      } else {updatedCellArray[i].hue = updatedCellArray[i].hue-20};
    }
      // if (updatedCellArray[i].light - ((updatedCellArray[i].light + updatedCellArray[i+1].light + updatedCellArray[i-1].light + updatedCellArray[i+20].light + updatedCellArray[i-20].light)/5) >10 ) {
      //   updatedCellArray[i].isClicked = true;
      //   updatedCellArray[i].light = (updatedCellArray[i].light + updatedCellArray[i+1].light + updatedCellArray[i-1].light + updatedCellArray[i+20].light + updatedCellArray[i-20].light)/5;
      // } else {updatedCellArray[i].light = updatedCellArray[i].light-30};
      
    setCellArray([...updatedCellArray]);
      
      // else if (updatedCellArray[index].direction === 'DL') {
      //   updatedCellArray[index + 19].isClicked = true;
      //   updatedCellArray[index + 19].hue = 80;
      //   if (index+19 >= 300) {
      //     updatedCellArray[index + 19].direction = 'UL';
      //   } else {
      //   updatedCellArray[index + 19].direction = 'DL';
      //   }
      //   setCellArray([...updatedCellArray]);
      // }
      // else if (updatedCellArray[index].direction === 'UR') {
      //   updatedCellArray[index - 19].isClicked = true;
      //   updatedCellArray[index - 19].hue = 80;
      //   if (index-19 <= 19) {
      //     updatedCellArray[index - 19].direction = 'DR';
      //   } else {
      //   updatedCellArray[index - 19].direction = 'UR';
      //   }
      //   setCellArray([...updatedCellArray]);
      // }
      // else if (updatedCellArray[index].direction === 'UL') {
      //   updatedCellArray[index - 21].isClicked = true;
      //   updatedCellArray[index - 21].hue = 80;
      //   if (index-21 <= 19) {
      //     updatedCellArray[index - 21].direction = 'DL';
      //   } else {
      //   updatedCellArray[index - 21].direction = 'UL';
      //   }
      //   setCellArray([...updatedCellArray]);
      // }


    // const downRight = (inc) => {
    //   if (index + inc < 320 && (index + inc + 1) % 20 !== 0){
    //     updatedCellArray[index + inc].isClicked = true;
    //     updatedCellArray[index + inc].hue = 80;
    //     setCellArray([...updatedCellArray]);
    //     setCurrentCell(index + inc);
    //     console.log('down right'+index)
    //     console.log('inc:'+inc)
    //   }
    // };

    // for (let i=0; currentCell + 21 < 320 && (currentCell + i + 1) % 20 !== 0; i+=21) {
    //   downRight(i);
    // }
    // for (let i=0; currentCell + 19 < 320 && ((currentCell + i) % 20) !==0; i+=19) {
    //   downRight(i);
    // }

    // if (currentCell % 20 === 0 ) {
    //   // updatedCellArray[index].hue = 260;
    //   // updatedCellArray[index].isClicked = true;
    //   // downLeft(index);
    // }
    // else {
    //     // updatedCellArray[index+i].hue = 200;
    //     // downRight(index);
    // }
    setCellArray(updatedCellArray);
  }
  
    // const updateNextCell = (index) => {
    //     updatedCellArray[index].hue = 80;
    //     setCellArray(updatedCellArray);
    //   }
    
    // for (let i = 0; i < 320; i++) {
    //   const nextI = index + i;
    //   const prevI = index - i;
    //   setTimeout(() => {

    //     for (const offset of offset) {
    //     if (nextI < 320 && nextI + 20 < 320 && nextI - 20 < 320) {
    //       updatedCellArray[nextI].hue = (updatedCellArray[index + i + 20].hue + updatedCellArray[index + i - 20].hue)/2;
    //     }
    //     // if (index - i >= 0 && index - i - 20 >= 0 ) {
    //     //   updatedCellArray[index - i].hue = (updatedCellArray[index - i + 20].hue + updatedCellArray[index - i - 20].hue)/2;
    //     // }
    //   }
    //     setCellArray(updatedCellArray);

    //   }, i*100);
    // }
  
  
  return (
    <div style={{marginTop: '3rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '480px', height: '384px', alignItems:'center', gap: '0', border: '1px solid hsl(168, 6%, 89%)', borderRadius: '6px'}}>
    {cellArray.map((cellObj, index) => (
      <button key={index}
        style={{width: '24px', height: '24px', fontSize: '24px', border: 'transparent', borderRadius: '2px', transition: '0.3s',
        backgroundColor: `hsl(${cellObj.hue}, 90%, ${cellObj.light}%)` }}
        onClick={() => handleMouseClick(index)}
      >
        {/* <p style={{fontSize: '16px', color: 'hsl(80, 100%, 50%', margin: '0'}}>{cellObj.isClicked ? '✿' : ''}</p> */}
      </button>
    ))}
    </div>
  )
}

export default Repetition2;