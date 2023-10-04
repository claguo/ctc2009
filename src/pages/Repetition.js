import React from 'react';
import Repetition1 from '../components/Repetition1';
import Repetition2 from '../components/Repetition2';

function Repetition() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', alignItems: 'center'}}>  
      {/* <p>starting with a grid of random hues and lightnesses. clicked square takes the average hue and lightness of its four touching squares. touching squares also take the average of nearby squares.</p> */}
      <Repetition1 />
      <Repetition2 />
    </div>
  )
};

export default Repetition;