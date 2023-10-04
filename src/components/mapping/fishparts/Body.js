import React, {useEffect, useState} from "react";
import ModifyColor from "../../ModifyColor";
import InvertColor from "../../InvertColor";

function Body(props) {
  const {borderRadius, color, width, pattern} = props;
  const [numberOfSpots, setNumberOfSpots] = useState(0);
  const patternColor = ModifyColor(color, -40);

  useEffect(() => {
    if (pattern === 'spots') {
      const parentContainer = document.getElementById("parent-container");

      if (parentContainer) {
        const containerWidth = parentContainer.clientWidth-2;
        const spotWidth = 16;

        const maxDivsThatFit = Math.floor(containerWidth / spotWidth);
        setNumberOfSpots(maxDivsThatFit);
      }
    }
  }, [pattern]);

  const spots = Array.from({ length: numberOfSpots }, (_, index) => (
    <div
      key={index}
      id='spot'
      style={{
        backgroundColor: patternColor,
        height: '8px',
        width: '8px',
        margin: '0 4px',
        borderRadius: '4px'
      }}
    ></div>
  ));

  return (
    <div style={{width: `${width}px`, height: '60px', backgroundColor: color, borderRadius: borderRadius, overflow: 'hidden'}}>
      {pattern === 'half' ? (
        <div id='parent-container' style={{backgroundColor: patternColor, height: '45%'}}></div>
      ) : pattern === 'spots' ? (
        <div id='parent-container' style={{height: '45%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {spots}
        </div>
      ) : <div id='parent-container' style={{height: '45%'}}></div>}
      <div style={{marginLeft: '6px', backgroundColor: InvertColor(color), width: '20px', height: '20px', borderRadius: '0px 8px 16px 8px', transform: 'rotate(-45deg)'}}/>
    </div>
  );
}

export default Body;